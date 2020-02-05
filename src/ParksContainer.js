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
            park={this.props.theParks} returnToParks={this.props.returnToParks}/>
        </div>
    }



   render(){
        return(
            <div>

                {/* {this.props.cannotAddPark ? 
                <h2>{this.props.errorMessageForAddingPark}</h2> :
                <div></div>
                } */}
       
                {!(this.props.isAParkExpanded) ? 

                <div>
        
                <h2 className="list-of-parks-heading">List of Parks</h2>
                <br></br>
                    <Filter filterTheParksByLocation={this.props.filterTheParksByLocation}/>
                    <br></br>
                    <SearchBar filterBySearchTerm={this.props.filterBySearchTerm}/>
                    <br></br>
                    {!(this.props.filterAll) ? 
                    <button onClick={this.props.returnFromSearchToList}>Return to Park List</button> :
   <div></div> }
                <div>{this.listTheParks()}</div> </div> :

                <div>{this.expandOnePark()}</div>}

            </div>
            
    
        )
    }
}
    

    export default ParksContainer;