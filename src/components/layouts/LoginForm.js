import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { login } from '../../actions/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pill from '../../pill.jpg'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      credentials: {
        name: '',
        password: ''
      },
      error : {},
      isFetching: false
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { credentials } = this.state;
    this.setState = {
      ...this.state,
      isFetching: true
    };
    console.log(credentials)

    this.props.login(credentials)
      .then(res => {
        console.log('SUCCESS');
        console.log(res);
        this.props.history.push('/dashboard');
      })
      .catch(res => {
        console.log('ERROR');
        console.log(res);
      })
  }

  onChange = (event) => {
    event.preventDefault();

    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  }

  render () {
    return (
      <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' style={{color: '#2183c6'}} textAlign='center'>
              <Image src={pill} />
              <br/>
              Welcome!
        </Header>
            <Form onSubmit={ this.onSubmit } size='large'>
              <Segment stacked>
                <Form.Input name="name" fluid icon='user' iconPosition='left' placeholder='Name' type='name' onChange={this.onChange}/>
                <Form.Input name="password" fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.onChange}/>

                <Button
                  color='blue'
                  fluid
                  size='large'
                >
                  Login
            </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps ({ user }) {
  return {
    user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    login
  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);