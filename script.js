function fullscreenToggle(){
  if(document.fullscreen==false){
    document.querySelector('body').requestFullscreen();
  }
  else{
    document.exitFullscreen();
}}

function toggleHeader(isTrue){
  if(isTrue){
    document.getElementById('sidebar').style.display='inline';
  }
  else{
    document.getElementById('sidebar').style.display='none';
}}

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
  }
}

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

    case 'clr' :
      clear();
      break;

    case 'ac' :
      display.innerHTML='0';
      break;
      
    case 'dot':
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

    case 'equal':
      let q= display.innerHTML;
      let a= math.evaluate(q);
      display.innerHTML = a;
      break;

    default:
      alert("Button not found or implemented");
      break;
  }
}
