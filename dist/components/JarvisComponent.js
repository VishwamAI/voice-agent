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
exports.JarvisComponent = void 0;
const framework_1 = require("@jovotech/framework");
const child_process_1 = require("child_process");
const radio_browser_service_1 = require("../radio_browser_service");
let JarvisComponent = class JarvisComponent extends framework_1.BaseComponent {
    $send(response) {
        this.$output.push({
            message: response.message,
        });
        return this.$resolve('output');
    }
    SetReminderIntent() {
        console.log('SetReminderIntent handler invoked');
        console.log('Current state stack:', this.$state);
        console.log('Incoming request object:', JSON.stringify(this.$request, null, 2));
        try {
            const response = { message: 'Reminder has been set!' };
            console.log('Response object before sending:', response);
            return this.$send(response);
        }
        catch (error) {
            console.error(`Error in SetReminderIntent: ${error.message}`);
            return this.$send({ message: 'Sorry, there was an error setting the reminder.' });
        }
    }
    async CheckWeatherIntent() {
        console.log('CheckWeatherIntent handler invoked');
        console.log('Current state stack:', this.$state);
        console.log('Incoming request object:', JSON.stringify(this.$request, null, 2));
        const latitude = '48.8566'; // Example latitude, replace with dynamic value
        const longitude = '2.3522'; // Example longitude, replace with dynamic value
        try {
            const { stdout } = await (0, child_process_1.exec)(`./weather_service.sh ${latitude} ${longitude}`);
            const response = { message: `Weather information: ${stdout}` };
            console.log('Response object before sending:', response);
            return this.$send(response);
        }
        catch (error) {
            console.error(`Error executing weather_service.sh: ${error.message}`);
            return this.$send({
                message: 'Sorry, I could not fetch the weather information at the moment.',
            });
        }
    }
    async PlayMusicIntent() {
        console.log('PlayMusicIntent handler invoked');
        console.log('Current state stack:', this.$state);
        console.log('Incoming request object:', JSON.stringify(this.$request, null, 2));
        try {
            const servers = await (0, radio_browser_service_1.getServerList)();
            const selectedServer = (0, radio_browser_service_1.selectServer)(servers);
            console.log('Selected server:', selectedServer);
            const stations = await (0, radio_browser_service_1.fetchRadioStations)(selectedServer);
            if (stations.length > 0) {
                const station = stations[0]; // Select the first station for simplicity
                console.log('Playing station:', station.name);
                console.log(`Stream URL: ${station.url}`);
                // Promisify exec function
                await new Promise((resolve, reject) => {
                    (0, child_process_1.exec)(`mpg123 ${station.url}`, (error) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve();
                        }
                    });
                });
                const response = { message: `Now playing: ${station.name}` };
                console.log('Response object before sending:', response);
                return this.$send(response);
            }
            else {
                return this.$send({ message: 'No radio stations available at the moment.' });
            }
        }
        catch (error) {
            console.error(`Error playing music: ${error.message}`);
            return this.$send({ message: 'Sorry, I could not play the music at the moment.' });
        }
    }
    AnswerQuestionIntent() {
        console.log('AnswerQuestionIntent handler invoked');
        console.log('Current state stack:', this.$state);
        console.log('Incoming request object:', JSON.stringify(this.$request, null, 2));
        try {
            const response = { message: 'The capital of France is Paris.' };
            console.log('Response object before sending:', response);
            return this.$send(response);
        }
        catch (error) {
            console.error(`Error in AnswerQuestionIntent: ${error.message}`);
            return this.$send({ message: 'Sorry, there was an error answering the question.' });
        }
    }
    async OpenBrowserIntent() {
        console.log('OpenBrowserIntent handler invoked');
        console.log('Current state stack:', this.$state);
        console.log('Incoming request object:', JSON.stringify(this.$request, null, 2));
        try {
            await (0, child_process_1.exec)('node browser_control.js');
            const response = { message: 'Browser opened successfully.' };
            console.log('Response object before sending:', response);
            return this.$send(response);
        }
        catch (error) {
            console.error(`Error opening browser: ${error.message}`);
            return this.$send({ message: 'Sorry, I could not open the browser at the moment.' });
        }
    }
    async NavigateBrowserIntent() {
        console.log('NavigateBrowserIntent handler invoked');
        console.log('Current state stack:', this.$state);
        const urlEntity = this.$entities.url;
        const url = urlEntity && urlEntity.resolved ? urlEntity.resolved : undefined; // Extract the URL from the user's request
        console.log('Extracted URL:', url);
        if (!url) {
            return this.$send({ message: 'Sorry, I could not extract the URL from the request.' });
        }
        try {
            await (0, child_process_1.exec)(`node browser_control.js ${url}`);
            console.log('Executing browser_control.js with URL:', url);
            const response = { message: `Navigated to ${url} successfully.` };
            console.log('Response object before sending:', response);
            return this.$send(response);
        }
        catch (error) {
            console.error(`Error navigating browser: ${error.message}`);
            return this.$send({ message: 'Sorry, I could not navigate the browser at the moment.' });
        }
    }
};
__decorate([
    (0, framework_1.Handle)({
        intents: ['SetReminderIntent'],
        global: true,
        prioritizedOverUnhandled: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JarvisComponent.prototype, "SetReminderIntent", null);
__decorate([
    (0, framework_1.Handle)({
        intents: ['CheckWeatherIntent'],
        global: true,
        prioritizedOverUnhandled: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JarvisComponent.prototype, "CheckWeatherIntent", null);
__decorate([
    (0, framework_1.Handle)({
        intents: ['PlayMusicIntent'],
        global: true,
        prioritizedOverUnhandled: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JarvisComponent.prototype, "PlayMusicIntent", null);
__decorate([
    (0, framework_1.Handle)({
        intents: ['AnswerQuestionIntent'],
        global: true,
        prioritizedOverUnhandled: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JarvisComponent.prototype, "AnswerQuestionIntent", null);
__decorate([
    (0, framework_1.Handle)({
        intents: ['OpenBrowserIntent'],
        global: true,
        prioritizedOverUnhandled: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JarvisComponent.prototype, "OpenBrowserIntent", null);
__decorate([
    (0, framework_1.Handle)({
        intents: ['NavigateBrowserIntent'],
        global: true,
        prioritizedOverUnhandled: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JarvisComponent.prototype, "NavigateBrowserIntent", null);
JarvisComponent = __decorate([
    (0, framework_1.Component)()
], JarvisComponent);
exports.JarvisComponent = JarvisComponent;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unusedComponent = framework_1.Component;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unusedHandle = framework_1.Handle;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unusedJarvisComponent = JarvisComponent;
//# sourceMappingURL=JarvisComponent.js.map