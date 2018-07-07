import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { handleVisible } from '../../actions/sidebar'
import { connect } from 'react-redux'

export class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeItem: 'dashboard',
      visible: false
    }
  }
  handleVisible = () => {
    console.log('handleVisible')
    this.props.handleVisible()
  }
  handleItemClick = () => {
    console.log('handleItemClick')
  }
  render() {
    console.log('this.props', this.props)
    const { isAuthenticated, handleVisible } = this.props
    const { activeItem } = this.state
    return (
      <div>
        <Menu inverted color='blue'>
          <Menu.Item
              position='left'
              active={activeItem === 'Menu'}
              onClick={this.handleVisible}
              icon='bars'
          />
          {isAuthenticated ? 
              <Menu.Item 
                  name='Logout'
                  position='right'
                  active={activeItem === 'Logout'}
                  onClick={this.handleItemClick}
                      />
              :
              <Menu.Item
                  as={Link}
                  to='/signup'
                  position='right'
                  color='blue'
                  name='Signin'
                  active={activeItem === 'Signin'}
                  onClick={this.handleItemClick} />
              }
        </Menu>
      </div>
    )
  }
}

function mapStateToProps({ sidebar }){
  return { sidebar }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ handleVisible }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
