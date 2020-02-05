import React from 'react';
export default class ParksExpand extends React.Component{


    displayPark=()=>{
        return <div>
        <h2>{this.props.park.fullName}</h2>
        <p>{this.props.park.description}</p>
        <a target="_blank" rel="noopener noreferrer" href={this.props.park.url} > National Park Services Website </a>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href={this.props.park.directionsUrl} >Directions</a>
        <br></br>
        <br></br>
        <button className="button" onClick={this.props.returnToParks}>Return to List of Parks</button>
        <button className="button" onClick={()=>this.props.addToParkCollection(this.props.park)}>Add to your park collection</button>
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