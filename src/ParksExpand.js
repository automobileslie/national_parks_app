import React from 'react';
export default class ParksExpand extends React.Component{


    displayPark=()=>{

        let parkCollectionParkIds= this.props.parkCollection.map(park=> {
            return park.park_id
        })

        return <div>
        <h2>{this.props.park.fullName}</h2>
        <p>{this.props.park.description}</p>
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.park.url} > National Park Services Website </a>
        <br></br>
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.park.directionsUrl} >Directions</a>
        <br></br>
        <br></br>
        <button className="button" onClick={this.props.returnToParks}>Return to List of Parks</button>
        {!(parkCollectionParkIds.includes(this.props.park.id)) ?
        <button className="button" onClick={()=>this.props.addToParkCollection(this.props.park)}>Add to your park collection</button>
        : <div></div> }
        </div>
    }


    render(){
        return(
            <div>
                {this.displayPark()}

            </div>
        )
    }
}