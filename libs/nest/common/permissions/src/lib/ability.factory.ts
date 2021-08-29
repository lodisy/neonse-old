import { Ability, AbilityBuilder, AbilityClass, ForcedSubject } from '@casl/ability'
import { PrismaAbility, Subjects } from '@casl/prisma'
import { Action } from '@neonse/nest-common-graphql'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import {
    Address,
    AuthenticationMethod,
    Brand,
    BrandTranslation,
    Card,
    Channel,
    Comment,
    Country,
    CountryTranslation,
    File,
    Like,
    Order,
    OrderAddress,
    OrderItem,
    Payment,
    Permission,
    Prisma,
    Product,
    ProductCategory,
    ProductCategoryTranslation,
    ProductTranslation,
    ProductType,
    ProductTypeTranslation,
    ProductVariant,
    ProductVariantColor,
    ProductVariantColorTranslation,
    ProductVariantSize,
    ProductVariantStyle,
    ProductVariantStyleTranslation,
    ProductVariantTranslation,
    Profile,
    Promotion,
    PromotionList,
    Refund,
    Review,
    Role,
    RoleTranslation,
    ShippingMethod,
    ShippingMethodTranslation,
    Source,
    User,
} from '@prisma/client'
import { PermissionsService } from './permissions.service'

@Injectable()
export class AbilityFactory {
    constructor(private permissionsService: PermissionsService) {}

    async createAbility(modelName: Prisma.ModelName, user: User) {
        if (modelName === 'Permission') throw new HttpException('不允许创建权限', HttpStatus.CONFLICT)

        const subjects = [modelName, 'all']
        const actions = Object.keys(Action)
        type Abilities = [
            typeof actions[number],
            typeof subjects[number] | ForcedSubject<Exclude<typeof subjects[number], 'all'>>,
        ]
        // type AppAbility = Ability<Abilities>

        const permissions = await this.permissionsService.readPermissions({
            where: {
                subject: modelName,
            },
            select: {
                action: true,
                subject: true,
                fields: true,
                conditions: true,
                inverted: true,
                reason: true,
                role: true,
                roleId: true,
            },
        })

        return new Ability<Abilities>(permissions)
    }

    async createPrismaAbility() {
        // 必须导入所有 Model
        type PrismaModels = Subjects<{
            Address: Address
            AuthenticationMethod: AuthenticationMethod
            Brand: Brand
            BrandTranslation: BrandTranslation
            Card: Card
            Channel: Channel
            Comment: Comment
            Country: Country
            CountryTranslation: CountryTranslation
            File: File
            Like: Like
            Order: Order
            OrderAddress: OrderAddress
            OrderItem: OrderItem
            Payment: Payment
            Permission: Permission
            Product: Product
            ProductTranslation: ProductTranslation
            ProductCategory: ProductCategory
            ProductCategoryTranslation: ProductCategoryTranslation
            ProductType: ProductType
            ProductTypeTranslation: ProductTypeTranslation
            ProductVariant: ProductVariant
            ProductVariantTranslation: ProductVariantTranslation
            ProductVariantColor: ProductVariantColor
            ProductVariantColorTranslation: ProductVariantColorTranslation
            ProductVariantSize: ProductVariantSize
            ProductVariantStyle: ProductVariantStyle
            ProductVariantStyleTranslation: ProductVariantStyleTranslation
            Profile: Profile
            Promotion: Promotion
            PromotionList: PromotionList
            Refund: Refund
            Review: Review
            Role: Role
            RoleTranslation: RoleTranslation
            ShippingMethod: ShippingMethod
            ShippingMethodTranslation: ShippingMethodTranslation
            Source: Source
            User: User
        }>
        type AppAbility = PrismaAbility<[string, PrismaModels]>

        const AppAbility = PrismaAbility as AbilityClass<AppAbility>

        // return new Ability<AppAbility>(rules)

        const { can, cannot, build } = new AbilityBuilder(AppAbility)

        const permissions = await this.permissionsService.readPermissions({})

        permissions.map((permission) => {
            const { action, subject, fields, conditions } = permission
            if (permission.inverted) {
                return cannot(action, subject, fields, conditions)
            }
            return can(action, subject, subject, conditions)
        })

        return build()
    }
}
