$("#main").append(name);
var name = "suhyun and hannah";
var first = "hi";
var age = 32;
name = name.replace("and", "says");

console.log(name);

// what is %data%?
// what is $("header")
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);
