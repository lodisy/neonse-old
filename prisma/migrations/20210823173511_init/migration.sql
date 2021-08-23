-- CreateEnum
CREATE TYPE "AuthenticationStrategy" AS ENUM ('Local', 'JWT', 'SMS', 'Wechat');

-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('PRODUCT', 'ARTICLE', 'LOOKBOOK', 'BRAND');

-- CreateEnum
CREATE TYPE "CurrencyCode" AS ENUM ('USD', 'CNY', 'HKD', 'EUR', 'GBP');

-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('IMAGE', 'VIDEO', 'SOUND', 'BINARY');

-- CreateEnum
CREATE TYPE "LanguageCode" AS ENUM ('zh_Hans', 'zh_Hant', 'en', 'de');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'completed', 'archived', 'exchangeRequest', 'returnRequest', 'requestPending', 'requestAccepted', 'requestDenied', 'returning', 'received', 'refunded', 'cancelled');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('Alipay', 'WechatPay', 'Stripe', 'PayPal');

-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('Authenticated', 'SuperAdmin', 'Owner', 'Public', 'CreateContents', 'ReadContents', 'UpdateContents', 'DeleteContents', 'CreateSettings', 'ReadSettings', 'UpdateSettings', 'DeleteSettings', 'CreateAdministrator', 'ReadAdministrator', 'UpdateAdministrator', 'DeleteAdministrator', 'CreateAsset', 'ReadAsset', 'UpdateAsset', 'DeleteAsset', 'CreateOrder', 'ReadOrder', 'UpdateOrder', 'DeleteOrder', 'CreatePaymentMethod', 'ReadPaymentMethod', 'UpdatePaymentMethod', 'DeletePaymentMethod', 'CreateProduct', 'ReadProduct', 'UpdateProduct', 'DeleteProduct');

