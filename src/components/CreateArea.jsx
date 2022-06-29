import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = (props) =>{


    const [ isExpanded, setExpended] = useState(false);

    const [ note, setNote ] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();   //reload disabled
        setNote({
            title: "",
            content: ""
        })

    }

    function expand(){
        setExpended(true)
    }

    return(
        <div >
            <form className="">
                {isExpanded ? <input 
                    onChange={handleChange} 
                    name="title" 
                    placeholder="Title" 
                    value={note.title}
                /> : null}

                <textarea 
                    onClick={expand}
                    onChange={handleChange} 
                    name="content" rows={isExpanded? 3 : 1} 
                    value={note.content} placeholder="Take a note.."> 
                </textarea>
                <Zoom in={isExpanded}>
                    <Fab  onClick={submitNote} size="medium"><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;