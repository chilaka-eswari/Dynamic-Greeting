const btn=document.querySelector('button');
const spanelem=document.getElementById('updatecontent');
function nameupdate(){
    const name=prompt("enter your name:");
    uppercase_name=name.toUpperCase()
    spanelem.textContent=uppercase_name;
   spanelem.style.color="red";
  
}