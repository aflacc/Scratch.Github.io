fetch("https://cors-anywhere.herokuapp.com/https://scratch.mit.edu/users/The_Imagineer_/followers").then(x=>x.text()).then(text => { const index = text.indexOf("Followers ("); if(index > 0) console.log(Number(text.substring(index+11, index+20).replace(/\D+/g, ""))); });
document.getElementById("followers").textContent = followers;

