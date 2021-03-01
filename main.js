menu_list_array = ["Plain Cheese Pizza",
                   "Pepperoni Pizza",
                   "Domino's Burger Pizza That I Love But Isn't Available Where I Live :(",
                   "Pizza In a Cup(It is what it sounds like)",
                   "Seafood Special Pizza",
                   "MEGA ULTRA SUPER MEATY PIZZA",
                   "Vegetarian Pizza(If you order this I feel bad for you)",
                   "The Vegan Pizza(Its worse than the vegetarian pizza)",
                   "THE GOLD LEAF PLATED PIZZA(If you buy this your wallet willl be lighter x10000000)"];

function getmenu(){
    var htmldata;
    htmldata="<ol class= 'menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;   
}

function add_item(){

    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata= "<section class= 'cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+"<div class='card'>"+"<img src='pizzaImg.png'/>" + menu_list_array[i] + "</div>"

    }
    htmldata=htmldata+"</section>"
    document.getElementById("suggestions").innerHTML = htmldata;
}