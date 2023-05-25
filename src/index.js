// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import "@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js";
import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import 'popper.js/dist/popper.min.js';
import 'jquery/dist/jquery.min.js';
import "../src/sass/style.scss";


let overlay = document.querySelectorAll(".overlay");
let overlayProjects =document.querySelectorAll(".carousel-item-projects");

console.log(overlayProjects);
// console.log(overlay);

for(let i=0;i<overlayProjects.length;i++){
    overlayProjects[i].onmouseover = function(){
        overlay[i].classList.add("active");
        console.log("moea")
    }
    overlayProjects[i].onmouseout = function(){
        overlay[i].classList.remove("active");
        console.log("not meao")
    }
};

// ###############################################################################################
// galary




let buttonImg = document.querySelectorAll(".btn-img-galary");
let imgGalary = document.querySelectorAll(".img-galary");
let modalBody = document.querySelector(".modal-body");
let modalTitle =document.querySelector(".modal-title");
let buttonLeft = document.querySelector(".btn-modal")
let btnRight = document.querySelector(".btn-modal-right");
let modal = document.querySelector(".modal");

for (let i =0; i< buttonImg.length; i++){

    buttonImg[i].onclick = function(){
      let id = imgGalary[i].id;
      let src = imgGalary[i].src;
      modalTitle.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">${id}</h5>`;
      modalBody.innerHTML = `<div class="modal-body"><img src="${src}" class="img-fluid img-galary" id="${id}"></div>`;
      buttonLeft.addEventListener("click", function(){
        if ( i >=0 && i+1 < buttonImg.length){
          i = i+1;
          let id = imgGalary[i].id;
          let src = imgGalary[i].src;
          modalTitle.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">${id}</h5>`;
          modalBody.innerHTML = `<div class="modal-body"><img src="${src}" class="img-fluid img-galary" id="${id}"></div>`;
        } else if (i+1 >= buttonImg.length){
          i = 0;
          let id = imgGalary[i].id;
          let src = imgGalary[i].src;
          modalTitle.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">${id}</h5>`;
          modalBody.innerHTML = `<div class="modal-body"><img src="${src}" class="img-fluid img-galary" id="${id}"></div>`;
        }
      });
      btnRight.addEventListener("click", function(){
        if ( i <= 7 && i > 0){
          i = i-1;
          let id = imgGalary[i].id;
          let src = imgGalary[i].src;
          modalTitle.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">${id}</h5>`;
          modalBody.innerHTML = `<div class="modal-body"><img src="${src}" class="img-fluid img-galary" id="${id}"></div>`;
        } else if(i <=  0) { 
          i = 7;
          let id = imgGalary[i].id;
          let src = imgGalary[i].src;
          modalTitle.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">${id}</h5>`;
          modalBody.innerHTML = `<div class="modal-body"><img src="${src}" class="img-fluid img-galary" id="${id}"></div>`;
        }
      });
     
    }
    if(modal.style.display="none"){
      i===0;
    }
};

            // if (i===0){
            //   buttonLeft.style.display="block";
            //   btnRight.style.display="none";
              
            // } else if (i > 0 && i+1 < buttonImg.length){
            //   buttonLeft.style.display="block";
            //   btnRight.style.display = "block";
            // }
            // else if(i+1 === buttonImg.length){
            //   buttonLeft.style.display = "none";
            //   btnRight.style.display = "block";
            // } 











// 3################################################################################################
//  for footer date
let date =new Date();
let year = date.getFullYear();
let ele = document.getElementById("date");
ele.innerHTML =`${year}`;

// ###################################################################################################









// #####################################################################################################
// validation 

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

