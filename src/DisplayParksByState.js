import React from 'react';

export default class DisplayParksByState extends React.Component{







    render(){

        return(
    <div className="show-state-list">
        <br>
        </br>
        <br></br>
    <h1>Explore the National Parks and Start Planning Your Next Trip</h1>
    <br></br>
   <p onClick={()=>this.props.showStateList("al")} >Alabama</p>
   <p onClick={()=>this.props.showStateList("ak")} >Alaska</p>
   <p onClick={()=>this.props.showStateList("as")} >American Samoa</p>
   <p onClick={()=>this.props.showStateList("az")} >Arizona</p>
   <p onClick={()=>this.props.showStateList("ar")} >Arkansas</p >
   <p onClick={()=>this.props.showStateList("ca")} >California</p>
   <p onClick={()=>this.props.showStateList("co")} >Colorado</p>
   <p onClick={()=>this.props.showStateList("ct")} >Connecticut</p>
   <p onClick={()=>this.props.showStateList("de")} >Delaware</p>
   <p onClick={()=>this.props.showStateList("dc")} >District of Columbia</p>
   <p onClick={()=>this.props.showStateList("fl")} >Florida</p>
   <p onClick={()=>this.props.showStateList("ga")} >Georgia</p>
   <p onClick={()=>this.props.showStateList("gu")} >Guam</p>
   <p onClick={()=>this.props.showStateList("hi")} >Hawaii</p>
   <p onClick={()=>this.props.showStateList("id")} >Idaho</p>
   <p onClick={()=>this.props.showStateList("il")} >Illinois</p>
   <p onClick={()=>this.props.showStateList("in")} >Indiana</p>
   <p onClick={()=>this.props.showStateList("ia")} >Iowa</p>
   <p onClick={()=>this.props.showStateList("ks")} >Kansas</p>
   <p onClick={()=>this.props.showStateList("ky")} >Kentucky</p>
   <p onClick={()=>this.props.showStateList("la")} >Louisiana</p>
   <p onClick={()=>this.props.showStateList("me")} >Maine</p>
   <p onClick={()=>this.props.showStateList("md")} >Maryland</p>
   <p onClick={()=>this.props.showStateList("ma")} >Massachusetts</p>
   <p onClick={()=>this.props.showStateList("mi")} >Michigan</p>
   <p onClick={()=>this.props.showStateList("mn")} >Minnesota</p>
   <p onClick={()=>this.props.showStateList("ms")} >Mississippi</p>
   <p onClick={()=>this.props.showStateList("mo")} >Missouri</p>
   <p onClick={()=>this.props.showStateList("mt")} >Montana</p>
   <p onClick={()=>this.props.showStateList("ne")} >Nebraska</p>
   <p onClick={()=>this.props.showStateList("nv")} >Nevada</p>
   <p onClick={()=>this.props.showStateList("nh")} >New Hampshire</p>
   <p onClick={()=>this.props.showStateList("nj")} >New Jersey</p>
   <p onClick={()=>this.props.showStateList("nm")} >New Mexico</p>
   <p onClick={()=>this.props.showStateList("ny")} >New York</p>
   <p onClick={()=>this.props.showStateList("nc")} >North Carolina</p>
   <p onClick={()=>this.props.showStateList("nd")} >North Dakota</p>
   <p onClick={()=>this.props.showStateList("mp")} >Northern Mariana Islands</p>
   <p onClick={()=>this.props.showStateList("oh")} >Ohio</p>
   <p onClick={()=>this.props.showStateList("ok")} >Oklahoma</p>
   <p onClick={()=>this.props.showStateList("or")} >Oregon</p>
   <p onClick={()=>this.props.showStateList("pa")} >Pennsylvania</p>
   <p onClick={()=>this.props.showStateList("pr")} >Puerto Rico</p>
   <p onClick={()=>this.props.showStateList("ri")} >Rhode Island</p>
   <p onClick={()=>this.props.showStateList("sc")} >South Carolina</p>
   <p onClick={()=>this.props.showStateList("sd")} >South Dakota</p>
   <p onClick={()=>this.props.showStateList("tn")} >Tennessee</p>
   <p onClick={()=>this.props.showStateList("tx")} >Texas</p>
   <p onClick={()=>this.props.showStateList("ut")} >Utah</p>
   <p onClick={()=>this.props.showStateList("vt")} >Vermont</p>
   <p onClick={()=>this.props.showStateList("vi")} >Virgin Islands</p>
   <p onClick={()=>this.props.showStateList("va")} >Virginia</p>
   <p onClick={()=>this.props.showStateList("wa")} >Washington</p>
   <p onClick={()=>this.props.showStateList("wv")} >West Viriginia</p>
   <p onClick={()=>this.props.showStateList("wi")} >Wisconsin</p>
   <p onClick={()=>this.props.showStateList("wy")} >Wyoming</p>
   </div>
        )
    }

}