import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import ParkCollection from './ParkCollection';
import Login from './Login';
import ParksContainer from './ParksContainer';
import Profile from './Profile';
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
    filterAll: true,
    cannotAddPark: false,
    numberForParksDisplay: 0,
    loadingMessage: "The Parks Are Currently Loading!"
  }

  componentDidMount=()=>{

    fetch("http://localhost:3000/parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        number: 0
      })
    })

    .then(r => r.json())

    .then(parks => { 

      let parkCollectionParsed= JSON.parse(localStorage.getItem("theParkCollection"))

      this.setState({
        parks: parks.data,
        token: localStorage.token,
        userId: localStorage.userId,
        username: localStorage.username,
        parkCollection: parkCollectionParsed,
        numberForParksDisplay: 0
      })
    })
  }
  
  fetchMoreParks=()=>{

      if(this.state.parks && this.state.parks.length < 497) {

      if(this.state.parks.length === this.state.numberForParksDisplay + 20) {

      let numberForParks=this.state.parks.length + 1;

    fetch("http://localhost:3000/parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        number: numberForParks
      })
    })
    .then(r => r.json())
    .then(parks => { 

      this.setState({
        parks: [...this.state.parks, ...parks.data],
        numberForParksDisplay: this.state.numberForParksDisplay + 20
      })
  })

    }
  }
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

      localStorage.clear()
     
      // localStorage.removeItem("userId")
      // localStorage.removeItem("token")
      // localStorage.removeItem("username")
      // localStorage.removeItem("theParkCollection")
      // localStorage.removeItem("parkCollectionForDisplay")

      this.setState({
        userId: null,
        token: null,
        username: "",
        parkCollection: [],
        parkClickedOn: [],
        isAParkExpanded: false
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

    if (this.state.parks && this.state.parks.length < 497){

      let theParks= []
    
    return theParks}

    else {

    let theParks = [...this.state.parks]

    let theParksAlphabetized =  theParks.sort((a, b) => {
      return a.fullName.localeCompare(b.fullName)
  })
    
    let theParksFilteredByPlace= theParksAlphabetized.filter(park=>{
      return park.states.includes(this.state.theLocationFilter)
    })

    let searchToUpperCase= this.state.searchTerm.toUpperCase()

    let theParksFilteredBySearchTerm=  theParksAlphabetized.filter(park=>{
      return park.fullName.toUpperCase().includes(searchToUpperCase)
    })

    if (this.state.filterAll){
      return  theParksAlphabetized
    }

    if (this.state.isAParkExpanded) {
      theParksAlphabetized= this.state.parkClickedOn
      return theParksAlphabetized
      }

    else if (this.state.searchTerm.length > 0) {
      theParksAlphabetized=theParksFilteredBySearchTerm
    }

    else {
      return theParksFilteredByPlace
    }
  

    return  theParksAlphabetized
  }

    }

    returnToParks=()=>{
      this.setState({
        parkClickedOn: [],
        isAParkExpanded: false,
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

        let thisParkCollectionArray= this.state.parkCollection.filter(the_park=>{
          return the_park.park_id === park.id
        })
        if (thisParkCollectionArray.length > 0) {
          this.setState({
          cannotAddPark: true,
          isAParkExpanded: false
        })
      }

      else {
   
      fetch("http://localhost:3000/park_collections", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.userId,
        park_id: park.id,
        description: park.description,
        directions_url: park.directionsUrl,
        url: park.url,
        full_name: park.fullName,
        notes: ""
      })
     })
     .then(r=>r.json())
     .then(theParkCollection => {

     let theNewParkCollection=[...this.state.parkCollection, theParkCollection]

      this.setState({
        parkCollection: theNewParkCollection,
        isAParkExpanded: false
      })

      localStorage.setItem("theParkCollection", JSON.stringify(theNewParkCollection))
    })
  }
}

