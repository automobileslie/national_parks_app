import React from 'react';
import ParksForParkCollection from './ParksForParkCollection';
import ExpandParksInParkCollection from './ExpandParksInParkCollection';




const ParkCollection= (props)=> {

    const { theNoteToEdit, updateNoteForm, updateNote, editNote, deleteANote, currentNotes, parkCollection, parkClickedOn, deleteFromCollection, returnToParks, submitNotes, isAParkExpanded, loggedIn, selectAPark } = props


    const displayingCollection=()=> { 

        let theseParksAlphabetized= parkCollection.flat().sort((a, b) => {
            return a.full_name.localeCompare(b.full_name)
        })
          
            return theseParksAlphabetized.map(the_park=>{
                return <ParksForParkCollection key={the_park.id} park={the_park} selectAPark={selectAPark}/>
            })
    }

    const displayPark=()=>{
        return <ExpandParksInParkCollection currentNotes={currentNotes}
        theNoteToEdit={theNoteToEdit}
        updateNoteForm={updateNoteForm}
        updateNote={updateNote}
        editNote={editNote}
        parkClickedOn={parkClickedOn} 
       deleteFromCollection={deleteFromCollection}
       deleteANote={deleteANote}
       returnToParks={returnToParks}
       submitNotes={submitNotes}
       parkCollection={parkCollection}/>
        }

    const whichParksToRender= () => {
    
        if (isAParkExpanded) { 
            return displayPark()}
        else {  
            if (parkCollection.length>0){
          
            return <React.Fragment>
                <h1 className="park-collection-heading">Where You'd Like To Go</h1>
                <p className="park-collection-tag">Click on the name of a park in your collection to learn more about it and take notes as you plan a trip</p>
                {displayingCollection()}
                </React.Fragment>
                    }
            else{
                return <React.Fragment>
                    <h1>Add parks to your collection to begin</h1>
                    <h3>Go to the parks tab to search for parks by state or territory, <br></br>then come back to your park collection and take notes as you plan trips.</h3>
                   
                    </React.Fragment>

            }
                }
        }
    
        return(
            <div className="the-park-list-and-profile">
                {loggedIn() ?
                
                        <div> {whichParksToRender()} </div> 

                        :

                <h2>Log in to see your park list</h2>
                }
            </div>
        )
        
}

export default ParkCollection;