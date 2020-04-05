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

    switchToEdit=(the_note)=>{
        this.props.updateNoteForm({
            note: the_note
        })

        this.setState({
            updatedNotes: the_note.entry
        })
    }


    returnTheNotes=()=>{

        return this.props.currentNotes.map(note=>{
            return  <React.Fragment>
                <li>{note.entry}</li> 
                <div className="notes-display-container">
                <p className="delete-note" onClick={()=>this.props.deleteANote(note.id)}>Delete</p>
                <p onClick={()=>this.switchToEdit(note)} className="edit-note">Edit</p>
                </div>
                </React.Fragment>  
        })
  
    }


    render(){
        return(
            <div>
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
            <p className="return-to-park-list" onClick={this.props.returnToParks}>Return to List of Parks</p>
            <p className="delete-from-park-collection" onClick={()=>this.props.deleteFromCollection(this.props.parkClickedOn)}>Delete From Your Park List</p>
            <br></br>
        <h2>Notes</h2>
            {this.props.currentNotes.length>0 ? 

    <ul>{this.returnTheNotes()}</ul>
    :
    <div>
    <p>Add notes by entering them in the box below and hitting submit when you are done.</p>
    <p>To edit a note, click on the edit button and hit submit.</p>
    </div>
            }
            
        {this.props.updateNote ? 
                <form onSubmit={this.submitUpdatedNotesForm}>
                <textarea id="comment-box" type="text" wrap="hard" name="updatedNotes" value={this.state.updatedNotes} placeholder={this.props.theNoteToEdit} onChange={this.updateTheNotes}/>
                <br></br>
                <input className="submit-buttons" type="submit" value="submit"/>
                </form>
                :
                <form onSubmit={this.submitNotesForm}>
                <br></br>
                <textarea id="comment-box" type="text" wrap="hard" name="notes" value={this.state.notes} placeholder="Enter a new note here" onChange={this.changeTheNotes}/>
                <br></br>
                <input className="submit-buttons" type="submit" value="submit"/>
            </form>
                }            
            </div>
        )
    }
}