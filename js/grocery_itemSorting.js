//Grocery list library obj
var GroceryList;
//all added category to be printed
var showList = new Array;
//promises
var catetory_promise = [
    true, true, true, true, true
];
//all category in one array
var categories;

function init_groceryListLibrary(){
    console.log("Init: GroceryList Library");
    GroceryList = new GroceryList_obj();
}

//Object

var GroceryList_obj = function(){
    this.gl_categoryList_group = function (){
        gl_categoryList_group();
        return this;
    }
    this.gl_addToShowList = function (){
        gl_addToShowList();
        return this;
    }
    this.gl_listItems = function (){
        gl_listItems();
        return this;
    }
    this.gl_clearTable = function (){
        gl_clearTable();
    }
}

//Define

function gl_clearTable(){
    var node = document.getElementById("grocery_list");			
    while (node.firstChild) {
        node.removeChild(node.childNodes[0]); 
    }
}

function gl_categoryList_group(){
    categories = new Array;
    categories.push(dairy_list);
    categories.push(meat_list);
    categories.push(fruit_veg_list);
    categories.push(other_list);
    categories.push(added_list);
}

function gl_addToShowList(){
    showList = new Array;
    for(var i = 0; i < catetory_promise.length; i++){
        if(catetory_promise[i]){
            showList.push(categories[i]);
        }
    }
}

function gl_listItems(){
//    console.log("listItem called");
    for (var i = 0; i < showList.length; i++) {
        for (var j = 0; j < showList[i].length; j++) {
            var inputObj = document.createElement("input");
            inputObj.setAttribute("type", "checkbox");

            var row = document.createElement("tr");

            var checkBox = document.createElement("td");
            checkBox.appendChild(inputObj);

            var name = document.createElement("td");
            name.appendChild(document.createTextNode(showList[i][j].name));

            var amount = document.createElement("td");
            amount.appendChild(document.createTextNode(showList[i][j].amount));

            var unit = document.createElement("td");
            unit.appendChild(document.createTextNode(showList[i][j].unit));

            row.appendChild(checkBox);
            row.appendChild(name);
            row.appendChild(amount);
            row.appendChild(unit);

            document.getElementById("grocery_list").appendChild(row);
        }
    }
}

//Chainning

function init_listToPrint(){
    GroceryList.gl_categoryList_group().gl_addToShowList().gl_listItems();
}

function category_select(id){
    var promise;
    switch(id){
        case "dairy_toggle":
            catetory_promise[0] = !catetory_promise[0];
            promise = catetory_promise[0];
            break;
        case "meat_toggle":
            catetory_promise[1] = !catetory_promise[1];
            promise = catetory_promise[1];
            break;
        case "fruits_vege_toggle":
            catetory_promise[2] = !catetory_promise[2];
            promise = catetory_promise[2];
            break;
        case "assorted_items_toggle":
            catetory_promise[3] = !catetory_promise[3];
            promise = catetory_promise[3];
            break;
        case "added_items_toggle":
            catetory_promise[4] = !catetory_promise[4];
            promise = catetory_promise[4];
            break;
    }
    if(promise){
        document.getElementById(id).classList.add("selected_tab");
    } else {
        document.getElementById(id).classList.remove("selected_tab");
    }
    GroceryList.gl_clearTable();
    init_listToPrint();
}

function addedItem(){
    var item = document.getElementById("item_name").value;
    var quantity = document.getElementById("item_quantity").value;
    name = item.toLowerCase();
    var message = "";
    var easter;
    if (quantity == 2910) {
        message = "Have you completed this week's sprint?";
        easter = true;
    } else if (name == "carly") {
        message = "MILLION DOLLAR TIP: Save our planet with Zero Food Waste!";
        easter = true;
    } else if (name == "darcy") {
        message = "You shouldn't be coding on weekends. -Darcy Smith, May 2017";
        easter = true;
    } else if (name == "qussay") {
        message = "Full marks for this Easter egg!";
        easter = true;
    } else if (name == "chris") {
        message = "Java is the best coding language!";
        easter = true;
    } else if (name == "pocket pantry" || name == "pocketpantry") {
        message = "Helping you plan meals and reduce waste.";
        easter = true;
    } else if (name == "food waste") {
        message = "What have you thrown away today?";
        easter = true;
    } else {
        if(item != "" && quantity != ""){
            var foo = {name: null, amount: null, unit: null}; 
            foo.name = item;
            foo.amount = quantity;
            foo.unit = "custome";
            added_list.push(foo);
            GroceryList.gl_clearTable();
            init_listToPrint();
        }
    }
    document.getElementById("thought").innerHTML = message;
    if (easter) {
        document.getElementById("easter").style.display = "inline-block";
        document.getElementById("item_name").value = "";
        document.getElementById("item_quantity").value = "";
    } else {
        document.getElementById("easter").style.display = "none";
    }
}

function firstLoad(){
    console.log("firstLoad called");
    init_groceryListLibrary();
    setTimeout(
        function() {
            init_listToPrint();
        },
        3000
    );
}

onload = retrieve_grocerylist("5_14", "6_14"), firstLoad();