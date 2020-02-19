import React from 'react';
import ParkList from './ParkList';
import ParksExpand from './ParksExpand';
import Filter from './Filter';
import SearchBar from './SearchBar'


class ParksContainer extends React.Component{

    listTheParks=()=> {

        return this.props.theParks.map(park=> {
        return <div>
        <ParkList 
        park={park}
        fullName={park.fullName} 
        description={park.description} 
        url={park.url}
        directionsUrl={park.directionsUrl}
        selectAPark={this.props.selectAPark}
        />
        </div>
        })
    }

    expandOnePark=()=>{
        return <div>
            <ParksExpand addToParkCollection={this.props.addToParkCollection} 
            park={this.props.theParks} returnToParks={this.props.returnToParks}
            parkCollection={this.props.parkCollection}
            loggedIn={this.props.loggedIn}
            returnToFilteredParks={this.props.returnToFilteredParks}
            theLocationFilter={this.props.theLocationFilter}
            returnToSearchList={this.props.returnToSearchList}
            searchTerm={this.props.searchTerm}/>
            
        </div>
    }

   render(){
        return(
            <div>
       
                {!(this.props.isAParkExpanded) ? 

                    <div>

                        {this.props.parks.length < 497 ?
                        <div className="park-list-page">
                            <h1>{this.props.loadingMessage}</h1> 
                            </div>
                            :
                            <div className="park-list-page">
                                <br></br>
                                <h2>Explore the National Parks and Start Planning Your Next Trip</h2>
                                <br></br>
                            <Filter filterTheParksByLocation={this.props.filterTheParksByLocation}/>
                            <br></br>
                            <SearchBar filterBySearchTerm={this.props.filterBySearchTerm}/>
                            <br></br>
    
                            {!(this.props.filterAll) ? 
                            <button onClick={this.props.returnFromSearchToList}>Return to Full Park List</button> :
                            <div></div> }
    
                            </div>  
                             
                            }
                            <br></br>
                            <div className="park-list-page" ><iframe title="national parks video" width="560" height="315" 
                            src="https://www.youtube.com/embed/ipUdTv_fHgM" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe></div>
                            <br></br>
                           {this.props.parks.length < 497 ? <div></div> : <h2 className="park-list-page">List of Parks</h2>}
                       
                        <div className="park-list-page">{this.listTheParks()}</div>

                    </div>
                
                            :

                            <div>{this.expandOnePark()}</div>
             }

            </div>  

                )
        }
}
    

    export default ParksContainer;