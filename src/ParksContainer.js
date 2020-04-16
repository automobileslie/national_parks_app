import React from 'react';
import ParkList from './ParkList';
import ParksExpand from './ParksExpand';


const ParksContainer = (props) => {

    const { currentState, theParks, addToParkCollection, returnToParks, parkCollection, 
        loggedIn, returnToFilteredParks, theLocationFilter, returnToSearchList, 
        searchTerm, searchPark, isAParkExpanded, pickAPark, searchError } = props

    const listTheParks=()=> {

        return theParks.map(park=> {
            return <ParkList 
            
                key={park.id}
                park={park}
                fullName={park.fullName} 
                description={park.description} 
                url={park.url}
                directionsUrl={park.directionsUrl}
                pickAPark={pickAPark}
                />
            })
    }

    const expandOnePark=()=>{
        return <ParksExpand addToParkCollection={addToParkCollection} 
            park={theParks} returnToParks={returnToParks}
            parkCollection={parkCollection}
            loggedIn={loggedIn}
            returnToFilteredParks={returnToFilteredParks}
            theLocationFilter={theLocationFilter}
            returnToSearchList={returnToSearchList}
            searchPark={searchPark}/>
    }


    const parkListDisplay=()=>{

        if(props.isLoading){
        return <h1 className="loading">The parks are loading</h1>

        }

        else if(searchError.length > 0){
            return <React.Fragment>
            <h1>{searchError}</h1>
            <button className="submit-buttons" onClick={returnToParks}>Return to List of Parks</button>
            </React.Fragment>
        }

        else if(searchPark.length >0){


            return <React.Fragment>
            <h1>{`Search results for ${searchTerm}`}</h1>
            {listTheParks()}
            <button className="submit-buttons" onClick={returnToParks}>Return to List of Parks</button>
            </React.Fragment>
            
            }

        else{

            return <React.Fragment>
            <h1>{`Park List for ${currentState}`}</h1>
            {listTheParks()}
            <button className="submit-buttons" onClick={returnToParks}>Return to List of Parks</button>

            </React.Fragment>

                }  
        }

        return(
            <div>
       
                {!(isAParkExpanded) ?           
                                            
                <div className="park-list-page">{parkListDisplay()}</div>
                               
            :
                expandOnePark()
                               
             }
                

            </div> 

        )
            }
    

    export default ParksContainer;