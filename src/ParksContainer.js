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
            <React.Fragment>
       
                {!(isAParkExpanded) ? 

                    <React.Fragment>

                        {parks.length < 125 ?
                       
                            <h1 className="park-list-page">{loadingMessage}</h1> 
                           
                            :
                            <div  className="park-list-page">
                                <br></br>
                                <h2>Explore the National Parks and Start Planning Your Next Trip</h2>
                                <br></br>
                            <Filter filterTheParksByLocation={filterTheParksByLocation}/>
                            <br></br>
                            <SearchBar filterBySearchTerm={filterBySearchTerm}/>
                            <br></br>
    
                            {!(filterAll) ? 
                            <button onClick={returnFromSearchToList}>Return to Full Park List</button> :
                            <div></div> }
    
                            </div>  
                             
                            }
                            <div className="park-list-page" ><iframe title="national parks video" width="560" height="315" 
                            src="https://www.youtube.com/embed/ipUdTv_fHgM" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe></div>

                           {parks.length < 125 ? <div></div> : <h2 className="park-list-heading">List of Parks</h2>}
                       
                        <div className="park-list-page">{listTheParks()}</div>

                    </React.Fragment>
                
                            :

                            expandOnePark()
             }

            </React.Fragment>  

                )
}
    

    export default ParksContainer;