let sightings = data;

let input_1 = d3.select('#date');
let input_2 = d3.select('#state');
let button = d3.select('button')
let table = d3.select('tbody');

function eventHandler() {
    table.html("");
    d3.event.preventDefault();
    let date = input_1.property('value');
    let state = input_2.property('value');
    let filteredArray = sightings.filter(
        entry => ((entry.datetime === date) && (entry.state === state))
    );
    console.log(filteredArray);
    filteredArray.forEach(
        item => {
            let newRow = table.append('tr');
            newRow.append('td').text(item.datetime);
            newRow.append('td').text(item.city);
            newRow.append('td').text(item.state);
            newRow.append('td').text(item.country);
            newRow.append('td').text(item.shape);
            newRow.append('td').text(item.durationMinutes);
            newRow.append('td').text(item.comments);
        }
    );
}

input_1.on('change', eventHandler);
input_2.on('change', eventHandler);
// button.on("click", eventHandler);