import React from 'react';


export default class ExpandParksInParkCollection extends React.Component{

    state={
        notes: "",
        updatedNotes: ""
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
        this.setState({
            notes: ""
        })
    }

    updateTheNotes=(event)=>{

        this.setState({
            updatedNotes: event.target.value
        })
    }

    submitUpdatedNotesForm=(event)=>{
        event.preventDefault();
        this.props.editNote({
            entry: this.state.updatedNotes
        })

        this.setState({
            updatedNotes: ""
        })
       
    }

    parksWithTheCorrectAccents=()=>{

        let thisParkName = this.props.parkClickedOn.full_name;
         
        if (thisParkName.includes("Haleakal&#257")) {
           thisParkName="Haleakalā National Park"}

       else if (thisParkName.includes("&#241;upiat")){
           thisParkName="Iñupiat Heritage Center"
       }
       else if (thisParkName.includes("Honok&#333;hau")){
           thisParkName="Kaloko-Honokōhau National Historical Park"
       }
       else if (thisParkName.includes("&#333")){
           thisParkName="Pu`uhonua O Hōnaunau National Historical Park"
       }
       else if (thisParkName.includes("&#257")){
           thisParkName="Pu`ukoholā Heiau National Historical Site"
       }
       else {return thisParkName}

       return thisParkName
    
    }


    returnTheNotes=()=>{
        return this.props.currentNotes.map(note=>{
            return  <div>
                <p>{note.entry}</p> 
                <p className="delete-note" onClick={()=>this.props.deleteANote(note.id)}>Delete</p>
                <p onClick={()=>this.props.updateNoteForm(note)} className="edit-note">Edit</p>
            </div>   
        })
    }

    


    render(){
        return(
            <React.Fragment>
            <h2>{this.parksWithTheCorrectAccents()}</h2>
            <p>{this.props.parkClickedOn.description}</p>
            <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.parkClickedOn.url}> National Park Service Website </a>
            <br></br>

            {this.props.parkClickedOn.directions_url.length > 0 ?
            <a className="website-link" target="_blank" rel="noopener noreferrer" href={this.props.parkClickedOn.directions_url}>Directions</a>
            : 
            <div></div>
            }
            <br></br>
            <br></br>
            <button className="button" onClick={this.props.returnToParks}>Return to List of Parks</button>
            <button className="button" onClick={()=>this.props.deleteFromCollection(this.props.parkClickedOn)}>Delete From Your Park List</button>
            <br></br>
        <h2 className="notes-heading">Notes</h2>
        <ul>{this.returnTheNotes()}</ul>
        <br></br>
        {this.props.updateNote ? 
                <form onSubmit={this.submitUpdatedNotesForm}>
                <textarea id="comment-box" type="text" wrap="hard" name="updatedNotes" value={this.state.updatedNotes} placeholder={this.props.theNoteToEdit} onChange={this.updateTheNotes}/>
                <input type="submit" value="submit"/>
                </form>
                :
                <form onSubmit={this.submitNotesForm}>
                <br></br>
                <textarea id="comment-box" type="text" wrap="hard" name="notes" value={this.state.notes} placeholder="Enter a new note here" onChange={this.changeTheNotes}/>
                <br></br>
                <input type="submit" value="submit"/>
            </form>
                }            
            </React.Fragment>
        )
    }
}