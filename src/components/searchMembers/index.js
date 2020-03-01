import React, { Component } from 'react';
import axios from 'axios';

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
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'7vh',
      width:'40vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = this.state.users.filter((data)=>{
      if(this.state.search == null){
          return data
      }
      else if(data.userId.includes(this.state.search)){
          return data
      }
    }).map(data=>{
      return(
      <div className="card full-height shadow-lg p-3 mb-5 bg-white rounded" key={data.userId}>
        <div className= "card-body">
          <h5 className= "card-title">User Id: {data.userId}</h5>
          <h6 className= "card-subtitle">Team Id: {data.teamId}</h6>
        </div>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter user info to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default SearchTeams;