var usia = document.getElementById("usia");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var male = document.getElementById("laki-laki");
var female = document.getElementById("perempuan");
let resultArea = document.querySelector(".comment");

function calculate(){
 
  if(usia.value=='' || tinggi.value=='' || berat.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [usia.value, tinggi.value, berat.value];
  if(male.checked){
    p.push("laki-laki");
  }else if(female.checked){
    p.push("perempuan");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan berat badan';
     }else if(18.5<=bmi&&bmi<=24.99){
    result = 'Normal (ideal)';
     }else if(25<=bmi&&bmi<=29.99){
    result = 'Kelebihan berat badan';
     }else if(30<=bmi&&bmi<=34.99){
    result = 'Kegemukan (obesitas)';
     }else if(35<=bmi){
    result = 'Sangat gemuk';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}


