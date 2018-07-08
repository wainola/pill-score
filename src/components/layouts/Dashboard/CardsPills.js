import React, { Component } from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
import { Card, Button, Image } from 'semantic-ui-react'

export class CardsPills extends Component {
  constructor(props){
    super(props)
    this.state = {
      pills: [
       {
         image: 'https://mdmazing.space/wp-content/uploads/2017/06/18948041_674151916102445_7650713634791751680_n.jpg',
         report_name: 'Report on extasis',
         date: moment().tz('America/Santiago').format('DD/MM/YYYY'),
         title: 'All the things that look so crazy',
       },
       {
         image: 'https://mdmazing.space/wp-content/uploads/2017/06/18948041_674151916102445_7650713634791751680_n.jpg',
         report_name: "Report on smile",
         date: moment().tz('America/Santiago').format('DD/MM/YYYY'),
         title: 'Why so serious',
       },
       {
         image: 'https://mdmazing.space/wp-content/uploads/2017/06/18948041_674151916102445_7650713634791751680_n.jpg',
         report_name: 'Daemon report',
         date: moment().tz('America/Santiago').format('DD/MM/YYYY'),
         title: 'Dameon pills are the best',
       }
     ]
    }
  }
  render() {
    console.log('cardpills')
    return (
      <div>
        <Card.Group>
          { this.state.pills.lenght !== 0 ?
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          :
          <div></div>
          }
        </Card.Group>
      </div>
    )
  }
}

export default CardsPills
