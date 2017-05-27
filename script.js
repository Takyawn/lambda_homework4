document.body.style.backgroundColor = "red";
document.getElementById("about_me").style.backgroundColor= 'blue';
document.querySelector("body").style.fontFamily= 'sans-serif';
document.getElementById("nickname").innerHTML = "spiritbear";
document.getElementById("favorite").innerHTML = "swiggity swooty";
document.getElementById("hometown").innerHTML = "ladner";

var elem = document.createElement("img");
elem.setAttribute("src", "http://i.imgur.com/qku6K9R.jpg");
elem.setAttribute("height", "200");
elem.setAttribute("width", "350");
elem.setAttribute("alt", "GiantCo Logo");
document.body.appendChild(elem);

document.getElementById('nickname').className = 'listItem';
document.getElementById('favorite').className = 'listItem';
document.getElementById('hometown').className = 'listItem';

document.querySelector('listItem').style.backgroundColor ='red';