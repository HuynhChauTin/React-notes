import { MdDeleteForever } from 'react-icons/md';
const Note = ({ id, text, date, handleDeleteNote }) =>{
    return(
        <div className="note">  
            <span>{text} </span>
            <div className="note-footer">
                <smal>{date}</smal>
                <MdDeleteForever 

                    onClick={() => handleDeleteNote(id)} 
                    className = 'delete-icon' 
                    size='1.3em'
                    
                />
            </div>
        </div>
    );
};
export default Note;
