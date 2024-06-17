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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplList = void 0;
const output_1 = require("@jovotech/output");
const List_json_1 = __importDefault(require("../../apl/List.json"));
const constants_1 = require("../../constants");
const AplHeader_1 = require("./AplHeader");
class AplList {
    toApl() {
        if (this.title) {
            List_json_1.default.datasources.data.title = this.title;
        }
        if (this.header) {
            List_json_1.default.datasources.data.header = this.header;
        }
        if (this.backgroundImageUrl) {
            List_json_1.default.datasources.data.backgroundImageUrl = this.backgroundImageUrl;
        }
        List_json_1.default.datasources.data.items = this.items.map((item) => (Object.assign(Object.assign({}, item), { selection: item.selection
                ? Object.assign({ type: 'Selection' }, item.selection) : undefined })));
        return Object.assign({ type: 'Alexa.Presentation.APL.RenderDocument', token: 'token' }, List_json_1.default);
    }
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    __metadata("design:type", String)
], AplList.prototype, "title", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    __metadata("design:type", String)
], AplList.prototype, "backgroundImageUrl", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => AplHeader_1.AplHeader),
    __metadata("design:type", AplHeader_1.AplHeader)
], AplList.prototype, "header", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ArrayMinSize)(constants_1.APL_LIST_MIN_SIZE),
    (0, output_1.ValidateNested)({
        each: true,
    }),
    (0, output_1.Type)(() => output_1.CarouselItem),
    __metadata("design:type", Array)
], AplList.prototype, "items", void 0);
exports.AplList = AplList;
//# sourceMappingURL=AplList.js.map