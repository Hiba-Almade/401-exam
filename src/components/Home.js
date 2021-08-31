import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: [],
    }
  }
  componentDidMount = () => {
    const conflig = {
      method: 'get',
      baseURL: 'http://localhost:8000',
      url: '/all'
    }
    axios(conflig).then(result => {
      this.setState({
        dataArr: result.data,
      })
      console.log(this.state.dataArr)
      console.log( this.props.auth0.isAuthenticated)
      this.props.auth0.isAuthenticated && console.log(this.props.auth0.user.email)
    })
  }

  addToFav = (obj) => {

    const conflig = {
      method: 'post',
      baseURL: 'http://localhost:8000',
      url: `/addFav/${this.props.auth0.user.email}`,
      data: {
        title: obj.title,
        desc: obj.description,
        usd: obj.toUSD,
        img: obj.image_url
      }
    }
    axios(conflig).then(result => {
      console.log("Added")
    })
  }
 
  render() {

    return (
      <>
        {this.state.dataArr.map(item => {
          return (<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image_url}alt=" " />
            <Card.Body>
              <Card.Title>{item.title}: {item.toUSD}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button variant="primary" onClick={() => this.addToFav(item)}>Add to Fav</Button>
            </Card.Body>
          </Card>
          )
        })}
      </>
    )
  }
}

export default withAuth0(Home);
