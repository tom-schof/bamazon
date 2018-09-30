var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect((err) =>{
    if (err) throw err;
    displayItems();
    // prompts();
});




const prompts = () => {
    
    inquirer.prompt({
        name: "itemID",
        type: "input",
        message: "Please enter the ID of the item you would like to purchase"
    }).then((answer) => {
        inquirer.prompt({
            name: "itemQuantity",
            type: "input",
            message: "How many would you like to purchase?"
        }).then((answer2) => {
            
        })
    })
}

const displayItems = () => {
    var query = connection.query(
        "SELECT * FROM bamazon.products",
        (err, res) => {

               console.log(`ITEM ID        PRODUCT NAME        DEPARTMENT        PRICE        STOCK`);
            for (var i = 0 ; i < res.length; i++){
               console.log(res[i].item_id.padEnd(15, " ") + res[i].product_name.padEnd(20, " ") + res[i].department_name.padEnd(18, " ") + "$" + res[i].price.toString().padEnd(13, " ")   + res[i].stock_quantity   );
           }
         
        }
    );    
}