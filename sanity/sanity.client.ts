import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "uw1md8cf",
  dataset: "production",
  apiVersion: "2024-06-08",
  useCdn: false,
  token: "skK49e1sDmkfZkzHLqTOMokCeKx8vAAepmnYBOZKhckUxMJJTxQFfyYUoV7r0sTqJRB1uL27x4SYPWQ1YLEryVrgLRqtTAXTnENE7m0y9bpFh05ROMuc1HULUhwEBVM5xv3rtK1dRBal6sdOs6Cmr6ajflIomtEG0V16tWEoHy7fEz09DjUj",
};

const client = createClient(config);

export default client;
