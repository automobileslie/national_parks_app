import React from 'react';

 
export default class Home extends React.Component {

    state={
        currentImage: 0
    }

    componentDidMount=()=>{

        let settingInterval=()=>{
            if (this.state.currentImage <= 19) {
                this.setState({
            currentImage: this.state.currentImage + 1})}
            
            else {
                this.setState({
                    currentImage: this.state.currentImage - 20
                })
            }
        }

        setInterval(settingInterval, 5000)
    }

    renderImages=()=>{

        const parkImages= [
            {img: <img src={require(`./Images/Bryce_Canyon.jpg`)} alt="Bryce Canyon" />, name: "Bryce Canyon", url: "https://www.nps.gov/brca/index.htm"}, 
            {img: <img src={require("./Images/Redwood.jpg")} alt="Redwood"/>, name: "Redwood", url:"https://www.nps.gov/redw/index.htm"},
            {img: <img src={require("./Images/Cape_Cod.jpg")} alt="Cape Cod"/>, name: "Cape Cod", url: "https://www.nps.gov/caco/index.htm"}, 
            {img: <img src={require("./Images/Niobrara.jpg")} alt= "Niobrara"/>, name: "Niobrara", url:"https://www.nps.gov/niob/index.htm"},
            {img: <img src={require("./Images/Dry_Tortugas.jpg")} alt="Dry Tortugas" />, name: "Dry Tortugas", url:"https://www.nps.gov/drto/index.htm"}, 
            {img: <img src={require("./Images/Governors_Island.jpg")} alt="Governors Island" />, name: "Governors Island", url:"https://www.nps.gov/gois/index.htm"}, 
            {img: <img src={require("./Images/Yellowstone.jpg")} alt="Yellowstone"/>, name: "Yellowstone", url:"https://www.nps.gov/yell/index.htm"},
            {img: <img src={require("./Images/Lincoln_Memorial.jpg")} alt="Lincoln Memorial"/>, name: "Lincoln Memorial", url:"https://www.nps.gov/linc/index.htm"}, 
            {img: <img src={require("./Images/Yosemite_Falls.jpg")} alt="Yosemite Falls"/>, name: "Yosemite", url:"https://www.nps.gov/yose/index.htm"},
            {img: <img src={require("./Images/Saint_Croix.jpg")} alt="Saint Croix"/>, name: "Saint Croix", url:"https://www.nps.gov/sacn/index.htm"}, 
            {img: <img src={require("./Images/Apostle_Islands.jpg")} alt="Apostle Islands"/>, name: "Apostle Islands", url:"https://www.nps.gov/apis/index.htm"},
            {img: <img src={require("./Images/Petrified_Forest.jpg")} alt="Petrified Forest"/>, name: "Petrified Forest", url:"https://www.nps.gov/pefo/index.htm"},
            {img: <img src={require("./Images/Badlands.jpg")} alt="Badlands"/>, name: "Badlands", url:"https://www.nps.gov/badl/index.htm"},
            {img: <img src={require("./Images/Gates_of_the_Arctic.jpg")} alt="Gates of the Arctic"/>, name: "Gates of the Arctic", url:"https://www.nps.gov/gaar/index.htm"},
            {img: <img src={require("./Images/Alcatraz_Island.jpg")} alt="Alcatraz Island"/>, name: "Alcatraz Island", url:"https://www.nps.gov/alca/index.htm"},
            {img: <img src={require("./Images/Grand_Canyon.jpg")} alt="Grand Canyon"/>, name: "Grand Canyon", url:"https://www.nps.gov/grca/index.htm"},
            {img: <img src={require("./Images/Mesa_Verde.jpg")} alt="Mesa Verde"/>, name: "Mesa Verde", url:"https://www.nps.gov/meve/index.htm"},
            {img: <img src={require("./Images/Crater_Lake.jpg")} alt="Crater Lake"/>, name: "Crater Lake", url:"https://www.nps.gov/crla/index.htm"},
            {img: <img src={require("./Images/Olympic.jpg")} alt="Olympic"/>, name: "Olympic", url:"https://www.nps.gov/olym/index.htm"},
            {img: <img src={require("./Images/Shenandoah.jpg")} alt="Shenandoah"/>, name: "Shenandoah", url:"https://www.nps.gov/shen/index.htm"},
            {img: <img src={require("./Images/Zion.jpg")} alt="Zion"/>, name: "Zion", url:"https://www.nps.gov/zion/index.htm"}

            ]

                return <div className="park-image-div">
                   
                    <a target="_blank" rel="noopener noreferrer" href={parkImages[this.state.currentImage].url} alt="link to national park">{parkImages[this.state.currentImage].img}</a>
                    <p className="park-image-name">{parkImages[this.state.currentImage].name}</p>
                    </div>
        }

    render(){
        return(
            
            <div>
                <h1 className="home-page-heading">National Park Trip Planner</h1>
                <p className="home-page-app-description">Click on one of the featured parks to go to the National Park Service Website and learn more about it, or go to the Parks tab to search by state or territory. Add a park to your collection to take notes on it while planning a trip.</p>
                <h1 className="home-page-header">Featured Parks</h1>
                {this.renderImages()}
            </div>
        )
    }
}


