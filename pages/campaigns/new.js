import React, { Component } from 'react';
import Layout from '../../components/layout';
import { Button, Form, Input } from 'semantic-ui-react';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
              labelPosition='right'
              label='wei'
            />
          </Form.Field>

          <Button primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
