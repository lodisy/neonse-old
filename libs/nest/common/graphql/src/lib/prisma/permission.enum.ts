import { registerEnumType } from '@nestjs/graphql';

export enum Permission {
    Authenticated = "Authenticated",
    SuperAdmin = "SuperAdmin",
    Owner = "Owner",
    Public = "Public",
    CreateContents = "CreateContents",
    ReadContents = "ReadContents",
    UpdateContents = "UpdateContents",
    DeleteContents = "DeleteContents",
    CreateSettings = "CreateSettings",
    ReadSettings = "ReadSettings",
    UpdateSettings = "UpdateSettings",
    DeleteSettings = "DeleteSettings",
    CreateAdministrator = "CreateAdministrator",
    ReadAdministrator = "ReadAdministrator",
    UpdateAdministrator = "UpdateAdministrator",
    DeleteAdministrator = "DeleteAdministrator",
    CreateAsset = "CreateAsset",
    ReadAsset = "ReadAsset",
    UpdateAsset = "UpdateAsset",
    DeleteAsset = "DeleteAsset",
    CreateOrder = "CreateOrder",
    ReadOrder = "ReadOrder",
    UpdateOrder = "UpdateOrder",
    DeleteOrder = "DeleteOrder",
    CreatePaymentMethod = "CreatePaymentMethod",
    ReadPaymentMethod = "ReadPaymentMethod",
    UpdatePaymentMethod = "UpdatePaymentMethod",
    DeletePaymentMethod = "DeletePaymentMethod",
    CreateProduct = "CreateProduct",
    ReadProduct = "ReadProduct",
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct"
}

registerEnumType(Permission, { name: 'Permission',
        description: "权限"
    })
