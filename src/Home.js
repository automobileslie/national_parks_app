import React from 'react';

 


export default class Home extends React.Component {

    state={
        currentImage:0
    }

    componentDidMount=()=>{


        let settingInterval=()=>{
            if (this.state.currentImage <=7) {
                this.setState({
            currentImage: this.state.currentImage + 1})}
            
            else {
                this.setState({
                    currentImage: this.state.currentImage - 8
                })
            }
        }


        setInterval(settingInterval, 3000)
    }

    renderImages=()=>{

        const parkImages= [
            {img: <img src={require(`./Images/Bryce_Canyon.jpg`)} alt="Bryce Canyon" />, name: "Bryce Canyon", url: "https://www.nps.gov/brca/index.htm"}, 
            {img: <img src={require("./Images/Redwoods.jpg")} alt="Redwoods"/>, name: "Redwoods", url:"https://www.nps.gov/redw/index.htm"},
            {img: <img src={require("./Images/Cape_Cod.jpg")} alt="Cape Cod"/>, name: "Cape Cod", url: "https://www.nps.gov/caco/index.htm"}, 
            {img: <img src={require("./Images/Niobrara.jpg")} alt= "Niobrara"/>, name: "Niobrara", url:"https://www.nps.gov/niob/index.htm"},
            {img: <img src={require("./Images/Dry_Tortugas.jpg")} alt="Dry Tortugas" />, name: "Dry Tortugas", url:"https://www.nps.gov/drto/index.htm"}, 
            {img: <img src={require("./Images/Governors_Island.jpg")} alt="Governors Island" />, name: "Governors Island", url:"https://www.nps.gov/gois/index.htm"}, 
            {img: <img src={require("./Images/Yellowstone.jpg")} alt="Yellowstone"/>, name: "Yellowstone", url:"https://www.nps.gov/yell/index.htm"},
            {img: <img src={require("./Images/Lincoln_Memorial.jpg")} alt="Lincoln Memorial"/>, name: "Lincoln Memorial", url:"https://www.nps.gov/linc/index.htm"}, 
            {img: <img src={require("./Images/Saint_Croix.jpg")} alt="Saint Croix"/>, name: "Saint Croix", url:"https://www.nps.gov/sacn/index.htm"}, 
            ]

                return <div className="park-image-div">
                   
                    <a target="_blank" rel="noopener noreferrer" href={parkImages[this.state.currentImage].url} alt="link to national park">{parkImages[this.state.currentImage].img}</a>
                    <p className="park-image-name">{parkImages[this.state.currentImage].name}</p>
                    </div>
        }

    render(){
        return(
            
            <div>
                <h1 className="home-page-header">Featured Parks</h1>
                {this.renderImages()}
            </div>
        )
    }
}


