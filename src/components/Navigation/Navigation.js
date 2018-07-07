import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../actions/user';
import {
  Responsive,
  Visibility,
  Sidebar,
  Menu,
  Segment,
  Container,
  Icon,
  Grid,
  Sticky
} from 'semantic-ui-react';

class Navigation extends Component {
    constructor (props) {
        super(props);

        this.state = {
            menuFixed: false
        };
    }

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { sidebarOpened } = this.state;

    // {/*...Responsive.onlyMobile*/}

    return (
        <Sticky>
            <Responsive >
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                    stick
                >
                    <Sidebar.Pushable>
                        <Sidebar as={Menu} animation="uncover" inverted vertical visible={sidebarOpened}>
                            <div>
                                <Menu.Item onClick={this.props.logout}>Logout</Menu.Item>
                            </div>
                        </Sidebar>

                        <Sidebar.Pusher
                            dimmed={sidebarOpened}
                            onClick={this.handlePusherClick}
                        >
                            <Segment inverted textAlign="center" style={{ padding: '1em 0em' }} vertical>
                                <Container>
                                    <Menu inverted fixed="top">
                                        <Menu.Item onClick={this.handleToggle}>
                                            <Icon name="sidebar" />
                                        </Menu.Item>
                                    </Menu>
                                </Container>
                            </Segment>
                            <Grid
                                textAlign="center"
                                style={{ height: '100%', marginTop: '3em' }}
                                verticalAlign="middle"
                            >
                                <Grid.Column style={{ maxWidth: 450 }}>{this.props.children}</Grid.Column>
                            </Grid>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Visibility>
            </Responsive>
        </Sticky>
    );
  }
}

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ user }) {
    return {
        user,
        isAuthenticated: user.isAuthenticated
    }
};

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        logout
    },
        dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);