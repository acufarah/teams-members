import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserInfo(props) {
  const [data, setData] = useState({ user: {} });
  const userId = props.match.params.userId;
  useEffect(async () => {
    const result = await axios(
     `https://tempo-exercises.herokuapp.com/rest/v1/users/${userId}`
    );
    setData(result.data);
    console.log(data);
  }, []);
  console.log(data);
  return (
            <div>
                <h1>{data.name.first}{data.name.last}</h1>
            </div>
            );
}

// class UserInfo extends Component {

//     state={
//       user:{},
//       teams: {}
//     };


//     componentDidMount(){
//         const userId = this.props.match.params.userId;
//         console.log(userId);
//         const teamId = this.props.match.params.teamId;     
//         if(userId){
//             axios.get(`https://tempo-exercises.herokuapp.com/rest/v1/users/${userId}`).then(res => {
//             console.log(res);
//             this.setState((state) => {
//                     return {...state, user: res.data}
//             });
//         })}
//         if(userId){
//             axios.get(`https://tempo-exercises.herokuapp.com/rest/v1/teamss/${teamId}`).then(res => {
//             console.log(res);
//             this.setState((state) => {
//                     return {...state, user: res.data}
//             });
//         })}
//         }

//     render(){
//         const { user } = this.state;
//         const { team } = this.state;
//         console.log(this.state);
//         return (
//             <div>
//                 // <h1>{user.name.first}{user.name.last}</h1>
//                     <h4>
//                     {team.name}
//                     </h4>
//             </div>
//             )
//     }
// }


export default UserInfo;