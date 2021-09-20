/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ShippingZone` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_countryId_fkey";

-- DropForeignKey
ALTER TABLE "AuthenticationMethod" DROP CONSTRAINT "AuthenticationMethod_userId_fkey";

-- DropForeignKey
ALTER TABLE "CountryTranslation" DROP CONSTRAINT "CountryTranslation_countryId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_profileAvatarId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_profileId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderAddress" DROP CONSTRAINT "OrderAddress_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_fileId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_roleId_fkey";

-- DropForeignKey
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategoryTranslation" DROP CONSTRAINT "ProductCategoryTranslation_productCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTypeTranslation" DROP CONSTRAINT "ProductTypeTranslation_productTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariantColorTranslation" DROP CONSTRAINT "ProductVariantColorTranslation_productVariantColorId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariantStyle" DROP CONSTRAINT "ProductVariantStyle_fileId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariantStyleTranslation" DROP CONSTRAINT "ProductVariantStyleTranslation_productVariantStyleId_fkey";

-- DropForeignKey
ALTER TABLE "Promotion" DROP CONSTRAINT "Promotion_promotionListId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- DropForeignKey
ALTER TABLE "RoleTranslation" DROP CONSTRAINT "RoleTranslation_roleId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "ShippingZone_name_key" ON "ShippingZone"("name");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthenticationMethod" ADD CONSTRAINT "AuthenticationMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountryTranslation" ADD CONSTRAINT "CountryTranslation_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_profileAvatarId_fkey" FOREIGN KEY ("profileAvatarId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderAddress" ADD CONSTRAINT "OrderAddress_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategoryTranslation" ADD CONSTRAINT "ProductCategoryTranslation_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTypeTranslation" ADD CONSTRAINT "ProductTypeTranslation_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "ProductType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantColorTranslation" ADD CONSTRAINT "ProductVariantColorTranslation_productVariantColorId_fkey" FOREIGN KEY ("productVariantColorId") REFERENCES "ProductVariantColor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantStyle" ADD CONSTRAINT "ProductVariantStyle_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantStyleTranslation" ADD CONSTRAINT "ProductVariantStyleTranslation_productVariantStyleId_fkey" FOREIGN KEY ("productVariantStyleId") REFERENCES "ProductVariantStyle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion" ADD CONSTRAINT "Promotion_promotionListId_fkey" FOREIGN KEY ("promotionListId") REFERENCES "PromotionList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoleTranslation" ADD CONSTRAINT "RoleTranslation_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Brand.slug_unique" RENAME TO "Brand_slug_key";

-- RenameIndex
ALTER INDEX "Card.number_unique" RENAME TO "Card_number_key";

-- RenameIndex
ALTER INDEX "Channel.code_unique" RENAME TO "Channel_code_key";

-- RenameIndex
ALTER INDEX "Channel.token_unique" RENAME TO "Channel_token_key";

-- RenameIndex
ALTER INDEX "Comment.profileId_unique" RENAME TO "Comment_profileId_key";

-- RenameIndex
ALTER INDEX "Country.code_unique" RENAME TO "Country_code_key";

-- RenameIndex
ALTER INDEX "File.sourceId_unique" RENAME TO "File_sourceId_key";

-- RenameIndex
ALTER INDEX "File.url_unique" RENAME TO "File_url_key";

-- RenameIndex
ALTER INDEX "Like.productId_unique" RENAME TO "Like_productId_key";

-- RenameIndex
ALTER INDEX "Like.profileId_unique" RENAME TO "Like_profileId_key";

-- RenameIndex
ALTER INDEX "Order.code_unique" RENAME TO "Order_code_key";

-- RenameIndex
ALTER INDEX "OrderItem.sku_unique" RENAME TO "OrderItem_sku_key";

-- RenameIndex
ALTER INDEX "Payment.transactionId_unique" RENAME TO "Payment_transactionId_key";

-- RenameIndex
ALTER INDEX "Product.sku_unique" RENAME TO "Product_sku_key";

-- RenameIndex
ALTER INDEX "ProductCategory.slug_unique" RENAME TO "ProductCategory_slug_key";

-- RenameIndex
ALTER INDEX "ProductType.name_unique" RENAME TO "ProductType_name_key";

-- RenameIndex
ALTER INDEX "ProductType.slug_unique" RENAME TO "ProductType_slug_key";

-- RenameIndex
ALTER INDEX "ProductVariant.sku_unique" RENAME TO "ProductVariant_sku_key";

-- RenameIndex
ALTER INDEX "ProductVariantColor.value_unique" RENAME TO "ProductVariantColor_value_key";

-- RenameIndex
ALTER INDEX "Profile.userId_unique" RENAME TO "Profile_userId_key";

-- RenameIndex
ALTER INDEX "Promotion.couponCode_unique" RENAME TO "Promotion_couponCode_key";

-- RenameIndex
ALTER INDEX "Review.profileId_unique" RENAME TO "Review_profileId_key";

-- RenameIndex
ALTER INDEX "Role.slug_unique" RENAME TO "Role_slug_key";

-- RenameIndex
ALTER INDEX "ShippingMethod.code_unique" RENAME TO "ShippingMethod_code_key";

-- RenameIndex
ALTER INDEX "User.accessToken_unique" RENAME TO "User_accessToken_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";

-- RenameIndex
ALTER INDEX "User.identifierToken_unique" RENAME TO "User_identifierToken_key";

-- RenameIndex
ALTER INDEX "User.mobile_unique" RENAME TO "User_mobile_key";

-- RenameIndex
ALTER INDEX "User.refreshToken_unique" RENAME TO "User_refreshToken_key";

-- RenameIndex
ALTER INDEX "User.resetPasswordToken_unique" RENAME TO "User_resetPasswordToken_key";

-- RenameIndex
ALTER INDEX "User.username_unique" RENAME TO "User_username_key";
