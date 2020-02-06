import React from 'react';

    const parkImages= [
    <img src={require("./Images/Bryce_Canyon.jpg")} alt="Bryce Canyon" />, 
    <img src={require("./Images/Cape_Cod.jpg")} alt="Cape Cod"/>, 
    <img src={require("./Images/DryTortugas.jpg")} alt="Dry Tortugas" />, 
    <img src={require("./Images/Governors_Island.jpg")} alt="Governors Island" />, 
    <img src={require("./Images/Lincoln_Memorial.jpg")} alt="Lincoln Memorial"/>, 
    <img src={require("./Images/Niobrara.jpg")} alt= "Niobrara"/>, 
    <img src={require("./Images/Redwoods.jpg")} alt="Redwoods"/>, 
    <img src={require("./Images/Sagamore.jpg")} alt="Sagamore"/>, 
    <img src={require("./Images/Saint_Croix.jpg")} alt="Saint Croix"/>, 
    <img src={require("./Images/Yellowstone.jpg")} alt="Yellowstone"/>
    ]


export default class Home extends React.Component {


displayParks=()=>{
    return <div className="park-image-div">{parkImages}</div>
}



render(){
    return(
        <div>
            <h1 className="home-page-header">Find a park</h1>
            {this.displayParks()}        
        </div>


    )
}
}


