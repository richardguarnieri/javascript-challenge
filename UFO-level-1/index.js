let sightings = data;

let input = d3.select('#date');
let button = d3.select('button')
let table = d3.select('tbody');

function eventHandler() {
    table.html("");
    d3.event.preventDefault();
    let date = d3.event.target.value;
    let filteredArray = sightings.filter(
        entry => entry.datetime === date
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

input.on('change', eventHandler);
// button.on("click", eventHandler);