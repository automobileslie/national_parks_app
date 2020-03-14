import React from 'react';
import ParkList from './ParkList';
import ParksExpand from './ParksExpand';
import Filter from './Filter';
import SearchBar from './SearchBar'


const ParksContainer = (props) => {

    const { theParks, addToParkCollection, returnToParks, parkCollection, 
        loggedIn, returnToFilteredParks, theLocationFilter, returnToSearchList, 
        searchTerm, isAParkExpanded, loadingMessage, filterTheParksByLocation, 
        filterBySearchTerm, returnFromSearchToList, parks, filterAll, selectAPark } = props

    const listTheParks=()=> {

        return theParks.map(park=> {
            return <ParkList 
            
                key={park.id}
                park={park}
                fullName={park.fullName} 
                description={park.description} 
                url={park.url}
                directionsUrl={park.directionsUrl}
                selectAPark={selectAPark}
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
                            
                            { !props.theParks.length>0 ?

                            <h1>The parks are loading</h1>
                            :
                            <h1>Park List</h1>
                            }

                        {listTheParks()}  

                        </div>
                
                            :

                            <div>expandOnePark()</div>
             }
                

            </div > 

                )
}
    

    export default ParksContainer;