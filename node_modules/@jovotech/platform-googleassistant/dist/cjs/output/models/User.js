"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.PackageEntitlements = exports.Entitlement = exports.SignedData = exports.SkuType = exports.Engagement = exports.IntentSubscription = exports.UserVerificationStatus = exports.AccountLinkingStatus = void 0;
const output_1 = require("@jovotech/output");
var AccountLinkingStatus;
(function (AccountLinkingStatus) {
    AccountLinkingStatus["Unspecified"] = "ACCOUNT_LINKING_STATUS_UNSPECIFIED";
    AccountLinkingStatus["NotLinked"] = "NOT_LINKED";
    AccountLinkingStatus["Linked"] = "LINKED";
})(AccountLinkingStatus = exports.AccountLinkingStatus || (exports.AccountLinkingStatus = {}));
var UserVerificationStatus;
(function (UserVerificationStatus) {
    UserVerificationStatus["Unspecified"] = "USER_VERIFICATION_STATUS_UNSPECIFIED";
    UserVerificationStatus["Guest"] = "GUEST";
    UserVerificationStatus["Verified"] = "VERIFIED";
})(UserVerificationStatus = exports.UserVerificationStatus || (exports.UserVerificationStatus = {}));
class IntentSubscription {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IntentSubscription.prototype, "intent", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], IntentSubscription.prototype, "contentTitle", void 0);
exports.IntentSubscription = IntentSubscription;
class Engagement {
}
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => IntentSubscription),
    __metadata("design:type", Array)
], Engagement.prototype, "pushNotificationIntents", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => IntentSubscription),
    __metadata("design:type", Array)
], Engagement.prototype, "dailyUpdateIntents", void 0);
exports.Engagement = Engagement;
var SkuType;
(function (SkuType) {
    SkuType["Unspecified"] = "SKU_TYPE_UNSPECIFIED";
    SkuType["InApp"] = "IN_APP";
    SkuType["Subscription"] = "SUBSCRIPTION";
    SkuType["App"] = "APP";
})(SkuType = exports.SkuType || (exports.SkuType = {}));
class SignedData {
}
__decorate([
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], SignedData.prototype, "inAppPurchaseData", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignedData.prototype, "inAppDataSignature", void 0);
exports.SignedData = SignedData;
class Entitlement {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Entitlement.prototype, "sku", void 0);
__decorate([
    (0, output_1.IsEnum)(SkuType),
    __metadata("design:type", String)
], Entitlement.prototype, "skuType", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => SignedData),
    __metadata("design:type", SignedData)
], Entitlement.prototype, "inAppDetails", void 0);
exports.Entitlement = Entitlement;
class PackageEntitlements {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PackageEntitlements.prototype, "packageName", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => Entitlement),
    __metadata("design:type", Array)
], PackageEntitlements.prototype, "entitlements", void 0);
exports.PackageEntitlements = PackageEntitlements;
class User {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "locale", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], User.prototype, "params", void 0);
__decorate([
    (0, output_1.IsEnum)(AccountLinkingStatus),
    __metadata("design:type", String)
], User.prototype, "accountLinkingStatus", void 0);
__decorate([
    (0, output_1.IsEnum)(UserVerificationStatus),
    __metadata("design:type", String)
], User.prototype, "verificationStatus", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "lastSeenTime", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Engagement),
    __metadata("design:type", Engagement)
], User.prototype, "engagement", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => PackageEntitlements),
    __metadata("design:type", Array)
], User.prototype, "packageEntitlements", void 0);
exports.User = User;
//# sourceMappingURL=User.js.map