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

      let parkCollectionParsed= JSON.parse(localStorage.getItem("theParkCollection"))

      this.setState({
        parks: parks.data,
        token: localStorage.token,
        userId: localStorage.userId,
        username: localStorage.username,
        parkCollection: parkCollectionParsed
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

        let theParkCollection= user.park_collections
        
        localStorage.setItem("theParkCollection", JSON.stringify(theParkCollection))

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
      localStorage.removeItem("theParkCollection")
      this.setState({
        userId: null,
        token: null,
        username: "",
        parkCollection: []
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

    addToParkCollection=(park)=> {
   
      fetch("http://localhost:3000/park_collections", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.userId,
        park_id: park.id
      })
     })
     .then(r=>r.json())
     .then(theParkCollection => {
     this.setState({
       parkCollection: [...this.state.parkCollection, park]
     })

     let thisParkCollection= [...this.state.parkCollection, park]
        
        localStorage.setItem("theParkCollection", JSON.stringify(thisParkCollection))

  })
}

    parksToSendToCollection=()=>{

      let theParks= [...this.state.parks]

      let parkIds= this.state.parkCollection.map(park=> {
        return park.park_id
      })

      let theseParks= parkIds.map(parkId=> {

        return theParks.filter(park=> {
          return park.id === parkId
         })
    })

    return theseParks
  }

  

  render(){
    
  return (
  
    <div>
      <Router>
        <NavigationBar loggedIn={this.loggedIn} logOut={this.logOut}/>
        <br></br>
        <Switch>
          <Route exact path= '/' render={(renderProps) => <Home {...renderProps} username={this.state.username} loggedIn={this.loggedIn}/>}/>
          <Route exact path='/login' render={(renderProps) => <Login {...renderProps} loggedIn={this.loggedIn} username={this.state.username} setToken={this.setToken}/>}/>
          <Route exact path= '/parks' render={(renderProps) => <ParksContainer {...renderProps} addToParkCollection={this.addToParkCollection} theParks={this.parksToSendDown()} selectAPark={this.selectAPark} isAParkExpanded={this.state.isAParkExpanded} returnToParks={this.returnToParks}/>}/>
          <Route exact path= '/park_collection' render={(renderProps) => <ParkCollection {...renderProps} parks={this.parksToSendToCollection()} selectAPark={this.selectAPark} isAParkExpanded={this.state.isAParkExpanded} returnToParks={this.returnToParks} parkClickedOn={this.state.parkClickedOn}/>}/>
        </Switch>
      </Router>
    </div>
 
  )}

}

export default App;
