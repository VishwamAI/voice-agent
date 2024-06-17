"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRadioStations = exports.selectServer = exports.getServerList = void 0;
const dns_1 = __importDefault(require("dns"));
const https_1 = __importDefault(require("https"));
// Function to get a list of available servers
function getServerList() {
    return new Promise((resolve, reject) => {
        dns_1.default.resolve4('all.api.radio-browser.info', (err, addresses) => {
            if (err) {
                console.error('DNS lookup failed:', err);
                reject(err);
                return;
            }
            const servers = addresses.map((address) => `https://${address}`);
            resolve(servers);
        });
    });
}
exports.getServerList = getServerList;
// Function to randomize the server list and select the first server
function selectServer(servers) {
    const randomIndex = Math.floor(Math.random() * servers.length);
    return servers[randomIndex];
}
exports.selectServer = selectServer;
// Function to fetch radio stations from the selected server
function fetchRadioStations(server) {
    return new Promise((resolve, reject) => {
        const url = `${server}/json/stations`;
        const options = {
            rejectUnauthorized: false, // Ignore TLS certificate errors
        };
        https_1.default
            .get(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const stations = JSON.parse(data);
                    resolve(stations);
                }
                catch (error) {
                    console.error('Error parsing JSON response:', error);
                    reject(error);
                }
            });
        })
            .on('error', (err) => {
            console.error('Error fetching radio stations:', err);
            reject(err);
        });
    });
}
exports.fetchRadioStations = fetchRadioStations;
// Example usage
getServerList()
    .then((servers) => {
    const selectedServer = selectServer(servers);
    console.log('Selected server:', selectedServer);
    return fetchRadioStations(selectedServer);
})
    .then((stations) => {
    console.log('Available radio stations:', stations);
})
    .catch((error) => {
    console.error('Error:', error);
});
//# sourceMappingURL=radio_browser_service.js.map