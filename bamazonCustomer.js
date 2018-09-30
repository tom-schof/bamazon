var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect((err) => {
    if (err) throw err;
    displayItems();

});




const prompts = () => {
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;


        inquirer.prompt({
            name: "itemId",
            type: "input",
            message: "Please enter the ID of the item you would like to purchase"
        }).then((answer) => {
            // console.log(answer.itemId);
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id == answer.itemId) {

                    chosenItem = results[i];
                }
            }
            //   console.log(results);
            // console.log(chosenItem);
            if (typeof chosenItem != "undefined") {
                inquirer.prompt({
                    name: "itemQuantity",
                    type: "input",
                    message: "How many would you like to purchase?"
                }).then((answer2) => {
                    // console.log(typeof parseInt(answer2.itemQuantity));
                    // console.log(typeof chosenItem.stock_quantity);

                   
                     if(isNaN(parseInt(answer2.itemQuantity))){
                        console.log("Enter a real number, guy");
                        process.exit();
                     };
                    
                       
                    


                    if (chosenItem.stock_quantity >= parseInt(answer2.itemQuantity)) {
                        var stock_update = chosenItem.stock_quantity - answer2.itemQuantity;
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [{
                                    stock_quantity: stock_update
                                },
                                {
                                    item_id: chosenItem.item_id
                                }
                            ],
                            function (error) {
                                if (error) throw err;
                                console.log(`Your purchase was successful! Your total cost is $${parseInt(answer2.itemQuantity) * chosenItem.price }.  \n \n `);
                                setTimeout(displayItems, 1800);
                            }
                        );
                    }else{
                        console.log(`Error! Not enough inventory in stock. Your purchase order was unsuccessful. \n \n `);
                        setTimeout(displayItems, 1800);

                    }


                });

            } else {
                console.log("Enter a readl ID, guy");
                process.exit();
            }

        });

    });

}

const displayItems = () => {
    var query = connection.query(
        "SELECT * FROM bamazon.products",
        (err, res) => {

            console.log(`ITEM ID        PRODUCT NAME        DEPARTMENT        PRICE        STOCK`);
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].item_id.padEnd(15, " ") + res[i].product_name.padEnd(20, " ") + res[i].department_name.padEnd(18, " ") + "$" + res[i].price.toString().padEnd(13, " ") + res[i].stock_quantity + "\n ");
            }

        }
    );

    prompts();
}