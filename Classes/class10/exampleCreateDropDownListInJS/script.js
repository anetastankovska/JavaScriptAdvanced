let dropdownDiv = document.getElementById('dropdown');

let dropdownValues = [{
    id: 1,
    name: 'Page size',
    disabled: true
},{
    id: 1,
    name: 'Metric',
    value: 'metric'
},
{
    id: 2,
    name: 'Imperial',
    value: 'imperial'
}];


function generateDropdown() {
    let select = document.createElement('select');
    for (let dropdown of dropdownValues) {
        let option = document.createElement('option');
        option.value = dropdown.value;
        option.innerText = dropdown.name;
        option.id = dropdown.id;
        option.disabled = dropdown.disabled;
        if (dropdown.disabled) {
            option.selected = true;
        }
        select.appendChild(option);
    }
    dropdownDiv.appendChild(select);
}

generateDropdown();

dropdownDiv.addEventListener('change', function (event) {
    console.log(event.target.value); 
});