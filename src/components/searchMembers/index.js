import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SearchTeams extends Component {

  constructor(props){
    super(props);

    this.state={
      search:null,
      users: []
    };
  }

  componentDidMount(){
        axios.get("https://tempo-exercises.herokuapp.com/rest/v1/users")
        .then(res => {
            console.log(res);
            this.setState({
                users: res.data
            })
        })
    }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = this.state.users.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.userId.includes(this.state.search)){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.userId}</span>
            <span style={styleInfo}>{data.teamId}</span>
            <li><Link to={`/userInfo/${data.userId}/${data.teamId}`}>{data.userId}</Link>,</li>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default SearchTeams;