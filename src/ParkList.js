import React from 'react';


export default class ParkList extends React.Component{

        parksWithAccentsInPlace=()=>{

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


    displayName=()=>{
        return <div >
        <p onClick={()=>this.props.selectAPark(this.props.park)} className="park-name">{this.parksWithAccentsInPlace()}</p>
        </div>
    }

  






    render(){
        return(
            <div>
                
                {this.displayName()}
            </div>
        )
    }
}