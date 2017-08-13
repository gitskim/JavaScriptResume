var name = "Suhyun Kim";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Android developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["Java", "C"];

var education = ["name", "year"];
education["name"] = "Rutgers University";
education["year"] = "2010-2014";

$("#main").append(skills);
$("#main").append(education);

console.log(skills.length);

function displayWork() {
 for (job in work.jobs) {

 }
}

displayWork();
