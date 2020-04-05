import React from 'react';
import ParkList from './ParkList';
import ParksExpand from './ParksExpand';
import Filter from './Filter';
import SearchBar from './SearchBar'


const ParksContainer = (props) => {

    const { currentState, theParks, addToParkCollection, returnToParks, parkCollection, 
        loggedIn, returnToFilteredParks, theLocationFilter, returnToSearchList, 
        searchTerm, isAParkExpanded, loadingMessage, filterTheParksByLocation, 
        filterBySearchTerm, returnFromSearchToList, parks, filterAll, pickAPark } = props

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
            searchTerm={searchTerm}/>
    }

        return(
            <div>
       
                {!(isAParkExpanded) ?          
                        
                        <div className="park-list-page">
                            
                            { props.isLoading ?

                            <h1>The parks are loading</h1>
                            :
                            <div>
                            <h1>{`Park List for ${currentState}`}</h1>

                        {listTheParks()}  
                        <button className="submit-buttons" onClick={returnToParks}>Return to List of Parks</button>
                            </div>
                            }

                        </div>
                
                            :
                                expandOnePark()
                               
             }
                

            </div > 

                )
}
    

    export default ParksContainer;