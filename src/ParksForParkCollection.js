import React from 'react';

 const ParksForParkCollection = (props)=>{

    const parksWithProperAccents=()=>{

        let theParkName = props.park.full_name
         
        if (theParkName.includes("Haleakal&#257")) {
           theParkName="Haleakalā National Park"}

       else if (theParkName.includes("&#241;upiat")){
        theParkName="Iñupiat Heritage Center"
       }
       else if (theParkName.includes("Honok&#333;hau")){
        theParkName="Kaloko-Honokōhau National Historical Park"
       }
       else if (theParkName.includes("&#333")){
        theParkName="Pu`uhonua O Hōnaunau National Historical Park"
       }
       else if (theParkName.includes("&#257")){
        theParkName="Pu`ukoholā Heiau National Historical Site"
       }
       else {return theParkName}

       return theParkName
    
    }

        return(
            <p onClick={()=>{props.selectAPark(props.park)}} className="park-name">{parksWithProperAccents()}</p>
        )
 }

 export default ParksForParkCollection;