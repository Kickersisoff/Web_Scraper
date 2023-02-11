const fetch = require("fetch");

async function sendModifiedHTML() {
    // Select the element to be modified
    let element = document.querySelector("#my-element");
  
    // Modify the element's content
    element.innerHTML = "New Content";
  
    // Send the updated HTML to the server
    let response = await fetch("/my-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ html: document.documentElement.outerHTML })
    });
  
    // Handle the response from the server
    let data = await response.json();
    console.log(data);
}

  document.getElementById("nav-global-location-popover-link").click();
setTimeout(()=>{
  document.getElementById("GLUXZipUpdateInput").value="678623";
document.getElementById("GLUXZipUpdate-announce").click();
name();  
},1500);
