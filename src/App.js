import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";


const App = () =>{
  const [ notes, setNotes] = useState([
      {
      id: nanoid(),
      text: "this my first note!",
      date: "16/04/2024"
      },
      {
        id: nanoid(),
        text: "this my second note!",
        date: "16/04/2024"
      },
      {
        id: nanoid(),
        text: "this my third note!",
        date: "16/04/2024"
      },
      {
        id: nanoid(),
        text: "this my new note!",
        date: "16/04/2024"
      },
    ]);

  const addNote = (text) =>{
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  ); 
};
export default App; 