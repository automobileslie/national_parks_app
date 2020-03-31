import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import ParkCollection from './ParkCollection';
import Login from './Login';
// import ParksContainer from './ParksContainer';
import Profile from './Profile';
import DisplayParksByState from './DisplayParksByState';
import './App.css';

class App extends React.Component {

  state={
    parks: [],
    statesFetched: [],
    parkClickedOn: [],
    isAParkExpanded: false,
    parkCollection: [],
    userId: null,
    username: "",
    token: null,
    theLocationFilter: "",
    // searchTerm: "",
    filterAll: true,
    cannotAddPark: false,
    loadingMessage: "The Parks Are Currently Loading!",
    isLoading: true,
    currentState: "",
    currentNotes: [],
    updateNote: false,
    noteId: "",
    theNoteToEdit: ""
      }

  componentDidMount=()=>{
      
      let parkCollectionParsed= JSON.parse(localStorage.getItem("theParkCollection"))
  
        this.setState({
            token: localStorage.token,
            userId: localStorage.userId,
            username: localStorage.username,
            parkCollection: parkCollectionParsed,
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

      localStorage.clear()

      this.setState({
        userId: null,
        token: null,
        username: "",
        parkCollection: [],
        parkClickedOn: [],
        isAParkExpanded: false
      })
    }

    pickAPark=(the_park)=>{

      this.setState({
        parkClickedOn: the_park,
        isAParkExpanded: true,
        filterAll: false
      })
    }

  selectAPark=(the_park)=>{
    

    fetch(`http://localhost:3000/park_collections`) 
    .then(r => r.json())
    .then(data=> {

    let filteredData= data.filter(this_data=>{
      return parseInt(this_data.user_id)===parseInt(this.state.userId)
    })

    let newFilteredData= filteredData.filter(this_data_here=>{
      return this_data_here.park_id===the_park.park_id
      
    })

      this.setState({
        parkClickedOn: the_park,
        isAParkExpanded: true,
        filterAll: false,
        currentNotes: newFilteredData[0].notes
      })

    })

  }

  showStateList=(stateAbbreviation, stateName)=>{

    if(this.state.statesFetched.includes(stateAbbreviation)){
      this.setState({
        theLocationFilter: stateAbbreviation.toUpperCase(),
        currentState: stateName,
        isLoading: false
      })
    }

    else{

    this.setState({
      theLocationFilter: stateAbbreviation.toUpperCase()
    })

    fetch("http://localhost:3000/parks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
            },
          body: JSON.stringify({
            stateCode: stateAbbreviation
              })
          })
            .then(r=>r.json())
            .then(parks=>{

           let modifiedState=this.state.parks.filter(park=>{
            return !(park.states.includes(stateAbbreviation.toUpperCase()))
           })

              this.setState({
                parks: [...modifiedState, ...parks.data],
                isLoading: false,
                currentState: stateName, 
                statesFetched: [...this.state.statesFetched, stateAbbreviation]
               })
              })
    }
}

  parksToSendDown=()=>{

    let theParks = [...this.state.parks]

    let theParksAlphabetized =  theParks.sort((a, b) => {
      return a.fullName.localeCompare(b.fullName)
    })
    
    let theParksFilteredByPlace= theParksAlphabetized.filter(park=>{
  
      return park.states.includes(this.state.theLocationFilter)
    })

    // let searchToUpperCase= this.state.searchTerm.toUpperCase()

    // let theParksFilteredBySearchTerm=  theParksAlphabetized.filter(park=>{
    //   return park.fullName.toUpperCase().includes(searchToUpperCase)
    // })

    if (this.state.filterAll){
      return  theParksFilteredByPlace
    }

    else if (this.state.isAParkExpanded) {
      
      return this.state.parkClickedOn
      }

    // else if (this.state.searchTerm.length > 0) {
    //   theParksAlphabetized=theParksFilteredBySearchTerm
    // }

    else {
      return theParksFilteredByPlace
    }
  }

    returnToParks=()=>{
      this.setState({
        parkClickedOn: [],
        isAParkExpanded: false,
        // searchTerm: "",
        theLocationFilter: "",
        filterAll: true,
        isLoading: true,
        currentState: "",
        currentNotes: [],
        noteId: "",
        updateNote: !this.state.updateNote,
        theNoteToEdit: ""

      })
    }

    returnToFilteredParks=()=>{
        this.setState({
          parkClickedOn: [],
          isAParkExpanded: false,
          theLocationFilter: this.state.theLocationFilter,
          isLoading: false,
          currentState: this.state.currentState,
          noteId: "",
          updateNote: false,
          theNoteToEdit: ""

         
        })
      }

    // returnFromSearchToList=()=>{
    //     this.setState({
    //       parkClickedOn: [],
    //       searchTerm: "",
    //       theLocationFilter: "",
    //       filterAll: true
    //     })
    //   }

