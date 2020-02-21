import React from 'react';
export default class ParksExpand extends React.Component{


    parksWithCorrectAccents=()=>{

        let parkName= this.props.park.fullName
         
         if (parkName.includes("Haleakal&#257")) {
         parkName="Haleakalā National Park"}

        else if (parkName.includes("&#241;upiat")){
         parkName="Iñupiat Heritage Center"
        }
        else if (parkName.includes("Honok&#333;hau")){
           parkName="Kaloko-Honokōhau National Historical Park"
        }
        else if (parkName.includes("&#333")){
             parkName="Pu`uhonua O Hōnaunau National Historical Park"
        }
        else if (parkName.includes("&#257")){
           parkName="Pu`ukoholā Heiau National Historical Site"
        }
        else {return parkName}

        return parkName
     }

     whichButtonToRender=()=>{
        if(this.props.theLocationFilter.length > 0) {
            return <button className="button" onClick={this.props.returnToFilteredParks}>Return to List of Parks</button>
        }
        else if (this.props.searchTerm.length > 0){
           return <button className="button" onClick={this.props.returnToSearchList}>Return to List of Parks</button>

        }

        else {
            
            return <button className="button" onClick={this.props.returnToParks}>Return to List of Parks</button>
            }

     }

    displayPark=()=>{

        return <React.Fragment>
        <h2>{this.parksWithCorrectAccents()}</h2>
        <p>{this.props.park.description}</p>
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.park.url} > National Park Services Website </a>
        <br></br>
        {this.props.park.directionsUrl.length > 0 ?
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.park.directionsUrl} >Directions</a>
        :
        <div></div>
        }
        <br></br>
        <br></br>
       {this.whichButtonToRender()}
        </React.Fragment>
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
            <div className="the-park-list-and-profile">
                {this.displayPark()}
                {this.displayButtonToAdd()}
                </div>
        )
    }
}