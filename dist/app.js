//render element from senator object to browser
function renderElements(sens) {
    sens.forEach(function (senator) {
        let container = document.createElement("div");
        container.innerHTML = `<p><span class="bold">Name:</span>${senator.name}<br>
        <span class="bold">Phone:</span>${senator.phone}<br>
        <span class = "bold" >Email: </span>${senator.email}<br>
        <span class = "bold" >State: </span>${senator.state}<br>
        <span class = "bold" >District: </span>${senator.district}<br>
        <span class = "bold" >Party: </span>${senator.party}<br>
        <hr>
        </p >`
        document.querySelector('#senators').appendChild(container);
    })
}
renderElements(senators);

//search function to filter name and state from senator object
function filterSenators(searchString) {
    let fSenator = senators.filter(function (senator) {
        let nameSearch = senator.name.toLowerCase().includes(searchString.toLowerCase());
        let stateSearch = senator.state.toLowerCase().includes(searchString.toLowerCase());
        return nameSearch || stateSearch;
    })
    if (fSenator) {
        renderElements(fSenator);
    } else {
        renderElements()
    }
}

//event listener to listen for any changes from input field
document.querySelector("#search").addEventListener("input", function (e) {
    e.preventDefault();
    document.querySelector("#senators").innerHTML = ""
    filterSenators(e.target.value)
})