import dns from 'dns';
import https from 'https';

// Function to get a list of available servers
function getServerList(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    dns.resolve4('all.api.radio-browser.info', (err, addresses) => {
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

// Function to randomize the server list and select the first server
function selectServer(servers: string[]): string {
  const randomIndex = Math.floor(Math.random() * servers.length);
  return servers[randomIndex];
}

// Function to fetch radio stations from the selected server
function fetchRadioStations(server: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${server}/json/stations`;

    const options = {
      rejectUnauthorized: false, // Ignore TLS certificate errors
    };

    https
      .get(url, options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const stations = JSON.parse(data);
            resolve(stations);
          } catch (error) {
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

export { getServerList, selectServer, fetchRadioStations };
