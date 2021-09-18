import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Country, Order, Prisma } from '@prisma/client'

@Injectable()
export class OrdersService {
    constructor(private prisma: PrismaService) {}

    /** 验证订单是否不存在 for query */

    async isNotExisting(where: Prisma.OrderWhereUniqueInput): Promise<boolean> {
        const isNotExisting = await this.prisma.order.findFirst({
            where,
        })

        if (!isNotExisting) throw new HttpException('该订单不存在', HttpStatus.NOT_FOUND)

        return false
    }

    /** 验证订单是否不存在 for mutation */

    async isExisting(where: Prisma.OrderWhereUniqueInput): Promise<boolean> {
        const isExisting = await this.prisma.order.findFirst({
            where,
        })

        if (isExisting) throw new HttpException('该订单已存在', HttpStatus.CONFLICT)

        return false
    }

    // 验证前端商品是否就是后端商品

    async valideItems(items: Prisma.OrderItemCreateManyInput[]): Promise<boolean> {
        const result = items.map((item) => {
            return this.prisma.product.findUnique({
                where: { sku: item.sku },
            })
        })
        // some items not found

        if (result.some((r) => r === null)) return false

        return true
    }

    /** 计算商品价格 */

    async calcSubTotal(items: Prisma.OrderItemCreateManyInput[]): Promise<number> {
        if (items.length === 0) return 0

        const itemCost = items.reduce((total, item) => {
            if (item.discountedUnitPrice) {
                return total + item.discountedUnitPrice * item.quantity
            } else {
                return total + item.unitPrice * item.quantity
            }
        }, 0)
        return itemCost
    }

    /** 计算运费
     * TODO 后端可配置公式
     */

    async calcShipping(
        items: Prisma.OrderItemCreateManyInput[],
        country: Country,
        destination: string,
    ): Promise<number> {
        let shippingCost = 0
        let amount = 0
        if (items === null || items.length === 0 || country === undefined || country === null || country.code === '')
            return 0

        items.map((item) => {
            amount = amount + item.quantity
        })

        let baseCost = 0
        let factor = 0

        if (country.code === 'CN') {
            if (
                destination === '北京市' ||
                destination === '天津市' ||
                destination === '河北省' ||
                destination === '山西省' ||
                destination === '湖南省' ||
                destination === '陕西省'
            ) {
                //北京、天津、河北、山西、湖南、陕西
                baseCost = 23
                factor = 10
            } else if (
                destination === '广东省' ||
                destination === '广西壮族自治区' ||
                destination === '辽宁省' ||
                destination === '黑龙江省' ||
                destination === '吉林省' ||
                destination === '四川省' ||
                destination === '贵州省' ||
                destination === '甘肃省' ||
                destination === '内蒙古自治区' ||
                destination === '重庆市' ||
                destination === '宁夏回族自治区'
            ) {
                // 内蒙古 东三省 广东 广西 重庆 四川 贵州 甘肃 宁夏
                baseCost = 23
                factor = 13
            } else if (destination === '江苏省' || destination === '上海市' || destination === '浙江省') {
                // 江浙沪
                baseCost = 12
                factor = 2
            } else if (destination === '安徽省') {
                // 安徽
                baseCost = 14
                factor = 2
            } else if (destination === '福建省' || destination === '山东省') {
                // 福建 山东
                baseCost = 22
                factor = 10
            } else if (destination === '江西省' || destination === '河南省' || destination === '湖北省') {
                // 江西 河南 湖北
                baseCost = 22
                factor = 8
            } else if (destination === '海南省' || destination === '云南省' || destination === '青海省') {
                // 海南 云南 青海
                baseCost = 23
                factor = 14
            } else {
                // 西藏 新疆
                baseCost = 26
                factor = 21
            }
        } else {
            // 非中国大陆
            baseCost = 23
            factor = 70
        }

        shippingCost = baseCost + (amount - 1) * factor
        return shippingCost
    }

    /** 计算订单总价 */

    async calcTotal(
        items: Prisma.OrderItemCreateManyInput[],
        // coupon: Promotion,
        country: Country,
        destination: string,
    ): Promise<number> {
        const subTotal = await this.calcSubTotal(items)
        const shippingCost = await this.calcShipping(items, country, destination)
        return subTotal + shippingCost
    }

    /** 创建订单 超时  10 分钟自动关闭订单 */

    async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
        const { code, items } = data

        await this.isExisting({
            code,
        })

        // todo validate order

        const orderItems = items.createMany.data as Array<Prisma.OrderItemCreateManyInput>
        const validateItems = await this.valideItems(orderItems)

        let subTotal = 0
        let total = 0

        if (validateItems) {
            subTotal = await this.calcSubTotal(orderItems)
            total = await this.calcTotal(orderItems, data.address.create.country, data.address.create.city)
        }

        return this.prisma.order
            .create({
                data: {
                    ...data,
                    subTotal,
                    total,
                },
            })
            .then((order) => {
                setTimeout(
                    async () =>
                        await this.prisma.order.update({
                            where: { code },
                            data: {
                                pending: false,
                                status: 'cancelled',
                            },
                        }),
                    1000 * 60 * 10,
                )
                return order
            })
    }

    /** 修改订单 订单被关闭后，无法修改 */

    async updateOrder(code: string, data: Prisma.OrderUpdateInput): Promise<Order> {
        await this.isExisting({ code })

        const order = await this.prisma.order.findUnique({
            where: { code },
        })

        if (order.status === 'cancelled') throw new HttpException('该订单已关闭，无法修改', HttpStatus.UNAUTHORIZED)

        return this.prisma.order.update({
            where: { code },
            data,
        })
    }
}
