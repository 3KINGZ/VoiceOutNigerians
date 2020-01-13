//render element from sebnator object to browser
function renderElements() {
    senators.forEach(function (senator) {
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
renderElements();

//search function to filter name and state from senator object
function filterSenators(searchString) {
    let fSenator = senators.filter(function (senator) {
        let nameSearch = senator.name.toLowerCase().includes(searchString.toLowerCase());
        let stateSearch = senator.state.toLowerCase().includes(searchString.toLowerCase());
        return nameSearch || stateSearch;
    })
    if (fSenator) {
        fSenator.forEach(function (filter) {
            let container = document.createElement("div");
            container.innerHTML = `<p><span class="bold">Name:</span>${filter.name}<br>
        <span class="bold">Phone:</span>${filter.phone}<br>
        <span class = "bold" >Email: </span>${filter.email}<br>
        <span class = "bold" >State: </span>${filter.state}<br>
        <span class = "bold" >District: </span>${filter.district}<br>
        <span class = "bold" >Party: </span>${filter.party}<br>
        <hr>
        </p >`
            document.querySelector('#senators').appendChild(container);
        })
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