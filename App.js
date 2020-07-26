const chalk=require('chalk');
const fs = require('fs');
const yargs=require('yargs');
const utils=require('./notes.js');
const { argv } = require('process');
let notes=[]
 yargs.command({
     command:'add',
     describe:'Add a new Note',
     builder:{      
         title:{
             describe:'Title Of Note',
             demandOption:true,
             type:'string'
                },
           body:{
             describe:'Note Body',
             demandOption:true,
             type:'string'
            }},
     handler:function(argv){
            console.log(`Note Title;${argv.title} \n Body: ${argv.body}`);
            utils.addNote(argv.title,argv.body);

        }
 });
 yargs.command({
     command:'remove',
     describe:'Removes A Note (ENter Notes Title )',
     handler:function(argv){
         utils.removeNote(argv.title);
     }
      });
yargs.command({
    command:'read',
    describe:'Reads A note',
    handler:(argv)=>{utils.readNote(argv.title)}
});

yargs.command({
    command:'list',
    describe:'Lists All The Notes From Notes Array',
    handler:()=>{utils.listNotes();}
    });

     yargs.parse();

//  console.log(yargs.argv);
