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
    const items = this.state.teams.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.name}</span>
            <span style={styleInfo}>{data.id}</span>
            <span style={styleInfo}>{data.teamLead}</span>
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