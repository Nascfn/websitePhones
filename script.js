document.getElementById("phoneButton").onclick = function()
{
    alert("Your vote has been registered!");
}
document.getElementById("phoneButton2").onclick = function()
{
    alert("Your vote has been registered!");
}

let name;
document.getElementById("nameButton").onclick = function()
{
    name = document.getElementById("placeholder").value
    alert(`Hello ${name}`);
}