var name = "Suhyun Kim";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Android developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["Java", "C"];
$("#main").append(skills);
console.log(skills.length);
