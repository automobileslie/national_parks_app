import React from 'react';


export default class ParkList extends React.Component{


    displayName=()=>{
        return <div >
        <p onClick={()=>this.props.selectAPark(this.props.park)} className="park-name">{this.props.fullName}</p>
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