import React from 'react';
import ParksForParkCollection from './ParksForParkCollection';
import ExpandParksInParkCollection from './ExpandParksInParkCollection';




const ParkCollection= (props)=> {

    const { currentNotes, parkCollection, parkClickedOn, deleteFromCollection, returnToParks, submitNotes, isAParkExpanded, loggedIn, selectAPark } = props


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
        parkClickedOn={parkClickedOn} 
       deleteFromCollection={deleteFromCollection}
       returnToParks={returnToParks}
       submitNotes={submitNotes}
       parkCollection={parkCollection}/>
        }

    const whichParksToRender= () => {
    
        if (isAParkExpanded) { 
            return displayPark()}
        else {              
            return <React.Fragment>
                <h2>Where You'd Like To Go</h2>
                {displayingCollection()}
                </React.Fragment>
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