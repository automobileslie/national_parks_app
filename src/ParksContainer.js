import React from 'react';
import ParkList from './ParkList';
import ParksExpand from './ParksExpand'


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
            <ParksExpand addToParkCollection={this.props.addToParkCollection} park={this.props.theParks} returnToParks={this.props.returnToParks}/>
        </div>
    }



   render(){
        return(
            <div>
       
                {!(this.props.isAParkExpanded) ? 

                <div>
        
                <h3 className="list-of-parks-heading">List of Parks</h3>

                <div>{this.listTheParks()}</div> </div> :

                <div>{this.expandOnePark()}</div>}

            </div>
            
    
        )
    }
}
    

    export default ParksContainer;