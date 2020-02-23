import React from 'react';


const ParkList = (props) => {


        const parksWithAccentsInPlace=()=>{

           let parkName= props.park.fullName
            
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

        const displayName=()=>{
        return <p onClick={()=>props.selectAPark(props.park)} className="park-name">{parksWithAccentsInPlace()}</p>  
    }

        return(
                displayName()
        )
        
}

export default ParkList;