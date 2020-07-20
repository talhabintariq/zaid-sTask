function tree() {
  var a = prompt("Enter Your Age");
  var ageindays = a*365;
  var h1 = document.createElement("h1");
  var answer = document.createTextNode("Your Age In Days Is" +ageindays);
  h1.setAttribute("id","ageindays")  ; 
  h1.appendChild("answer");
  document.getElementById("zaid").appendChild(h1);
  
}

function reset() {

  document.getElementById("zaid").remove();

}