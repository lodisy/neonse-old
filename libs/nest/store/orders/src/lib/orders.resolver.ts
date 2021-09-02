import { FindManyOrderArgs, Order, OrderCreateInput, OrderUpdateInput } from '@neonse/nest-common-graphql'
import { PrismaService } from '@neonse/nest-common-prisma'
import { GraphqlJwtAuthGuard } from '@neonse/nest-common-shared'
import { UseGuards } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { OrdersService } from './orders.service'

@Resolver(() => Order)
export class OrdersResolver {
    constructor(private ordersService: OrdersService, private prisma: PrismaService) {}

    /** 查询多个订单
     * @example
     * query{
     *  orders(orderBy:{ createdAt:desc }){
     *    id
     *    name
     *    ...
     *  }
     * }
     */

    @Query(() => [Order], {
        description: '获取多条订单，可指定条件',
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async orders(@Info() info: GraphQLResolveInfo, @Args() query: FindManyOrderArgs): Promise<Order[]> {
        const select = new PrismaSelect(info).value

        return this.prisma.order.findMany({
            query,
            ...select,
        })
    }

    /** 查询单条订单详情
     * @example
     * query{
     *  order(code:"code"){
     *    id
     *    code
     *    ...
     *  }
     * }
     */

    @Query(() => Order, {
        description: '根据 code 获取单条订单',
    })
    @UseGuards(GraphqlJwtAuthGuard)
    async order(@Info() info: GraphQLResolveInfo, @Args('code', { type: () => String }) code: string): Promise<Order> {
        await this.ordersService.isNotExisting({ code })

        const select = new PrismaSelect(info).value

        return this.prisma.order.findUnique({
            where: { code },
            ...select,
        })
    }

    /**
     * 前端创建订单
     * @example
     */

    @Mutation(() => Order, {
        description: '创建订单',
    })
    async createOrder(@Args('data') data: OrderCreateInput): Promise<Order> {
        const { code } = data

        await this.ordersService.isExisting({
            code,
        })

        return this.prisma.order.create({
            data,
        })
    }

    /** 前后端更新单条订单
     * @example
     * mutation updateOrder(code:"code", data:{
     *  field:{
     *   set:xxx
     *  }
     * }){
     *  ...
     * }
     */
    // TODO 必须加权限 订单创建人或管理员
    @Mutation(() => Order, {
        description: '根据 code 更新指定订单信息',
    })
    async updateOrder(
        @Args('code', { type: () => String }) code: string,
        @Args('data') data: OrderUpdateInput,
    ): Promise<Order> {
        await this.ordersService.isExisting({
            code,
        })

        return this.prisma.order.update({
            where: { code },
            data,
        })
    }
}
