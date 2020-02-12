import React from 'react';


export default class ExpandParksInParkCollection extends React.Component{

    state={
        notes: ""
    }



    changeTheNotes=(event)=>{
        this.setState({
            notes: event.target.value
        })
    }

    submitNotesForm=(event)=>{
        event.preventDefault();
        this.props.submitNotes({
            notes: this.state.notes
        })
    }

    parksWithTheCorrectAccents=()=>{

        if (this.props.parkClickedOn.length > 0) { 
         
        if (this.props.parkClickedOn.full_name.includes("Haleakal&#257")) {
           this.props.parkClickedOn.full_name="Haleakalā National Park"}

       else if (this.props.parkClickedOn.full_name.includes("&#241;upiat")){
           this.props.parkClickedOn.full_name="Iñupiat Heritage Center"
       }
       else if (this.props.parkClickedOn.full_name.includes("Honok&#333;hau")){
           this.props.parkClickedOn.full_name="Kaloko-Honokōhau National Historical Park"
       }
       else if (this.props.parkClickedOn.full_name.includes("&#333")){
           this.props.parkClickedOn.full_name="Pu`uhonua O Hōnaunau National Historical Park"
       }
       else if (this.props.parkClickedOn.full_name.includes("&#257")){
           this.props.parkClickedOn.full_name="Pu`ukoholā Heiau National Historical Site"
       }
       else {return this.props.parkClickedOn.full_name}

       return this.props.parkClickedOn.full_name
    }

    return
    
    }

    returnTheNotes=()=>{
        let theParkCollection= this.props.parkCollection.filter(park=>{
            return park.park_id===this.props.parkClickedOn.park_id
         })

         let theParkCollectionsNotes= theParkCollection[0].notes

         return theParkCollectionsNotes
    
    }

    render(){
        return(
            <div>
            <h2>{this.parksWithTheCorrectAccents()}</h2>
            <p>{this.props.parkClickedOn.description}</p>
            <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.parkClickedOn.url}> National Park Services Website </a>
            <br></br>
            <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.parkClickedOn.directionsUrl}>Directions</a>
            <br></br>
            <br></br>
            <button className="button" onClick={this.props.returnToParks}>Return to List of Parks</button>
            <button className="button" onClick={()=>this.props.deleteFromCollection(this.props.parkClickedOn)}>Delete From Your Park List</button>
            <br></br>
        <h2>Your Notes on {this.props.parkClickedOn.full_name}</h2>
        <p>{this.returnTheNotes()}</p>
        <br></br>
            <form onSubmit={this.submitNotesForm}>
                <br></br>
                <textarea id="comment-box" type="text" wrap="hard" name="notes" value={this.state.notes} placeholder="enter your notes here" onChange={this.changeTheNotes}/>
                <br></br>
                <input type="submit" value="submit"/>
            </form>
            </div>
        )
    }
}