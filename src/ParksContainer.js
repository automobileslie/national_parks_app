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
            loggedIn={this.props.loggedIn}/>
        </div>
    }

   render(){
        return(
            <div>
       
                {!(this.props.isAParkExpanded) ? 

                    <div>

                        {this.props.parks.length < 497 ?
                            <h1>{this.props.loadingMessage}</h1> 
                            :
                            <div>
                                <br></br>
                            <Filter filterTheParksByLocation={this.props.filterTheParksByLocation}/>
                            <br></br>
                            <SearchBar filterBySearchTerm={this.props.filterBySearchTerm}/>
                            <br></br>
    
                            {!(this.props.filterAll) ? 
                            <button onClick={this.props.returnFromSearchToList}>Return to Park List</button> :
                            <div></div>}
                            </div> 
                            }
                        
                        <h2 className="list-of-parks-heading">List of Parks</h2>
                       
                        <div>{this.listTheParks()}</div>

                    </div>
                
                            :

                            <div>{this.expandOnePark()}</div>
             }

            </div>  

                )
        }
}
    

    export default ParksContainer;