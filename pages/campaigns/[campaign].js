import React, { Component } from "react";
import Layout from "../../components/layout";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    console.log(props);
    console.log(props.query.campaign);

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
