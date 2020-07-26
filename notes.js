const fs=require('fs');
const chalk = require('chalk');

const readNote=(title)=>{
    const notes=loadNotes();
    let mynote=notes.find(el=>el.title===title);
    if(mynote){console.log(`Note Retrieved\nTitle;${mynote.title}\nBody:${mynote.body}`);}
    else{
        console.log(chalk.red.inverse('Note Not Found'));
    }
}
const addNote=(title,body)=>{
    const notes= loadNotes();
    // const duplicateNotes=notes.filter((elem)=>(title===elem.title));
    const duplicateNote=notes.find( (elem)=>(title===elem.title));
    if(!duplicateNote){
    notes.push({title:title,body:body});
    saveNote(notes);
    console.log('New Note Added')
    }
    else
    {
        console.log('Note Already Taken ');
    }
}
const removeNote=(title)=>{
    const notes=loadNotes();
    const removedNotesArr=notes.filter(el=>(el.title!==title));
    
    if(removedNotesArr.length===notes.length)
    {
        console.log(chalk.red.inverse('Note Note Found '))
    }
    else
    {
        console.log(chalk.bgGreen.blackBright('Note Removed'));
    }
    saveNote(removedNotesArr);
}
const loadNotes=()=>{
    try{
        return JSON.parse(fs.readFileSync('data.json').toString());
    }catch(e){
        return [];
    }
}
const listNotes=()=>{
    const notes=loadNotes();
    notes.forEach(element => {
        console.log(`Note Title :${element.title}\nNote Body:${element.body}\n\n`);
    });
}
const saveNote=(notesarr)=>{
    const str=JSON.stringify(notesarr);
    fs.writeFileSync('data.json',str);
}
module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}