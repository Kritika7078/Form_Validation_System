const contain=document.querySelector("form select");

for(let i in countryList){
    let countryName=document.createElement("option");
  countryName.innerText=countryList[i];
  countryName.value=countryList[i];
  contain.append(countryName);
}

let form= document.querySelector("validation");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

function formValid(){
let fuserid=document.validation.un;
let fpass=document.validation.pw;
let fname=document.validation.name1;
let fadd=document.validation.address;
let fcountry=document.validation.country;
let fzip=document.validation.zip;
let femail=document.validation.email;
let fsexm=document.validation.male;
let fsexf=document.validation.female;
let fsexo=document.validation.other;
let fph=document.validation.ph;
let flangE=document.validation.english;
let flangNE=document.validation.nenglish;

if(userid_valid(fuserid,12,5)){
  if(pass_valid(fpass)){
  if(allLetter(fname)){
    if(alphanumeric(fadd)){
      if(countrySelect(fcountry)){
        if(allnum(fzip)){
          if(email_valid(femail)){
            if(ph_valid(fph)){
              if(lang_valid(flangE,flangNE)){
                if(sex_valid(fsexm,fsexf,fsexo)){
                }
              }
            }
          }
        }
      }
    }
  }
}
return false;
}

function userid_valid(fuserid,max,min){

  let lenght_uid= fuserid.value.length;
  if(lenght_uid<min || lenght_uid>max){
    window.alert(`length of user Id must be between ${min} to ${max}`);
    fuserid.style.border = "red solid 4px";
    fuserid.focus();
    return false;
  }
  else{
  alert('working1');
  return true;
}
}

function pass_valid(fpass){
    let ca=0,cn=0,cc=0,cA=0;
    let password= fpass.value;
    let plen=password.length;
    if(plen<8){
      alert("please enter the password with more than 8 characters");
      fpass.style.border = "red solid 4px";
      fpass.focus();
      return false;
    }
    if(plen>12){
      alert("please enter the password under 12 characters");
      fpass.style.border = "red solid 4px";
      fpass.focus();
      return false;
    }
    for(let i of password){
      if(i<'z' && i>'a'){
        ca++;
      }
      if(i<'Z' && i>'A'){
        cA++;
      }
      if(i<'9' && i>'0'){
        cn++;
      }
      if((i<='/' && i>='!') || (i<='@' && i>=':') ){
        cc++;
      }
    }

    if(cc==0||ca==0||cn==0||cA==0){
      console.log(cc  ,ca  ,cA  ,cn);
      alert("*password should contain at least one letter, one numeric value, and one special character");
      fpass.style.border = "red solid 4px";
      fpass.focus();
      return false;
    }
    else{
    alert("working2");
    return true;
  }
}

  function allLetter(fname){
    let letters =  /^[a-zA-Z\-]+$/;
    let name2 = document.getElementById('name').value;
    if(letters.test(name2)){
      alert('working3');
      return true;
    }
    else
{
alert('Name must have alphabets only');
fname.style.border = "red solid 4px";
fname.focus();
return false;
}
  }

  function alphanumeric(fadd)
  { 
  let letters1 =/^[a-zA-Z0-9\s\,\#\''\-]*$/ ;
 let add= document.getElementById('address').value;
  if(letters1.test(add))
  {
    alert('working4');
  return true;
  }
  else
  {
  alert('Please enter valid address\n(house no. ,street name ,city ,state)');
  fadd.style.border = "red solid 4px";
  fadd.focus();
  return false;
  }
  }

  function countrySelect(fcountry){
    if(fcountry.value === "default")
{
    alert('Select your country from the list');
    fcountry.style.border = "red solid 4px";
    fcountry.focus();
return false;
}
else{
  alert('working5');
return true;
}
}

function allnum(fzip)
{ 
let numbers = /^[0-9]+$/;
if(numbers.test(fzip.value))
{
  alert('working6');
return true;
}
else
{
alert('Please enter valid ZIP code ');
fzip.style.border = "red solid 4px";
fzip.focus();
return false;
}
}

function email_valid(uemail)
{
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailformat.test(uemail.value))
{
  alert('working7');
return true;
}
else
{
alert("Please enter an invalid email address!");
fph.style.border = "red solid 4px";
femail.focus();
return false;
}
}

function ph_valid(fph){ 
  let patt_ph=/^[0]?[6789]\d{9}$/;
  if(patt_ph.test(fph.value)){
    alert('working8');
    return true;
  }
  else{
    alert("Please enter valid phone no. ");
    fph.style.border = "red solid 4px";
    fph.focus();
  }
}

function sex_valid(fsexm,fsexf,fsexo)
{
let x=0;

let fsexm1=document.getElementById("male1");
let fsexf1=document.getElementById("female1");
let fsexo1=document.getElementById("others1");
if(fsexm1.checked) 
{
x++;
}
if(fsexf1.checked)
{
x++; 
}
if(fsexo1.checked)
{
x++; 
}
if (x==3||x==2)
{
alert('more than one option is checked');
fsexf1.checked=false;
fsexm1.checked=false;
fsexo1.checked=false;
fsexm.style.border = "red solid 4px";
fsexm.focus();
return false;
}

if(x==0)
{
alert('Select any one from Male/Female/Others');
fsexm.style.border = "red solid 4px";
fsexm.focus();
return false;
}
else
{
  alert("working9");
  alert('Form Succesfully Submitted');
  window.location.reload();
  return true;
}
}

function lang_valid(flangE,flangNE){
  let y=0;
  let flangE1=document.getElementById("english1");
  let flangNE1=document.getElementById("nenglish1");
  if(flangE1.checked){
    y++;
  }
  if(flangNE1.checked){
    y++;
  }
  if(y==2 || y==1){
    alert("working10");
    return true;
  }
  if(y==0)
{
alert('Select any one from English/Others');
flangE.style.border = "red solid 4px";
flangE.focus();
return false;
}
}
}