let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )




// Check if leadsFromLocalStorage is truthy
// If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // link with target="_blank" to open in a new tab
    listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>
        `
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
  });

// Listen for double clicks on the delete button
// When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// SAVE TAB
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})