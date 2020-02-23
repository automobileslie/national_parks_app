import React from 'react';


const ParksExpand = (props)=> {

    const { theLocationFilter, returnToFilteredParks, searchTerm, returnToSearchList, returnToParks, park, loggedIn, parkCollection} = props


    const parksWithCorrectAccents=()=>{

        let parkName= park.fullName
         
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

        const whichButtonToRender=()=>{
            if(theLocationFilter.length > 0) {
                return <button className="button" onClick={returnToFilteredParks}>Return to List of Parks</button>
            }
            else if (searchTerm.length > 0){
            return <button className="button" onClick={returnToSearchList}>Return to List of Parks</button>

            }

            else {
            
                return <button className="button" onClick={returnToParks}>Return to List of Parks</button>
            }
        }

        const displayPark=()=>{

        return <React.Fragment>
        <h2>{parksWithCorrectAccents()}</h2>
        <p>{park.description}</p>
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={park.url} > National Park Services Website </a>
        <br></br>
        {park.directionsUrl.length > 0 ?
        <a className="website-link" target="_blank" rel="noopener noreferrer" href={park.directionsUrl} >Directions</a>
        :
        <div></div>
        }
        <br></br>
        <br></br>
       {whichButtonToRender()}
        </React.Fragment>
        }

       const displayButtonToAdd=()=>{

            if (loggedIn()) {

                let parkCollectionParkIds= parkCollection.map(park=> {
                    return park.park_id })

                if (!(parkCollectionParkIds.includes(park.id))) {

                    return <button className="button" onClick={()=>props.addToParkCollection(park)}>Add to your park collection</button>}

                else {
    
                    return <div></div>
                }
            }
        }

   
        return(
            <div className="the-park-list-and-profile">
                {displayPark()}
                {displayButtonToAdd()}
                </div>
        )
}

export default ParksExpand;