-- CreateEnum
CREATE TYPE "RoleStatus" AS ENUM ('normal', 'terminated');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'IT44', 'IT46', 'IT48', 'IT50', 'IT52', 'OS', 'JP0', 'JP1', 'JP2', 'JP3', 'JP4', 'EU41', 'EU42', 'EU43', 'EU44', 'EU45');

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT,
    "fullname" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "company" TEXT,
    "streetLine1" TEXT NOT NULL,
    "streetLine2" TEXT,
    "district" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT NOT NULL,
    "default" BOOLEAN DEFAULT true,
    "customFields" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthenticationMethod" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "strategy" "AuthenticationStrategy" NOT NULL DEFAULT E'Local',
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "country" TEXT,
    "year" INTEGER,
    "description" TEXT,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "country" TEXT,
    "description" TEXT,
    "brandId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT,
    "number" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "bank" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Channel" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "defaultLanguageCode" "LanguageCode" NOT NULL DEFAULT E'en',
    "currencyCode" "CurrencyCode" NOT NULL DEFAULT E'USD',
    "priceIncludeTax" BOOLEAN DEFAULT true,
    "customFields" JSONB,
    "productVariantId" TEXT,
    "roleId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileId" TEXT,
    "content" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "countryId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "title" TEXT,
    "caption" TEXT,
    "format" "FileType" NOT NULL,
    "mimeType" TEXT NOT NULL,
    "size" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "sourceId" TEXT,
    "autoPlay" BOOLEAN,
    "customFields" JSONB,
    "profileId" TEXT,
    "profileAvatarId" TEXT,
    "productId" TEXT,
    "productVariantId" TEXT,
    "reviewId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT NOT NULL,
    "type" "ContentType" NOT NULL,
    "productId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "placedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "pending" BOOLEAN NOT NULL DEFAULT true,
    "status" "OrderStatus" NOT NULL DEFAULT E'pending',
    "totalQuantity" INTEGER NOT NULL,
    "subTotal" INTEGER NOT NULL,
    "subTotalWithTax" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "totalWithTax" INTEGER NOT NULL,
    "tracking" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderAddress" (
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "fullname" TEXT NOT NULL,
    "company" TEXT,
    "streetLine1" TEXT NOT NULL,
    "streetLine2" TEXT,
    "district" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT NOT NULL,
    "customFields" JSONB,
    "orderId" TEXT NOT NULL,

    PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "brands" TEXT NOT NULL,
    "size" TEXT,
    "color" TEXT,
    "style" TEXT,
    "unitPrice" INTEGER NOT NULL,
    "unitPriceWithTax" INTEGER NOT NULL,
    "discountedUnitPrice" INTEGER NOT NULL,
    "discountedUnitPriceWithTax" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "orderId" TEXT,
    "fileId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "method" "PaymentMethod" NOT NULL,
    "status" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "errorMessage" TEXT NOT NULL,
    "metadata" JSONB,
    "orderId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "discription" TEXT,
    "price" INTEGER NOT NULL,
    "featured" BOOLEAN DEFAULT false,
    "draft" BOOLEAN DEFAULT true,
    "stock" INTEGER NOT NULL,
    "sold" INTEGER DEFAULT 0,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "discription" TEXT,
    "productId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "parentId" TEXT,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategoryTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "productCategoryId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductType" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTypeTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "productTypeId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "brands" TEXT NOT NULL,
    "currencyCode" "CurrencyCode" NOT NULL DEFAULT E'USD',
    "price" INTEGER NOT NULL,
    "sale" INTEGER,
    "stock" INTEGER DEFAULT 1,
    "sold" INTEGER NOT NULL DEFAULT 0,
    "draft" BOOLEAN DEFAULT false,
    "productId" TEXT NOT NULL,
    "customFields" JSONB,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "productVariantId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantColor" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',
    "productVariantId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantColorTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "productVariantColorId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantSize" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "productVariantId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantStyle" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',
    "productVariantId" TEXT,
    "fileId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantStyleTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "productVariantStyleId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" BIGINT,
    "point" INTEGER DEFAULT 0,
    "level" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promotion" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startAt" TIMESTAMP(3),
    "endAt" TIMESTAMP(3),
    "couponCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "perCustomerUsageLimit" INTEGER,
    "promotionListId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromotionList" (
    "id" TEXT NOT NULL,
    "total" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Refund" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT NOT NULL,
    "productId" TEXT,
    "rate" INTEGER NOT NULL,
    "description" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "status" "RoleStatus" DEFAULT E'normal',
    "isDefault" BOOLEAN DEFAULT false,
    "permissions" "Permission"[],
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoleTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "roleId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShippingMethod" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'en',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShippingMethodTranslation" (
    "id" TEXT NOT NULL,
    "languageCode" "LanguageCode" NOT NULL DEFAULT E'zh_Hans',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "shippingMethodId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "email" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT NOT NULL,
    "lastLoginAt" TIMESTAMP(3),
    "customFields" JSONB,
    "jwtToken" TEXT NOT NULL,
    "resetPasswordToken" TEXT,
    "identifierToken" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BrandToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BrandToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToProductType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToProductCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductCategoryToProductType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserFollows" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand.slug_unique" ON "Brand"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Card.number_unique" ON "Card"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Channel.code_unique" ON "Channel"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Channel.token_unique" ON "Channel"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Comment.profileId_unique" ON "Comment"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Country.code_unique" ON "Country"("code");

-- CreateIndex
CREATE UNIQUE INDEX "File.url_unique" ON "File"("url");

-- CreateIndex
CREATE UNIQUE INDEX "File.sourceId_unique" ON "File"("sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "File_profileAvatarId_unique" ON "File"("profileAvatarId");

-- CreateIndex
CREATE UNIQUE INDEX "Like.profileId_unique" ON "Like"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Like.productId_unique" ON "Like"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Order.code_unique" ON "Order"("code");

-- CreateIndex
CREATE UNIQUE INDEX "OrderAddress_orderId_unique" ON "OrderAddress"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem.sku_unique" ON "OrderItem"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Payment.transactionId_unique" ON "Payment"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_orderId_unique" ON "Payment"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "Product.sku_unique" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategory.slug_unique" ON "ProductCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductType.name_unique" ON "ProductType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductType.slug_unique" ON "ProductType"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant.sku_unique" ON "ProductVariant"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantColor.value_unique" ON "ProductVariantColor"("value");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantColor_productVariantId_unique" ON "ProductVariantColor"("productVariantId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantSize_productVariantId_unique" ON "ProductVariantSize"("productVariantId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantStyle_productVariantId_unique" ON "ProductVariantStyle"("productVariantId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile.userId_unique" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Promotion.couponCode_unique" ON "Promotion"("couponCode");

-- CreateIndex
CREATE UNIQUE INDEX "Review.profileId_unique" ON "Review"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Role.slug_unique" ON "Role"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ShippingMethod.code_unique" ON "ShippingMethod"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User.jwtToken_unique" ON "User"("jwtToken");

-- CreateIndex
CREATE UNIQUE INDEX "User.resetPasswordToken_unique" ON "User"("resetPasswordToken");

-- CreateIndex
CREATE UNIQUE INDEX "User.identifierToken_unique" ON "User"("identifierToken");

-- CreateIndex
CREATE UNIQUE INDEX "_BrandToProfile_AB_unique" ON "_BrandToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandToProfile_B_index" ON "_BrandToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BrandToProduct_AB_unique" ON "_BrandToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandToProduct_B_index" ON "_BrandToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductType_AB_unique" ON "_ProductToProductType"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductType_B_index" ON "_ProductToProductType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductCategory_AB_unique" ON "_ProductToProductCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductCategory_B_index" ON "_ProductToProductCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductCategoryToProductType_AB_unique" ON "_ProductCategoryToProductType"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductCategoryToProductType_B_index" ON "_ProductCategoryToProductType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFollows_AB_unique" ON "_UserFollows"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFollows_B_index" ON "_UserFollows"("B");

-- AddForeignKey
ALTER TABLE "Address" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthenticationMethod" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandTranslation" ADD FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Channel" ADD FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Channel" ADD FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountryTranslation" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("profileAvatarId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderAddress" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD FOREIGN KEY ("parentId") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategoryTranslation" ADD FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTypeTranslation" ADD FOREIGN KEY ("productTypeId") REFERENCES "ProductType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantTranslation" ADD FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantColor" ADD FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantColorTranslation" ADD FOREIGN KEY ("productVariantColorId") REFERENCES "ProductVariantColor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantSize" ADD FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantStyle" ADD FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantStyle" ADD FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantStyleTranslation" ADD FOREIGN KEY ("productVariantStyleId") REFERENCES "ProductVariantStyle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion" ADD FOREIGN KEY ("promotionListId") REFERENCES "PromotionList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoleTranslation" ADD FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingMethodTranslation" ADD FOREIGN KEY ("shippingMethodId") REFERENCES "ShippingMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToProfile" ADD FOREIGN KEY ("A") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToProfile" ADD FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToProduct" ADD FOREIGN KEY ("A") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToProduct" ADD FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductType" ADD FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductType" ADD FOREIGN KEY ("B") REFERENCES "ProductType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductCategory" ADD FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductCategory" ADD FOREIGN KEY ("B") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductCategoryToProductType" ADD FOREIGN KEY ("A") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductCategoryToProductType" ADD FOREIGN KEY ("B") REFERENCES "ProductType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD FOREIGN KEY ("A") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
