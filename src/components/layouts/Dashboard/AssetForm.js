import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendPostAsset } from '../../../actions/asset';
import { 
    Button, 
    Form, 
    fGrid, 
    Header, 
    Image, 
    Message, 
    Segment,
    Dropdown
} from 'semantic-ui-react'

const TAG_OPTIONS = [
    {
        key: 'MOBILE',
        value: 'MOBILE',
        text: 'MOBILE'
    },{
        key: 'DESKTOP',
        value: 'DESKTOP',
        text: 'DESKTOP'
    },{
        key: 'VIDEO',
        value: 'VIDEO',
        text: 'VIDEO'
    }
];

class AssetForm extends Component {
  constructor (props) {
    super(props)

    this.baseUrl = 'https://s3-us-west-2.amazonaws.com/banners-preview/';
    
    this.state = {
        asset: {
            banner_url: '',
            preview_url: '',
            tag: '',
            width: '',
            height: ''
        },
        error: {},
        isPosting: ''
    };
  }

  onSubmit = (event) => {
      const { asset } = this.state;
      console.log(asset)
      

      this.props.sendPostAsset(asset)
        .then(res => {
            console.log('ASSET POSTED')
            console.log(res);
        })
        .catch(res => {
            console.log(res);
        });
  }

  onChangeBannerPreview = (event) => {
      event.preventDefault();

      this.setState({
          ...this.state,
          asset: {
              ...this.state.asset,
              banner_url: `${this.baseUrl}${event.target.value}`
          }
      });
  }

  handleDropDown = (event) => {
      event.preventDefault();

      this.setState({
          ...this.state,
          asset: {
              ...this.state.asset,
              tag: event.target.textContent
          }
      });
  }

  onChange = (event) => {
    event.preventDefault();

    console.log(event.target.value)

    this.setState({
      ...this.state,
      asset: {
        ...this.state.asset,
        [event.target.name]: event.target.value
      }
    }, () => console.log(this.state));
  }

  render () {
      return (
          <div>
              <Form onSubmit={this.onSubmit} >
                <Header as='h2'>
                    Añadir asset
                </Header>

                <Form.Field>
                    <label>Banner location</label>
                    <input type='text'placeholder={this.baseUrl} onChange={this.onChangeBannerPreview} name='banber_url' />
                </Form.Field>
                <Form.Field>
                    <label>Preview url</label>
                    <input type='text'placeholder='http://pruebanner.cl/...' onChange={this.onChange} name='preview_url' />
                </Form.Field>
                <Form.Field>
                    <Dropdown placeholder='#tag' fluid search selection options={TAG_OPTIONS} onChange={this.handleDropDown} />
                </Form.Field>
                <Form.Field>
                    <label>Width</label>
                    <input type='text'placeholder='pixels' onChange={this.onChange} name='width' />
                </Form.Field>
                <Form.Field>
                    <label>Height</label>
                    <input type='text'placeholder='pixels' onChange={this.onChange} name='height' />
                </Form.Field>
                <Button
                  color='blue'
                  size='small'
                >
                  Save
            </Button>

              </Form>
          </div>
      )
  }
}

function mapStateToProps ({ asset }) {
  return {
    asset
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    sendPostAsset
  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetForm);
