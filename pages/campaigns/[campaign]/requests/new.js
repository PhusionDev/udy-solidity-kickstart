import React, { Component } from 'react';
import { Message, Button, Form, Input, Label } from 'semantic-ui-react';
import CampaignInstance from '../../../../ethereum/campaign';
import web3 from '../../../../ethereum/web3';
import Layout from '../../../../components/layout';
import { Link, Router } from '../../../../routes';

class NewRequest extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
  };

  static async getInitialProps(props) {
    const { campaign } = props.query;

    return { campaign };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = CampaignInstance(this.props.campaign);
    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0] });
    } catch (err) {}
  };

  render() {
    return (
      <Layout>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <Label>Description</Label>
            <Input
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <Label>Value in Ether</Label>
            <Input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Label>Recipient</Label>
            <Input
              value={this.state.recipient}
              onChange={(event) =>
                this.setState({ recipient: event.target.value })
              }
            />
          </Form.Field>

          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default NewRequest;
