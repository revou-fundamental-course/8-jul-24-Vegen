// variabel yang akan dipakai
var usia = document.getElementById("usia");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var male = document.getElementById("laki-laki");
var female = document.getElementById("perempuan");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// function yang akan berjalan ketika menekan button menghitung BMI
function calculate(){
 
  if(usia.value=='' || tinggi.value=='' || berat.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Harap isi semua data!`;

  }else{
    countBmi();
  }

}

// rumus untuk menghitung BMI
function countBmi(){
  var p = [usia.value, tinggi.value, berat.value];
  if(male.checked){
    p.push("laki-laki");
  }else if(female.checked){
    p.push("perempuan");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  // info mengenai BMI setelah mengetahui result
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


// comment dari result
resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}


// Ketika memencet (x) saat notif harap isi maka akan ditutup notifnya
span.onclick = function() {
  modal.style.display = "none";
}

// Ketika memencet area diluar notif harap isi maka akan ditutup notifnya
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
