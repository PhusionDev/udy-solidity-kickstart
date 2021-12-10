import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//const address = "0xbF6c7D4652deCad9B94BAf6cC12bE901B4d7D094";
const address = "0x6743dDA764C27A4c88E5409D21880D1654973b7E";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  address
);

export default instance;
