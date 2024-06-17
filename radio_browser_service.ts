import dns from 'dns';
import https from 'https';

// Function to get a list of available servers
function getServerList(callback: (servers: string[]) => void): void {
  dns.resolve4('all.api.radio-browser.info', (err, addresses) => {
    if (err) {
      console.error('DNS lookup failed:', err);
      return;
    }

    const servers = addresses.map((address) => `https://${address}`);
    callback(servers);
  });
}

// Function to randomize the server list and select the first server
function selectServer(servers: string[]): string {
  const randomIndex = Math.floor(Math.random() * servers.length);
  return servers[randomIndex];
}

// Function to fetch radio stations from the selected server
function fetchRadioStations(server: string, callback: (stations: any) => void): void {
  const url = `${server}/json/stations`;

  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const stations = JSON.parse(data);
      callback(stations);
    });
  }).on('error', (err) => {
    console.error('Error fetching radio stations:', err);
  });
}

// Example usage
getServerList((servers) => {
  const selectedServer = selectServer(servers);
  console.log('Selected server:', selectedServer);

  fetchRadioStations(selectedServer, (stations) => {
    console.log('Available radio stations:', stations);
  });
});

export { getServerList, selectServer, fetchRadioStations };
