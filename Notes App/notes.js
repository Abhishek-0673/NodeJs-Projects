
const   fs = require('fs');

const addNote = (title,body)=>{
console.log("Adding Note to the ",title,body);
let notes = fetchNotes();
let note = {
        title,
        body
    };
// try{
//     var noteString = fs.readFileSync('notes-data.json');
//     notes = JSON.parse(noteString);
// }catch (e) {
//     console.log("notes-data file was successfully created");
// }
const duplicate = notes.filter((note)=>note.title === title);
if(duplicate.length === 0){
    notes.push(note);
    saveNotes(notes);
    return notes;
    // fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
else {
    console.log("Sorry! Entry with the title \"",title,"\"already does exists");
}
};

// const getAll=()=>{
//     try{
//         const msg = JSON.parse(fs.readFileSync('notes-data.json'));
//         console.log(msg);
//     }catch (e) {
//         console.log("Sorry! No data exists..");
//     }
//
// };
const getNote = (title)=>{
 console.log("Getting notes with the title ",title,".....");
 const notes = fetchNotes();
 for(let i=0;i<notes.length;i++){
     if(notes[i].title === title){
         console.log("_________________________________________");
         console.log(`Title: ${title}`);
         console.log(`Description: ${notes[i].body}`);
         console.log("_________________________________________");
         break;
     }
     else
     {
         console.log("_________________________________________");
         console.log("Sorry! No match found..");
         console.log("_________________________________________");
     }
 }
};


//Generalized function for read notes
const fetchNotes = ()=>{
    try{
        const noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch (e) {
        return [];
    }
};

//Generalized function for saving notes
const saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
const removeNotes= (title)=> {
const notes = fetchNotes();
const size = notes.length;
const filteredNotes = notes.filter((note) => note.title!==title);
const newSize = filteredNotes.length;
if(newSize!==size){
    saveNotes(filteredNotes);
    console.log("Operation completed..!");
}
else {
    console.log("No match found!");
}
};

module.exports = {
    // addNote: addNote
    addNote,
    fetchNotes,
    getNote,
    removeNotes

};
