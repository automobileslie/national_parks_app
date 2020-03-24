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


        const displayPark=()=>{

        return <React.Fragment>
        <h1 className="park-name-for-show-page">{parksWithCorrectAccents()}</h1>
        

            {park.images.length>0 ? 
            <div className="park-container-for-show-page">
            <img className= "image-for-show-page" src={`${park.images[0].url}`}/>
            <div className="text-display-on-park-show-page">
        <p className="park-description">{park.description}</p>
        <a className="website-link-for-park-show-page" target="_blank" rel="noopener noreferrer" href={park.url} > National Park Service Website </a>
        <br></br>
        {park.directionsUrl.length > 0 ?
        <a className="website-link-for-park-show-page" target="_blank" rel="noopener noreferrer" href={park.directionsUrl} >Directions</a>
        :
        <div></div>
        }
        <br></br>
        <br></br>
        <p className="button-to-return-on-park-show-page" onClick={returnToFilteredParks}>Return to List of Parks</p>
        
        {displayButtonToAdd()}
        </div>
        </div>
            :
            <div>

            <p>{park.description}</p>
            <a className="website-link" target="_blank" rel="noopener noreferrer" href={park.url} > National Park Service Website </a>
            <br></br>
            {park.directionsUrl.length > 0 ?
            <a className="website-link" target="_blank" rel="noopener noreferrer" href={park.directionsUrl} >Directions</a>
            :
            <div></div>
            }
            <p className="button-to-return" onClick={returnToFilteredParks}>Return to List of Parks</p>
        
            {displayButtonToAdd()}
            </div>
        }

        </React.Fragment>
        
        }

       const displayButtonToAdd=()=>{

            if (loggedIn()) {

                let parkCollectionParkIds= parkCollection.map(park=> {
                    return park.park_id })

                if (!(parkCollectionParkIds.includes(park.id))) {

                    if(park.images.length>0){

                    return <p className="add-to-park-collection-button" onClick={()=>props.addToParkCollection(park)}>Add to your park collection</p>}
            
                    else{
                    return <p className="add-to-park-collection-button-no-image" onClick={()=>props.addToParkCollection(park)}>Add to your park collection</p>
                    }
                }

                else {
    
                    return <div></div>
                }
            
        }
    }

   
        return(
            <div className="the-park-list-and-profile">
                {displayPark()}
               
                </div>
        )
}

export default ParksExpand;