deleteFromCollection=(park)=>{
  let newParkCollectionArray= this.state.parkCollection.filter(the_park=>{
    return the_park.park_id !== park.park_id
  })

  let thisParkCollection= this.state.parkCollection.find(this_park_collection=>{
    return this_park_collection.park_id === park.park_id
  })

  let parkCollectionsId= thisParkCollection.id

  fetch(`http://localhost:3000/park_collections/${parkCollectionsId}`, {
    method: "DELETE"})
    .then(r=>r.json())
    .then(parkCollections =>{
      this.setState({
        parkCollection: newParkCollectionArray,
        isAParkExpanded: false
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

  changeUsername=(name)=>{
    let the_username=name.username
    fetch(`http://localhost:3000/users/${this.state.userId}`, {
      method: "PATCH",
      headers: {
        "Authorization": this.state.token
      },
      body: JSON.stringify({
        username: the_username
      })
    })
    .then(r=> r.json())
    .then(user=> {
    this.setState({
    username: the_username
      })
    })

    localStorage.setItem("username", the_username)
  }

  deleteAccount=()=>{
    fetch(`http://localhost:3000/users/${this.state.userId}`, {
      method: "DELETE",
      headers: {
        "Authorization": this.state.token
        }
    })
    .then(r=> r.json())
    .then(message=> {
    return this.logOut()
    })
  }

  submitNotes=(notes)=>{

    let the_notes=notes.notes

    let theParkCollection= this.state.parkCollection.filter(park=>{
      return park.park_id===this.state.parkClickedOn.park_id
      })

    fetch(`http://localhost:3000/park_collections/${theParkCollection[0].id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "Accepts": "application/json"
          },
        body: JSON.stringify({
              notes: the_notes
        })
    })
    .then(r=>r.json())
    .then(parkCollectionInfo=>{

      let theNewParks= parkCollectionInfo.filter(parkCollectionData=>{
        return parseInt(parkCollectionData.user_id) === this.state.userId
      })

      this.setState({
        parkCollection: theNewParks,
        parkClickedOn: [],
        isAParkExpanded: false
      })

      localStorage.setItem("theParkCollection", JSON.stringify(theNewParks))

    })
    
  }

  render(){
    console.log(this.state.parkCollection)
    console.log(this.state.userId)
  return (
  
    <div>
      {this.fetchMoreParks()}
      <Router>
        <NavigationBar loggedIn={this.loggedIn} logOut={this.logOut}
        parks={this.state.parks}
        returnToParks={this.returnToParks}/>
        <br></br>
        <Switch>
          <Route exact path= '/' render={(renderProps) => <Home {...renderProps} username={this.state.username} loggedIn={this.loggedIn}/>}/>
          <Route exact path='/login' render={(renderProps) => <Login {...renderProps} loggedIn={this.loggedIn} 
          username={this.state.username} 
          setToken={this.setToken}
          parks={this.state.parks}
          />}/>
          <Route exact path= '/parks' render={(renderProps) => <ParksContainer {...renderProps} addToParkCollection={this.addToParkCollection} 
            theParks={this.parksToSendDown()} 
            selectAPark={this.selectAPark} 
            isAParkExpanded={this.state.isAParkExpanded} 
            returnToParks={this.returnToParks}
            returnFromSearchToList={this.returnFromSearchToList}
            filterTheParksByLocation={this.filterTheParksByLocation}
            filterBySearchTerm={this.filterBySearchTerm}
            filterAll={this.state.filterAll}
            cannotAddPark={this.state.cannotAddPark}
            numberForParksDisplay={this.state.numberForParksDisplay}
            parkCollection={this.state.parkCollection}
            searchTerm={this.state.searchTerm}
            theLocationFilter={this.state.theLocationFilter}
            loggedIn={this.loggedIn}
            loadingMessage={this.state.loadingMessage}
            parks={this.state.parks}
            
            />}/>
          <Route exact path= '/park_collection' render={(renderProps) => <ParkCollection {...renderProps} deleteFromCollection={this.deleteFromCollection}
            parkCollection={this.state.parkCollection} 
            parks={this.state.parks} 
            selectAPark={this.selectAPark} 
            isAParkExpanded={this.state.isAParkExpanded} 
            returnToParks={this.returnToParks} 
            parkClickedOn={this.state.parkClickedOn} 
            loggedIn={this.loggedIn}
            submitNotes={this.submitNotes}/>}/>
            <Route exact path= '/profile' render={(renderProps) => <Profile {...renderProps} username={this.state.username} 
            changeUsername={this.changeUsername} 
            deleteAccount={this.deleteAccount}
            loggedIn={this.loggedIn}
            parks={this.state.parks}/>}/>
        </Switch>
      </Router>
    </div>
 
  )}

}

export default App;
