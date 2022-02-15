import TableCSV from "./Table.js";


const tableRoot = document.querySelector('#csvRoot');

const csvFileInput = document.querySelector('#csvFileInput');
const tableCsv =new TableCSV(tableRoot);

csvFileInput.addEventListener('change',e =>{
   
   Papa.parse(csvFileInput.files[0],{
    delimiter: "," ,
    skipEmptyLines: true,
    complete: results=>{
       tableCsv.update(results.data.slice(1), results.data[0]);
    }
   });
   
});

// tableCsv.update([
//     ["h", "p",1],
//     ["h", "p",1],
//     ["h", "p",1]
// ],["Name","Position","Age"])

// tableCsv.setHeader(["Name","Position","Age"])

// tableCsv.setBody([
//     ["h", "p",1],
//     ["h", "p",1],
//     ["h", "p",1]
// ])

