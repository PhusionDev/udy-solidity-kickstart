import React, { Component } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import CampaignInstance from "../ethereum/campaign";

class ContributeForm extends Component {
  state = {
    value: "",
  };

  onSubmit = (event) => {
    event.preventDefault();

    const campaign = CampaignInstance(this.props.address);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Button primary>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
