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
  renderCardPills = item => {
    console.log(item)
    return (
       <Card>
          <Image src={item.image} />
          <Card.Content>
            <Card.Header>{item.report_name}</Card.Header>
            <Card.Meta>{item.date}</Card.Meta>
            <Card.Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto earum, consequuntur, ex nostrum exercitationem voluptates ab iure est in corrupti, vero delectus ipsam doloremque nulla quaerat dolor quas possimus nobis.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Like it!
              </Button>
              <Button basic color='red'>
                Don't Like it!
              </Button>
            </div>
          </Card.Content>
        </Card>
    )
  }
  render() {
    console.log('cardpills', this.state.pills.length)
    return (
      <div>
        < Card.Group itemsPerRow={3}>
          { this.state.pills.lenght !== 0 ?
            this.state.pills.map(item => this.renderCardPills(item))
          :
          <div></div>
          }
        </Card.Group>
      </div>
    )
  }
}

export default CardsPills
