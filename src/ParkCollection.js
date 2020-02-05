import React from 'react';



export default class ParkCollection extends React.Component {

    displayingCollection=()=> { 

        let theParks= [...this.props.parks]

        let parkIds= this.props.parkCollection.map(park=> {
            return park.park_id
        })

        let theseParks= parkIds.map(parkId=> {

            return theParks.filter(park=> {
                return park.id === parkId
            })
        })

        let theseParksAlphabetized= theseParks.flat().sort((a, b) => {
            return a.fullName.localeCompare(b.fullName)
        })
          
        return theseParksAlphabetized.map(park=>{
            return <div>
            <p onClick={()=>{this.props.selectAPark(park)}} className="park-name">{park.fullName}</p>
            </div>
        })
    }

    displayPark=()=>{
        return <div>
        <h2>{this.props.parkClickedOn.fullName}</h2>
        <p>{this.props.parkClickedOn.description}</p>
        <a target="_blank" rel="noopener noreferrer" href={this.props.parkClickedOn.url}> National Park Services Website </a>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href={this.props.parkClickedOn.directionsUrl}>Directions</a>
        <br></br>
        <br></br>
        <button className="button" onClick={this.props.returnToParks}>Return to List of Parks</button>
        <button className="button" onClick={()=>this.props.deleteFromCollection(this.props.parkClickedOn)}>Delete From Your Park List</button>
        </div>
        }

    whichParksToRender= () => {
    
        if (this.props.isAParkExpanded) { 
            return this.displayPark()}
        else {              
            return <div>
                <h2>Your Park List</h2>
                {this.displayingCollection()}
                </div>
                    }
        }

    render(){
        return(
            <div>
                {this.props.loggedIn() ? 
               
                <div> {this.whichParksToRender()} </div>
                :
                <h2>Log in to see your park list</h2>
                }
            </div>
        )
        }
}