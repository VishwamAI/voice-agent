"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPermissionScope = exports.PermissionScope = void 0;
var PermissionScope;
(function (PermissionScope) {
    PermissionScope["ReadProfileGivenName"] = "alexa::profile:given_name:read";
    PermissionScope["ReadProfileName"] = "alexa::profile:name:read";
    PermissionScope["ReadProfileMobileNumber"] = "alexa::profile:mobile_number:read";
    PermissionScope["ReadProfileEmail"] = "alexa::profile:email:read";
    PermissionScope["ReadAddressCountryAndPostalCode"] = "alexa:devices:all:address:country_and_postal_code:read";
    PermissionScope["ReadGeolocation"] = "alexa::devices:all:geolocation:read";
    PermissionScope["ReadWriteTimers"] = "alexa::alerts:timers:skill:readwrite";
    PermissionScope["ReadWriteReminders"] = "alexa::alerts:reminders:skill:readwrite";
    PermissionScope["ReadList"] = "alexa::household:lists:read";
    PermissionScope["WriteList"] = "alexa::household:lists:write";
    PermissionScope["ReadAddressFull"] = "read::alexa:device:all:address";
})(PermissionScope = exports.PermissionScope || (exports.PermissionScope = {}));
var ConnectionPermissionScope;
(function (ConnectionPermissionScope) {
    ConnectionPermissionScope["ReadProfileGivenName"] = "alexa::profile:given_name:read";
    ConnectionPermissionScope["ReadProfileName"] = "alexa::profile:name:read";
    ConnectionPermissionScope["ReadProfileMobileNumber"] = "alexa::profile:mobile_number:read";
    ConnectionPermissionScope["ReadProfileEmail"] = "alexa::profile:email:read";
    ConnectionPermissionScope["ReadAddressCountryAndPostalCode"] = "alexa:devices:all:address:country_and_postal_code:read";
    ConnectionPermissionScope["ReadGeolocation"] = "alexa::devices:all:geolocation:read";
    ConnectionPermissionScope["ReadWriteTimers"] = "alexa::alerts:timers:skill:readwrite";
    ConnectionPermissionScope["ReadWriteReminders"] = "alexa::alerts:reminders:skill:readwrite";
})(ConnectionPermissionScope = exports.ConnectionPermissionScope || (exports.ConnectionPermissionScope = {}));
//# sourceMappingURL=PermissionScope.js.map