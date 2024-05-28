let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")


// ["lead1", "lead2"] or null
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

// Check if leadsFromLocalStorage is truthy
// If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// Listen for double clicks on the delete button
// When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // Save the myLeads array to localStorage 
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  renderLeads();

  console.log( localStorage.getItem("myLeads") )
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // link with target="_blank" to open in a new tab
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
        `
  }
  ulEl.innerHTML = listItems;
}
