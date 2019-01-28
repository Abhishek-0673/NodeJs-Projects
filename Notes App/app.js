const _ = require('lodash');
const yargs = require('yargs');
const notes = require("./notes");


const command = process.argv[2];
const  args = yargs
    .command(`add`,'Add a new note',{
    title:{
        describe:'Title of Note',
        demand:true,
        alias:'t'
    },
        body:{
            describe:'Body of the Note',
            demand: true,
            alias:'b'
    }
    })
    .command(`list`,'List all Notes')
    .command(`read`,'To Read a Note',{
        title: {
            describe:'Enter the title of the message to be read!',
            demand:true,
            alias:'t'
        }
    })
    .command(`remove`,'To remove a Note',{
        title: {
            describe:'Enter the title of the message to be removed!',
            demand:true,
            alias:'r'
        }
    })
    .help()
    .argv;
if(command === 'add'){
    console.log("Adding into notes.....!");
    const NOTES = notes.addNote(args.title,args.body);
    //Optional
    console.log("New list:  ",NOTES);
}
if(command === 'list'){
    console.log(notes.fetchNotes());
}
if(command === 'read'){
    notes.getNote(args.title);
}
if(command === 'remove'){
    notes.removeNotes(args.title);
}

