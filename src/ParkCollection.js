import React from 'react';
import ParksForParkCollection from './ParksForParkCollection';
import ExpandParksInParkCollection from './ExpandParksInParkCollection';



export default class ParkCollection extends React.Component {

    displayingCollection=()=> { 

        let theseParksAlphabetized= this.props.parkCollection.flat().sort((a, b) => {
            return a.full_name.localeCompare(b.full_name)
        })
          
        
            return theseParksAlphabetized.map(park=>{
                return <div>
                    <ParksForParkCollection park={park} selectAPark={this.props.selectAPark}/>
                </div>
            })
    }

    displayPark=()=>{
        return <div>
       <ExpandParksInParkCollection parkClickedOn={this.props.parkClickedOn} 
       deleteFromCollection={this.props.deleteFromCollection}
       returnToParks={this.props.returnToParks}
       submitNotes={this.props.submitNotes}
       parkCollection={this.props.parkCollection}/>
        </div>
        }

    whichParksToRender= () => {
    
        if (this.props.isAParkExpanded) { 
            return this.displayPark()}
        else {              
            return <div>
                <h2>Where You'd Like To Go</h2>
                {this.displayingCollection()}
                </div>
                    }
        }

    render(){
        return(
            <div>
                {this.props.loggedIn()  ? 

                   this.props.parks.length >=497 ? 

                        <div> {this.whichParksToRender()} </div>
    
                        : 
                        <h2> Come back to your park list when the parks are finished loading! </h2>

                        :

                <h2>Log in to see your park list</h2>
                }
            </div>
        )
        }
}