import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import ParkCollection from './ParkCollection';
import Login from './Login';
import ParksContainer from './ParksContainer';
import './App.css';

class App extends React.Component {

  state={
    parks: [],
    featuredParks: [],
    parkClickedOn: [],
    isAParkExpanded: false,
    parkCollection: [],
    userId: null,
    username: "",
    token: null
  }

  componentDidMount=()=>{
    fetch("http://localhost:3000/parks")
    .then(r => r.json())
    .then(parks => {

      // let thisArray= localStorage.getItem("parkObj")
      // let thisArrayParsed= JSON.parse(thisArray)

      this.setState({
        parks: parks.data,
        token: localStorage.token,
        userId: localStorage.userId,
        username: localStorage.username,
        // parkCollection: thisArrayParsed
      })
    })
  }

  setToken = (token, id) => {
    localStorage.token = token;
  
    localStorage.userId = id;
    fetch(`http://localhost:3000/users/${id}`, {
  
  headers: {
    "Authorization": token
  }
      })
    .then(r => r.json())
    .then(user => {
      this.setState({
        username: user.username,
        token: token,
        userId: id,
        parkCollection: user.park_collections
        })

        let the_username= user.username
        localStorage.setItem("username", the_username)
      })
    }

    loggedIn=()=>{
      return !!this.state.token
    }

    logOut=()=>{
      localStorage.removeItem("userId")
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      this.setState({
        userId: null,
        token: null,
        username: ""
        // parkCollection: []
      })
    }

  selectAPark=(park)=>{
    this.setState({
      parkClickedOn: park,
      isAParkExpanded: !this.state.isAParkExpanded
    })
  }

  parksToSendDown=()=>{

    let theParks= [...this.state.parks]

    if (this.state.isAParkExpanded) {
      theParks= this.state.parkClickedOn}

    else {
      return theParks
    }

    return theParks
    }

    returnToParks=()=>{
      this.setState({
        parkClickedOn: [],
        isAParkExpanded: !this.state.isAParkExpanded
      })
    }

    addToParkCollection=(parkId)=> {
   
      fetch("http://localhost:3000/park_collections", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.userId,
        park_id: parkId
      })
     })
     .then(r=>r.json())
     .then(theParkCollection => {
       this.setState({
         parkCollection: theParkCollection
       })

      //  let theParkArray= [...this.state.parkCollection, theParkCollection]
      
      //  localStorage.setItem("parkObj", JSON.stringify(theParkArray))
     })
    }

  render(){
    console.log(this.state.parkCollection)
  return (
  
    <div>
      <Router>
        <NavigationBar loggedIn={this.loggedIn} logOut={this.logOut}/>
        <br></br>
        <Switch>
          <Route exact path= '/' render={(renderProps) => <Home {...renderProps} username={this.state.username} loggedIn={this.loggedIn}/>}/>
          <Route exact path='/login' render={(renderProps) => <Login {...renderProps} loggedIn={this.loggedIn} username={this.state.username} setToken={this.setToken}/>}/>
          <Route exact path= '/parks' render={(renderProps) => <ParksContainer {...renderProps} addToParkCollection={this.addToParkCollection} theParks={this.parksToSendDown()} selectAPark={this.selectAPark} isAParkExpanded={this.state.isAParkExpanded} returnToParks={this.returnToParks}/>}/>
          <Route exact path= '/parkcollection' render={(renderProps) => <ParkCollection {...renderProps}/>}/>
        </Switch>
      </Router>
    </div>
 
  )}

}

export default App;
