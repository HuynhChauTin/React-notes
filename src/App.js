import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState('');
  
  const [darkMode, setDarkMode] = useState(false);

///// save local memory
  useEffect (() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
      );
      if(savedNotes){
        setNotes(savedNotes);
      }
    }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
    );
  }, [notes]);
  
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

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);

  };
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggeleDrakMode ={setDarkMode} />
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note)=>
              note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}      
        />
      </div>
    </div>
 
  ); 
};
export default App; 