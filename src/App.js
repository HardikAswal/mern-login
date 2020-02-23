import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      email:""
    }
  
  }

  handleSubmit(){
    console.log(this.state.username);
    console.log(this.state.password);

    var auth = {
      username:this.state.username,
      password:this.state.password
    }

    axios.post('http://localhost:8080/login',auth)
    .then(res => {
        alert(res.data.message);
      })
    .catch(err => {
      console.log(err)
    })  

    
  }

  render(){
    return (
    <div className="App">
        <input type="text" name="username" placeholder="username" onChange={(e)=>this.setState({username:e.target.value})} />
        <input type="password" name="password" placeholder="password" onChange={(e)=>this.setState({password:e.target.value})}/>
        <button type="submit" onClick={(e)=>this.handleSubmit(e)} >Login</button>     
    </div>
  )}
}

export default App;
