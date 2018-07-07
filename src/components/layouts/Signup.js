import React, { Component } from 'react'
import { Form, Header, Grid, Responsive, Segment, Container, Button, Message } from 'semantic-ui-react'
import * as lodash from 'lodash'

export class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: {}
    }
  }
  onChange = e => {
    // this.setState({})
    console.log('change', e.target.value)
    this.setState({
      ...this.state,
      user: {
        [e.target.name]: e.target.value
      }
    })
  }
  onSubmit = e => {
    e.preventDefault()
    console.log('submit', this.state)
    const error = this.validate(this.state.user)
    if(lodash.isEmpty(error)){
      // send data
    }
    else{
      let messages = []
      if(!!error.email){
        messages.push(error.email)
      }
      if(!!error.password){
        messages.push(error.password)
      }
      console.log('mesages', messages)
      this.setState({
        ...this.state,
        error: { messages } 
      })
    }
  }
  validate = data => {
    const error = {}
    if(!data.email){
      error.email = 'Email no pude esta vacío'
    }
    if(!data.password){
      error.password = 'Password no puede estar vacío'
    }
    return error
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
                      {lodash.isEmpty(this.state.error) ? 
                        <div></div>
                        :
                        <Message negative>
                          <Message.Header>Ha ocurrido un error</Message.Header>
                          <div>
                            <p>
                              Error:
                            </p>
                            <ul>
                              {
                                this.state.error.messages instanceof Array ? 
                                this.state.error.messages.filter(message => message !== undefined).map(message => <li>{message}</li>)
                                :
                                <div></div>
                              }
                            </ul>
                          </div>
                        </Message>
                      }
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
