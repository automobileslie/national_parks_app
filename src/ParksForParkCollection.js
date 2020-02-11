import React from 'react';

 export default class ParksForParkCollection extends React.Component{


    parksWithProperAccents=()=>{
         
        if (this.props.park.full_name.includes("Haleakal&#257")) {
           this.props.park.full_name="Haleakalā National Park"}

       else if (this.props.park.full_name.includes("&#241;upiat")){
           this.props.park.full_name="Iñupiat Heritage Center"
       }
       else if (this.props.park.full_name.includes("Honok&#333;hau")){
           this.props.park.full_name="Kaloko-Honokōhau National Historical Park"
       }
       else if (this.props.park.full_name.includes("&#333")){
           this.props.park.full_name="Pu`uhonua O Hōnaunau National Historical Park"
       }
       else if (this.props.park.full_name.includes("&#257")){
           this.props.park.full_name="Pu`ukoholā Heiau National Historical Site"
       }
       else {return this.props.park.full_name}

       return this.props.park.full_name
    
    }


    render(){
        return(
            <div>
            <p onClick={()=>{this.props.selectAPark(this.props.park)}} className="park-name">{this.parksWithProperAccents()}</p>

            </div>
        )
    }
 }