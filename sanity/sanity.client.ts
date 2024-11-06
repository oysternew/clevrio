import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "uw1md8cf",
  dataset: "production",
  apiVersion: "2024-06-08",
  useCdn: false,
};

const client = createClient(config);

export default client;