    // returnToSearchList=()=>{
    //   this.setState({
    //     parkClickedOn: [],
    //     isAParkExpanded: false
    //   })
    // }

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
        full_name: park.fullName
      })
     })
     .then(r=>r.json())
     .then(theParkCollections => {

      let newParks= theParkCollections.filter(thisParkCollection=>{
        return parseInt(thisParkCollection.user_id) === parseInt(this.state.userId)
      })

      this.setState({
        parkCollection: newParks,
        parkClickedOn: [],
        isAParkExpanded: false
      })

      localStorage.setItem("theParkCollection", JSON.stringify(newParks))
    })

    alert("The park was added to your park list!")
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

  deleteANote=(note)=>{

    let theNewNotes=this.state.currentNotes.filter(the_note=>{
      return parseInt(note)!==parseInt(the_note.id)
      })


    fetch(`http://localhost:3000/notes/${parseInt(note)}`, {
        method: "DELETE"
    })
    .then(r=>r.json())
    .then(data=>{
      this.setState({
        currentNotes: theNewNotes,
        theNoteToEdit: ""

      })
    })
  }

  // filterTheParksByLocation=(event)=>{

  //   if (event.target.value === "All"){
  //     this.setState({
  //       filterAll: true
  //     })
  //   }
  //   else {
  //   this.setState({
  //     theLocationFilter: event.target.value,
  //     searchTerm: "",
  //     filterAll: false
  //   })
  // }
  // }

  // filterBySearchTerm=(search)=>{
  //   this.setState({
  //     searchTerm: search,
  //     theLocationFilter: "",
  //     filterAll: false
  //   })
  // }

  deleteAccount=()=>{
    fetch(`http://localhost:3000/users/${parseInt(this.state.userId)}`, {
      method: "DELETE",
      headers: {
        "Authorization": this.state.token
        }
    })
    .then(r=> r.json())
    .then(message=> {
    return this.logOut()
    })

    alert("Your account has been deleted!")
  }

  submitNotes=(notes)=>{

    let the_notes=notes.notes

    let theParkCollection= this.state.parkCollection.filter(park=>{
      return park.park_id===this.state.parkClickedOn.park_id
      })

    fetch(`http://localhost:3000/notes`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accepts": "application/json"
          },
        body: JSON.stringify({
              entry: the_notes,
              park_collection_id: theParkCollection[0].id
        })
    })
    .then(r=>r.json())
    .then(newNote=>{

      this.setState({
        currentNotes: [...this.state.currentNotes, newNote],
        noteId: "",
        updateNote: false,
        theNoteToEdit: ""

      })

    })
    
  }

  updateNoteForm=(theNote)=>{
    this.setState({
      updateNote: !this.state.updateNote,
      noteId: theNote.id,
      theNoteToEdit: theNote.entry

    })
  }

  editNote=(note)=>{

    let theNotes= this.state.currentNotes.filter(note=>{
      return note.id!==parseInt(this.state.noteId)
      })

    fetch(`http://localhost:3000/notes/${parseInt(this.state.noteId)}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "Accepts": "application/json"
          },
        body: JSON.stringify({
              entry: note.entry
        })
    })
    .then(r=>r.json())
    .then(updatedNote=>{
      console.log(updatedNote)

      this.setState({
        currentNotes: [...theNotes, updatedNote],
        noteId: "",
        updateNote: !this.state.updateNote,
        theNoteToEdit: ""


      })

    })
    
  }

  render(){ 
   
    return (
  
    <React.Fragment>
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
          <Route exact path= '/parks' render={(renderProps) => <DisplayParksByState {...renderProps} addToParkCollection={this.addToParkCollection} 
            currentState={this.state.currentState}
            isLoading={this.state.isLoading}
            showStateList={this.showStateList}
            theParks={this.parksToSendDown()} 
            pickAPark={this.pickAPark} 
            isAParkExpanded={this.state.isAParkExpanded} 
            returnToParks={this.returnToParks}
            // returnFromSearchToList={this.returnFromSearchToList}
            filterTheParksByLocation={this.filterTheParksByLocation}
            // filterBySearchTerm={this.filterBySearchTerm}
            filterAll={this.state.filterAll}
            cannotAddPark={this.state.cannotAddPark}
            numberForParksDisplay={this.state.numberForParksDisplay}
            parkCollection={this.state.parkCollection}
            // searchTerm={this.state.searchTerm}
            theLocationFilter={this.state.theLocationFilter}
            loggedIn={this.loggedIn}
            loadingMessage={this.state.loadingMessage}
            parks={this.state.parks}
            returnToFilteredParks={this.returnToFilteredParks}
            // returnToSearchList={this.returnToSearchList}
            />
            }/>
          <Route exact path= '/park_collection' render={(renderProps) => <ParkCollection {...renderProps} deleteFromCollection={this.deleteFromCollection}
            theNoteToEdit={this.state.theNoteToEdit}
            editNote={this.editNote}
            updateNoteForm={this.updateNoteForm}
            updateNote={this.state.updateNote}
            deleteANote={this.deleteANote}
            currentNotes={this.state.currentNotes}
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
    </React.Fragment>
 
  )}

}

export default App;
