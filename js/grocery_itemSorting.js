//Grocery list library obj
var GroceryList;

//all category in one array
var categories = new Array();

//all added category to be printed
var showList = new Array();

//promises
var category_promise = [
    true, true, true, true, false
];

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
        return this;
    }
    this.debug_check_arrayEmpty = function(){
        debug_check_arrayEmpty();
        return this;
    }
}

//Define

function gl_clearTable(){
    var node = document.getElementById("grocery_list");	
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function gl_categoryList_group(){
    categories = new Array();
    categories.push(dairy_list);
//    console.log(JSON.stringify(dairy_list));
    categories.push(meat_list);
//    console.log(JSON.stringify(meat_list));
    categories.push(fruit_veg_list);
//    console.log(JSON.stringify(fruit_veg_list));
    categories.push(other_list);
//    console.log(JSON.stringify(other_list));
    categories.push(added_list);
//    console.log(JSON.stringify(added_list));
}

function gl_addToShowList(){
    showList = new Array();
//    console.log(JSON.stringify(showList));
    for(var i = 0; i < category_promise.length; i++){
        if(category_promise[i]){
            showList.push(categories[i]);
        }
    }
}

function removeItem(id){
    var check = document.getElementById(id).checked;
    var item = id.split("_")[0];
    if(check){
        for(i = 0; i < showList.length; i++){
            if(showList[i].name == item){
                
            }
        }
    } else {
        
    }

}

function gl_listItems(){
//    console.log("listItem called");
    var node = document.getElementById("grocery_list");
//    console.log(JSON.stringify(showList));
    
    for (var i = 0; i < showList.length; i++) {
        for (var j = 0; j < showList[i].length; j++) {
            var id;
            var inputObj = document.createElement("input");
            inputObj.setAttribute("type", "checkbox");
            inputObj.setAttribute("id", "" + showList[i][j].name + "_check");
            inputObj.addEventListener("click", function(e) {removeItem(this.id);}, false);

            var row = document.createElement("tr");
            row.setAttribute("id", showList[i][j].name);

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
    GroceryList.gl_categoryList_group().gl_addToShowList().gl_clearTable().gl_listItems();
}

function category_select(id){
    var promise;
    switch(id){
        case "dairy_toggle":
            category_promise[0] = !category_promise[0];
            promise = category_promise[0];
            break;
        case "meat_toggle":
            category_promise[1] = !category_promise[1];
            promise = category_promise[1];
            break;
        case "fruits_vege_toggle":
            category_promise[2] = !category_promise[2];
            promise = category_promise[2];
            break;
        case "assorted_items_toggle":
            category_promise[3] = !category_promise[3];
            promise = category_promise[3];
            break;
        case "added_items_toggle":
            category_promise[4] = !category_promise[4];
            promise = category_promise[4];
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

function validate_input() {
	var name = document.getElementById("item_name").value;
	var qty = document.getElementById("item_quantity").value;
	var message = "";
	
	// item names allow only letters and spaces
	var patt1 = /[^a-zA-Z ]+/;
	// item quantities allow only numbers, letters, and spaces
	var patt2 = /[^0-9a-zA-Z ]+/;
	
	document.getElementById("errorMessage").innerHTML = "";
	
	if (name == "" || patt1.test(name)) {
		message = "Please enter an item name with only letters and spaces.<br>";
	}
	
	if (parseInt(qty) <= 0) {
		message += "Please use a positive, non-zero quantity.";
	} else if (patt2.test(qty)) {
		message += "Please enter an item quantity with only numbers, letters, and spaces.";
	}
	
	if (message == "") {
		return true;
	} else {
		document.getElementById("errorMessage").innerHTML = message;
		return false;
	}
}

// toggle table containing user-added items
function toggleAdded() {
	if (user_added_promise) {
		document.getElementById("user_added_items").style.display = "none";
		user_added_promise = false;
	} else {
		document.getElementById("user_added_items").style.display = "";
		user_added_promise = true;
	}
	
}

function loadTable(){
//    console.log("firstLoad called");
    setTimeout(
        function() {
            init_listToPrint();
        },
        3000
    );
}

onload = init_groceryListLibrary();