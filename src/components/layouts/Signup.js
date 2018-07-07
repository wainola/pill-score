import React, { Component } from 'react'
import { Form, Header, Grid, Responsive, Segment, Container, Button } from 'semantic-ui-react'

export class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }
  onChange = () => {
    // this.setState({})    
  }
  onSubmit = e => {
    e.preventDefault()
    
  }
  render() {
    return (
      <div>
        <Responsive>
          <Container>
            <Grid textAlign='left'
            verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column>
                  <Segment raised style={{ marginTop: '15px'}}>
                    <Form onSubmit={this.onSubmit}>
                      <Header as='h3'>Signup</Header>
                      <Form.Field>
                        <Form.Input 
                        name='email'
                        icon='user'
                        fluid
                        iconPosition='left'
                        placeholder='Email'
                        type='name'
                        onChange={this.onChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                        name='password'
                        icon='lock'
                        fluid
                        iconPosition='left'
                        type='password'
                        placeholder='Password'
                        onChange={this.onChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Button inverted color='red'>Signup</Button>
                      </Form.Field>
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
      </div>
    )
  }
}

export default Signup
