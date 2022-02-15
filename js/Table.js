export default class {
    /**
     * 
     * @param {HTMLTableElement} root The Element which will display the table data
     */
    constructor(root){
        this.root= root;
        console.log("I am constructor");

    }

    update(data, headerColumns = []){
        this.clear();
        this.setHeader(headerColumns);
        this.setBody(data);
    }

    clear(){
        this.root.innerHTML = "";
    }

    setHeader (headerColumns){
       this.root.insertAdjacentHTML("afterBegin", `
        <thead>
        <tr>
          ${headerColumns.map(text => `<th>${text}</th>`).join("")}
          </tr>
        </thead>
       `)
    }

    setBody(data){
        const rowsHtml = data.map(row => {
            return `<tr> 
             ${row.map(text =>`<td>${text}</td>`).join("")}
            </tr>`;
        });
        this.root.insertAdjacentHTML("beforeEnd", `
        <tbody>
          ${rowsHtml.join("")}
        </tbody>
       ` )
    }
}