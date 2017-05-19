function send_ingredients_toList(startDate, endDate){
    Database.db_categorize_Ingredient(startDate, endDate);
}

function connectGlUser(){
    Database.db_connectGlUser();
}

onload = init_dbLibrary(), connectGlUser();
