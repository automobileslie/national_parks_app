import React from 'react';
import ParksContainer from './ParksContainer';

export default class DisplayParksByState extends React.Component{




    render(){

        return(
<div>

    {this.props.theLocationFilter.length===0 ?
        <div className="park-list-page">
    <h1>Explore the National Parks and Start Planning Your Next Trip</h1>
    <br></br>
    <div className="state-list-container">
    <div className="state-list-div">
   <p onClick={()=>this.props.showStateList("al", "Alabama")} >Alabama</p>
   <p onClick={()=>this.props.showStateList("ak", "Alaska")} >Alaska</p>
   <p onClick={()=>this.props.showStateList("as", "American Samoa")} >American Samoa</p>
   <p onClick={()=>this.props.showStateList("az", "Arizona")} >Arizona</p>
   <p onClick={()=>this.props.showStateList("ar", "Arkansas")} >Arkansas</p >
   <p onClick={()=>this.props.showStateList("ca", "California")} >California</p>
   <p onClick={()=>this.props.showStateList("co", "Colorado")} >Colorado</p>
   <p onClick={()=>this.props.showStateList("ct", "Connecticut")} >Connecticut</p>
   <p onClick={()=>this.props.showStateList("de", "Delaware")} >Delaware</p>
   <p onClick={()=>this.props.showStateList("dc", "District of Columbia")} >District of Columbia</p>
   <p onClick={()=>this.props.showStateList("fl", "Florida")} >Florida</p>
   <p onClick={()=>this.props.showStateList("ga", "Georgia")} >Georgia</p>
   <p onClick={()=>this.props.showStateList("gu", "Guam")} >Guam</p>
   <p onClick={()=>this.props.showStateList("hi", "Hawaii")} >Hawaii</p>
   </div>
   <div className="state-list-div">
   <p onClick={()=>this.props.showStateList("id", "Idaho")} >Idaho</p>
   <p onClick={()=>this.props.showStateList("il", "Illinois")} >Illinois</p>
   <p onClick={()=>this.props.showStateList("in", "Indiana")} >Indiana</p>
   <p onClick={()=>this.props.showStateList("ia", "Iowa")} >Iowa</p>
   <p onClick={()=>this.props.showStateList("ks", "Kansas")} >Kansas</p>
   <p onClick={()=>this.props.showStateList("ky", "Kentucky")} >Kentucky</p>
   <p onClick={()=>this.props.showStateList("la", "Louisiana")} >Louisiana</p>
   <p onClick={()=>this.props.showStateList("me", "Maine")} >Maine</p>
   <p onClick={()=>this.props.showStateList("md", "Maryland")} >Maryland</p>
   <p onClick={()=>this.props.showStateList("ma", "Massachusetts")} >Massachusetts</p>
   <p onClick={()=>this.props.showStateList("mi", "Michigan")} >Michigan</p>
   <p onClick={()=>this.props.showStateList("mn", "Minnesota")} >Minnesota</p>
   <p onClick={()=>this.props.showStateList("ms", "Mississippi")} >Mississippi</p>
   <p onClick={()=>this.props.showStateList("mo", "Missouri")} >Missouri</p>
   </div>
   <div className="state-list-div">
   <p onClick={()=>this.props.showStateList("mt", "Montana")} >Montana</p>
   <p onClick={()=>this.props.showStateList("ne", "Nebraska")} >Nebraska</p>
   <p onClick={()=>this.props.showStateList("nv", "Nevada")} >Nevada</p>
   <p onClick={()=>this.props.showStateList("nh", "New Hampshire")} >New Hampshire</p>
   <p onClick={()=>this.props.showStateList("nj", "New Jersey")} >New Jersey</p>
   <p onClick={()=>this.props.showStateList("nm", "New Mexico")} >New Mexico</p>
   <p onClick={()=>this.props.showStateList("ny", "New York")} >New York</p>
   <p onClick={()=>this.props.showStateList("nc", "North Carolina")} >North Carolina</p>
   <p onClick={()=>this.props.showStateList("nd", "North Dakota")} >North Dakota</p>
   <p onClick={()=>this.props.showStateList("mp", "Northern Mariana Islands")} >Northern Mariana Islands</p>
   <p onClick={()=>this.props.showStateList("oh", "Ohio")} >Ohio</p>
   <p onClick={()=>this.props.showStateList("ok", "Oklahoma")} >Oklahoma</p>
   <p onClick={()=>this.props.showStateList("or", "Oregon")} >Oregon</p>
   <p onClick={()=>this.props.showStateList("pa", "Pennsylvania")} >Pennsylvania</p>
   </div>
   <div className="state-list-div">
   <p onClick={()=>this.props.showStateList("pr", "Puerto Rico")} >Puerto Rico</p>
   <p onClick={()=>this.props.showStateList("ri", "Rhode Island")} >Rhode Island</p>
   <p onClick={()=>this.props.showStateList("sc", "South Carolina")} >South Carolina</p>
   <p onClick={()=>this.props.showStateList("sd", "South Dakota")} >South Dakota</p>
   <p onClick={()=>this.props.showStateList("tn", "Tennessee")} >Tennessee</p>
   <p onClick={()=>this.props.showStateList("tx", "Texas")} >Texas</p>
   <p onClick={()=>this.props.showStateList("ut", "Utah")} >Utah</p>
   <p onClick={()=>this.props.showStateList("vt", "Vermont")} >Vermont</p>
   <p onClick={()=>this.props.showStateList("vi", "Virgin Islands")} >Virgin Islands</p>
   <p onClick={()=>this.props.showStateList("va", "Virginia")} >Virginia</p>
   <p onClick={()=>this.props.showStateList("wa", "Washington")} >Washington</p>
   <p onClick={()=>this.props.showStateList("wv", "West Viriginia")} >West Viriginia</p>
   <p onClick={()=>this.props.showStateList("wi", "Wisconsin")} >Wisconsin</p>
   <p onClick={()=>this.props.showStateList("wy", "Wyoming")} >Wyoming</p>
   </div>
  </div>
  </div>

   :

   <ParksContainer 
   currentState={this.props.currentState}
   addToParkCollection={this.props.addToParkCollection}
   theParks={this.props.theParks} 
   pickAPark={this.props.pickAPark} 
   isAParkExpanded={this.props.isAParkExpanded} 
   returnToParks={this.props.returnToParks}
   // returnFromSearchToList={this.returnFromSearchToList}
//    filterTheParksByLocation={this.props.filterTheParksByLocation}
   // filterBySearchTerm={this.filterBySearchTerm}
   filterAll={this.props.filterAll}
   cannotAddPark={this.props.cannotAddPark}
   numberForParksDisplay={this.props.numberForParksDisplay}
   parkCollection={this.props.parkCollection}
   // searchTerm={this.state.searchTerm}
   theLocationFilter={this.props.theLocationFilter}
   loggedIn={this.props.loggedIn}
   loadingMessage={this.props.loadingMessage}
   isLoading={this.props.isLoading}
   parks={this.props.parks}
   returnToFilteredParks={this.props.returnToFilteredParks}/>

    }

 </div>
        )
    }
 }
