import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Responsive,
  Container,
  Grid,
  Segment
} from 'semantic-ui-react';

import CardsPills from './CardsPills';

const Dashboard = () => (
    <div>
        <Responsive>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment basic style={{ minHeight: window.innerHeight }}>
                              <CardsPills />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Responsive>
    </div>
)

export default Dashboard;

