"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidDirectivesArray = void 0;
const output_1 = require("@jovotech/output");
function directiveCallback(desiredType) {
    return (directive) => directive.type === desiredType;
}
function IsValidDirectivesArray(options) {
    return function (object, propertyKey) {
        (0, output_1.registerDecorator)({
            name: 'isValidDirectivesArray',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [],
            options,
            validator: {
                validate(value, args) {
                    if (!Array.isArray(value)) {
                        args.constraints[0] = '$property must be an array of Directives';
                        return false;
                    }
                    // TODO add validations:
                    // - No APL-directives and Dialog.Delegate
                    // - No Alexa.Presentation.APL.ExecuteCommands directive and Dialog.ElicitSlot | Dialog.ConfirmSlot | Dialog.ConfirmIntent
                    if (value.some(directiveCallback('AudioPlayer.Play')) &&
                        value.some(directiveCallback('VideoApp.Launch'))) {
                        args.constraints[0] =
                            '$property can not contain a AudioPlayer.Play- and VideoApp.Launch-directive';
                        return false;
                    }
                    if (value.some(directiveCallback('VideoApp.Launch')) &&
                        value.some(directiveCallback('Display.RenderTemplate'))) {
                        args.constraints[0] =
                            '$property can not contain a VideoApp.Launch- and Display.RenderTemplate-directive';
                        return false;
                    }
                    if (value.filter(directiveCallback('AudioPlayer.Play')).length > 1) {
                        args.constraints[0] = '$property can contain one AudioPlayer.Play-directive at most';
                        return false;
                    }
                    return true;
                },
                defaultMessage(args) {
                    return args.constraints[0];
                },
            },
        });
    };
}
exports.IsValidDirectivesArray = IsValidDirectivesArray;
//# sourceMappingURL=IsValidDirectivesArray.js.map