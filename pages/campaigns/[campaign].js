import React, { Component } from "react";
import Layout from "../../components/layout";
import CampaignInstance from "../../ethereum/campaign";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    // console.log(props);
    // console.log(props.query.campaign);
    const campaign = CampaignInstance(props.query.campaign);
    const summary = await campaign.methods.getSummary().call();

    console.log(summary);

    return {};
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
      </Layout>
    );
  }
}

export default CampaignShow;
