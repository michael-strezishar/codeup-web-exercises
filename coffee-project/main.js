"use strict"

function renderCoffee(coffee) {
    // var html = '<div class="coffee row">';
    var html = '<div class="col-6">';
    // html += '<div class="id">' + coffee.id + '</div>';
    html += '<h1 class="name mb-0">' + coffee.name + '</h1>';
    html += '<p class="roast text-justify text-secondary">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    html += '<div class="row">'
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    html += '</div>'
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'all'){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function search(){
    var list = [];
    if (roastSelection.value === 'all'){
        coffees.forEach(function(coffee){
            var coffeename = coffee.name;
            if(coffeename.toLowerCase().includes(searchBar.value.toLowerCase())){
                list.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(list);
    }
    else {
        var list2 = [];
        coffees.forEach(function(coffee){
            if(coffee.roast === roastSelection.value){
                list2.push(coffee);
            }
        });
        list = [];
        list2.forEach(function(coffee){
            var coffeename = coffee.name;
            if(coffeename.toLowerCase().includes(searchBar.value.toLowerCase())){
                list.push(coffee)
            }
        });
        tbody.innerHTML = renderCoffees(list);
    }


}
function addCoffee(e){
    e.preventDefault();
    var newRoast = document.getElementById('roast-add');
    var newName = document.getElementById('name-add');
    var newCoffee = {
        name: newName.value,
        roast: newRoast.value
    };
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.querySelector('#search');
var addButton = document.querySelector('#submit-add');
searchBar.addEventListener("input", search);
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('change', updateCoffees);
searchBar.addEventListener('keyup', search);
addButton.addEventListener('click', addCoffee);




