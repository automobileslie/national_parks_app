import React from 'react';
// import ParksContainer from './ParksContainer';
// import ParksExpand from './ParksExpand'


export default class ParkCollection extends React.Component {

    displayingCollection=()=> { 
        return this.props.parks.map(park=>{
            return park.map(the_park=> {
            return <div>
            <p onClick={()=>{this.props.selectAPark(the_park)}} className="park-name">{the_park.fullName}</p>
            </div>
        })
    })
    }

    displayPark=()=>{
        return <div>
        <h2>{this.props.parkClickedOn.fullName}</h2>
        <p>{this.props.parkClickedOn.description}</p>
        <a href={this.props.parkClickedOn.url}> National Park Services Website </a>
        <br></br>
        <a href={this.props.parkClickedOn.directionsUrl}>Directions</a>
        <br></br>
        <br></br>
        <button className="button" onClick={this.props.returnToParks}>Return to List of Parks</button>
        </div>
        }
    

    render(){
        return(
            <div>

                {!(this.props.isAParkExpanded) ? 
            this.displayingCollection()
            :
            this.displayPark()
                }

            </div>
           
        )
        }
}