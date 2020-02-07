import React from 'react';
export default class ParksExpand extends React.Component{


    displayPark=()=>{

        return <div>
        <h2>{this.props.park.fullName}</h2>
        <p>{this.props.park.description}</p>
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.park.url} > National Park Services Website </a>
        <br></br>
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.park.directionsUrl} >Directions</a>
        <br></br>
        <br></br>
        <button className="button" onClick={this.props.returnToParks}>Return to List of Parks</button>
        </div>
    }



        displayButtonToAdd=()=>{

        if (this.props.loggedIn()) {

            let parkCollectionParkIds= this.props.parkCollection.map(park=> {
                return park.park_id })

            if (!(parkCollectionParkIds.includes(this.props.park.id))) {

            return <button className="button" onClick={()=>this.props.addToParkCollection(this.props.park)}>Add to your park collection</button>}

            else {
    
            return <div></div>
            }
        }
    }
        


    render(){
        return(
            <div>
                {this.displayPark()}
                {this.displayButtonToAdd()}
            </div>
        )
    }
}