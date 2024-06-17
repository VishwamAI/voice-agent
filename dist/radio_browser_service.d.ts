declare function getServerList(): Promise<string[]>;
declare function selectServer(servers: string[]): string;
declare function fetchRadioStations(server: string): Promise<any>;
export { getServerList, selectServer, fetchRadioStations };
