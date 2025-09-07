function fullscreenToggle(){
  if(document.fullscreen==false)
  {document.querySelector('body').requestFullscreen();}
  else{document.exitFullscreen();}
}

function autoFullscreenToggle(){
  document.body.requestFullscreen();
  document.getElementById("FSalert").style.display="none";
  document.removeEventListener('click', autoFullscreenToggle);
}
function updateLocalSettings(buttonText){
  if(buttonText=="Off"){
    localStorage.setItem("autoFullscreen", "true");
    document.getElementById("autoFullscreenButton").style.color ="green";
    document.getElementById("autoFullscreenButton").innerText="On";
  }
  else{
    localStorage.setItem("autoFullscreen", "false")
    document.getElementById("autoFullscreenButton").style.color ="red";
    document.getElementById("autoFullscreenButton").innerText="Off";
  }
}

function toggleSidebar(isTrue){
  if(isTrue)
  {document.getElementById('sidebar').style.display='inline';}
  else{document.getElementById('sidebar').style.display='none';}
}

function clear(){
  const display=document.getElementById('display');
  str = display.innerHTML;
  display.innerHTML = str.slice(0,-1,);
  if (display.innerHTML == ''){
    display.innerHTML ='0';
}}

function clrOnZero(){
  const display=document.getElementById('display');
  if(display.innerHTML=='0'){
    display.innerHTML='';
}}

function clrOnRepeat(patternChar){
  let str=document.getElementById('display').innerHTML;
  let lastChar = str[str.length-1];
  if (lastChar == patternChar){
    clear();
}}

function clrOnOperator(){
  let str=document.getElementById('display').innerHTML;
  let lastChar = str[str.length-1];
  if (lastChar == '+' || lastChar == '-'|| lastChar=='.' ||
      lastChar == '*' || lastChar == '/')
  {clear();}
}


// Main function, entry point
function main(input){

  const display=document.getElementById('display');

  switch(input){
    case '1' :
    case '2' :
    case '3' :
    case '4' :
    case '5' :
    case '6' :
    case '7' :
    case '8' :
    case '9' :
    case '0' :
      clrOnZero();
      display.innerHTML+= input;
      break;

    case 'CLR' :
      clear();
      break;

    case 'AC' :
      display.innerHTML='0';
      break;
      
    case '.':
      clrOnOperator('.');
      display.innerHTML+='.';
      break;

    case '/':
    case '*':
    case '-':
    case '+':
      clrOnOperator();
      display.innerHTML+=input;
      break;

    case '=':
      let q= display.innerHTML;
      let a= math.evaluate(q);
      display.innerHTML = a;
      break;

    default:
      alert("Button not found or implemented");
      break;
}}

// Adding Event Listeners here

document.querySelectorAll('.buttons button').
  forEach( (button) => button.
    addEventListener('click', (e) => main(e.target.innerText))
  );


document.getElementById("autoFullscreenButton").
  addEventListener('click', (e)=> updateLocalSettings(e.target.innerText))

// Start Loading Saved setting(s)

let userPref_autoFullscreen = localStorage.getItem("autoFullscreen");

if( userPref_autoFullscreen == "true" ){
  document.getElementById("autoFullscreenButton").style.color ="green";
  document.getElementById("autoFullscreenButton").innerText="On";
  document.getElementById("FSalert").style.display="inline";

  //event listener for autofullscreen, removed automatically after fullscreened
  //to allow exitfullscreen later

  document.addEventListener('click', autoFullscreenToggle);
}
