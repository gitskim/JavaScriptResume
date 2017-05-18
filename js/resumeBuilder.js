$("#main").append(name);
var name = "suhyun and hannah";
var first = "hi";
var age = 32;
name = name.replace("and", "says");

console.log(name);

var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName.prepend(name));
