import React, { Component } from 'react';
import axios from 'axios';

class SearchTeams extends Component {

  constructor(props){
    super(props);

    this.state={
      search:null,
      teams: []
    };
  }

  componentDidMount(){
        axios.get("https://tempo-exercises.herokuapp.com/rest/v1/teams")
        .then(res => {
            console.log(res);
            this.setState({
                teams: res.data
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
      height:'8vh',
      width:'40vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = this.state.teams.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <div className="card full-height shadow-lg p-3 mb-5 bg-white rounded" key={data.id}>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <br/>
            <h5 className="card-subtitle">Team Id: {data.id}</h5>
            <br/>
            <h5 className="card-subtitle">Team Lead Id: {data.teamLead}</h5>
          </div>
        </div>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter name of group to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default SearchTeams;