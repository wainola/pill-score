import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Responsive,
  Container,
  Grid,
  Segment
} from 'semantic-ui-react'

import LoginForm from './LoginForm';

const Companies = () => (
    <div>
        <Responsive>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment basic style={{ minHeight: window.innerHeight}}>
                            <LoginForm/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Responsive>
    </div>
)

export default Companies
