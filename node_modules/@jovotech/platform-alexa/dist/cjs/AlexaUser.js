"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaUser = void 0;
const framework_1 = require("@jovotech/framework");
const api_1 = require("./api");
const PersonProfileApi_1 = require("./api/PersonProfileApi");
const ReminderApi_1 = require("./api/ReminderApi");
const ListApi_1 = require("./api/ListApi");
class AlexaUser extends framework_1.JovoUser {
    constructor(jovo) {
        super(jovo);
    }
    get id() {
        return this.jovo.$request.getUserId();
    }
    get accessToken() {
        var _a;
        return (_a = this.jovo.$request.session) === null || _a === void 0 ? void 0 : _a.user.accessToken;
    }
    async getEmail() {
        return await this.getProfileProperty(api_1.ProfileProperty.EMAIL);
    }
    async getMobileNumber() {
        return await this.getProfileProperty(api_1.ProfileProperty.MOBILE_NUMBER);
    }
    async getName() {
        return await this.getProfileProperty(api_1.ProfileProperty.NAME);
    }
    async getGivenName() {
        return await this.getProfileProperty(api_1.ProfileProperty.GIVEN_NAME);
    }
    async getSpeakerName() {
        return await this.getPersonProfileProperty(PersonProfileApi_1.PersonProfileProperty.NAME);
    }
    async getSpeakerGivenName() {
        return await this.getPersonProfileProperty(PersonProfileApi_1.PersonProfileProperty.GIVEN_NAME);
    }
    async getSpeakerMobileNumber() {
        return await this.getPersonProfileProperty(PersonProfileApi_1.PersonProfileProperty.MOBILE_NUMBER);
    }
    async getPersonProfileProperty(property) {
        const request = this.jovo.$request;
        return (0, PersonProfileApi_1.sendPersonProfileApiRequest)(property, request.getApiEndpoint(), request.getApiAccessToken());
    }
    async getProfileProperty(property) {
        const request = this.jovo.$request;
        return (0, api_1.sendCustomerProfileApiRequest)(property, request.getApiEndpoint(), request.getApiAccessToken());
    }
    async setReminder(reminder) {
        const request = this.jovo.$request;
        return (0, ReminderApi_1.setReminder)(reminder, request.getApiEndpoint(), request.getApiAccessToken());
    }
    async updateReminder(alertToken, reminder) {
        const request = this.jovo.$request;
        return (0, ReminderApi_1.updateReminder)(alertToken, reminder, request.getApiEndpoint(), request.getApiAccessToken());
    }
    async deleteReminder(alertToken) {
        const request = this.jovo.$request;
        return (0, ReminderApi_1.deleteReminder)(alertToken, request.getApiEndpoint(), request.getApiAccessToken());
    }
    async getAllReminders() {
        const request = this.jovo.$request;
        return (0, ReminderApi_1.getAllReminders)(request.getApiEndpoint(), request.getApiAccessToken());
    }
    async getReminder(alertToken) {
        const request = this.jovo.$request;
        return (0, ReminderApi_1.getReminder)(alertToken, request.getApiEndpoint(), request.getApiAccessToken());
    }
    getLists() {
        const request = this.jovo.$request;
        return (0, ListApi_1.getLists)(request.getApiEndpoint(), request.getApiAccessToken());
    }
    getListItem(listId, itemId) {
        const request = this.jovo.$request;
        return (0, ListApi_1.getListItem)(listId, itemId, request.getApiEndpoint(), request.getApiAccessToken());
    }
    getListItems(listId, itemIds) {
        const request = this.jovo.$request;
        return (0, ListApi_1.getListItems)(listId, itemIds, request.getApiEndpoint(), request.getApiAccessToken());
    }
}
exports.AlexaUser = AlexaUser;
//# sourceMappingURL=AlexaUser.js.map