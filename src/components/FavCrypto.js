import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import ModelEdit from './ModelEdit';

class FavCrypto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArr: [],
      show:false
    }
  }
  componentDidMount = () => {
    const conflig = {
      method: 'get',
      baseURL: 'http://localhost:8000',
      url: `/fav?email=${this.props.auth0.user.email}`
    }
    axios(conflig).then(result => {
      this.setState({
        dataArr: result.data,
      })
      console.log("fav ", result.data)
    })
  }

delete=(id)=>{
  const conflig = {
    method: 'delete',
    baseURL: 'http://localhost:8000',
    url: `/delete/${id}?email=${this.props.auth0.user.email}`,
  }
  axios(conflig).then(result => {
    this.setState({
      dataArr: result.data,
    })
  })

}

handleClose =()=>{
  this.setState({
    show:false
  })
}

handleOpen=()=>{
  this.setState({
    show:true
  })

}
  render() {
    return(
      <>
      Fav
           {this.state.dataArr.map(item => {
          return (<><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image_url}alt=" " />
            <Card.Body>
              <Card.Title>{item.title}: {item.toUSD}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button variant="primary" onClick={()=>this.delete(item._id)}>Delete</Button>

              <Button variant="primary" onClick={this.showModel}>Edit</Button>
            </Card.Body>
          </Card>
            <ModelEdit show = {this.state.show} handleClose = {this.handleClose} id ={item._id}/>
            </>
          )
        })}

      
      </>
    )
  }
}

export default withAuth0(FavCrypto);
