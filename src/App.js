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
    parkClickedOn: [],
    isAParkExpanded: false,
    parkCollection: [],
    userId: null,
    username: "",
    token: null,
    theLocationFilter: "",
    searchTerm: "",
    filterAll: true
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
        
        localStorage.setItem("theParkCollection", JSON.stringify(user.park_collections))

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
      localStorage.removeItem("parkCollectionForDisplay")
      this.setState({
        userId: null,
        token: null,
        username: "",
        parkCollection: [],
      })
    }

  selectAPark=(park)=>{
    this.setState({
      parkClickedOn: park,
      isAParkExpanded: !this.state.isAParkExpanded,
      filterAll: false
    })
  }

  parksToSendDown=()=>{

    let theParks= [...this.state.parks]

    let theParksFilteredByPlace= theParks.filter(park=>{
      return park.states.includes(this.state.theLocationFilter)
    })

    let theParksFilteredBySearchTerm= theParks.filter(park=>{
      return park.fullName.includes(this.state.searchTerm)
    })

    if (this.state.filterAll){
      return theParks
    }

    if (this.state.isAParkExpanded) {
      theParks= this.state.parkClickedOn
      }

    else if (this.state.searchTerm.length > 0) {
      theParks=theParksFilteredBySearchTerm
    }

    else {
      return theParksFilteredByPlace
    }

    return theParks
    }

    returnToParks=()=>{
      this.setState({
        parkClickedOn: [],
        isAParkExpanded: !this.state.isAParkExpanded,
        searchTerm: "",
        theLocationFilter: "",
        filterAll: true
      })
    }

    returnFromSearchToList=()=>{
        this.setState({
          parkClickedOn: [],
          searchTerm: "",
          theLocationFilter: "",
          filterAll: true
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
      let thisParkCollection= [...this.state.parkCollection, theParkCollection]
      localStorage.setItem("theParkCollection", JSON.stringify(thisParkCollection))

     this.setState({
       parkCollection: thisParkCollection
     })
  })
}

deleteFromCollection=(park)=>{
  let newParkCollectionArray= this.state.parkCollection.filter(the_park=>{
    return the_park.park_id !== park.id
  })

  let thisParkCollection= this.state.parkCollection.find(this_park_collection=>{
    return this_park_collection.park_id === park.id
  })

  let parkCollectionsId= thisParkCollection.id

  fetch(`http://localhost:3000/park_collections/${parkCollectionsId}`, {
    method: "DELETE"})
    .then(r=>r.json())
    .then(parkCollections =>{
      this.setState({
        parkCollection: newParkCollectionArray
      })

      localStorage.setItem("theParkCollection", JSON.stringify(newParkCollectionArray))
    })

  }

  filterTheParksByLocation=(event)=>{

    if (event.target.value === "All"){
      this.setState({
        filterAll: true
      })
    }
    else {
    this.setState({
      theLocationFilter: event.target.value,
      searchTerm: "",
      filterAll: false
    })
  }
  }

  filterBySearchTerm=(search)=>{
    this.setState({
      searchTerm: search,
      theLocationFilter: "",
      filterAll: false
    })
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
          <Route exact path= '/parks' render={(renderProps) => <ParksContainer {...renderProps} addToParkCollection={this.addToParkCollection} 
            theParks={this.parksToSendDown()} 
            selectAPark={this.selectAPark} 
            isAParkExpanded={this.state.isAParkExpanded} 
            returnToParks={this.returnToParks}
            returnFromSearchToList={this.returnFromSearchToList}
            filterTheParksByLocation={this.filterTheParksByLocation}
            filterBySearchTerm={this.filterBySearchTerm}
            filterAll={this.state.filterAll}
            />}/>
          <Route exact path= '/park_collection' render={(renderProps) => <ParkCollection {...renderProps} deleteFromCollection={this.deleteFromCollection}
            parkCollection={this.state.parkCollection} 
            parks={this.state.parks} 
            selectAPark={this.selectAPark} 
            isAParkExpanded={this.state.isAParkExpanded} 
            returnToParks={this.returnToParks} 
            parkClickedOn={this.state.parkClickedOn} 
            loggedIn={this.loggedIn}/>}/>
        </Switch>
      </Router>
    </div>
 
  )}

}

export default App;
