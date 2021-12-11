import React, { Component } from "react";
import Layout from "../../components/layout";
import CampaignInstance from "../../ethereum/campaign";
import { Card } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = CampaignInstance(props.query.campaign);
    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        key: 0,
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        key: 1,
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to be a contributer",
      },
      {
        key: 2,
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests much be approved by contributers.",
      },
      {
        key: 3,
        header: approversCount,
        meta: "Number of Contributers",
        description:
          "Number of people who have already donated to this campaign",
      },
      {
        key: 4,
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description: "How much money this campaign has left to spend",
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        {this.renderCards()}
        <ContributeForm />
      </Layout>
    );
  }
}

export default CampaignShow;
