
 /*fixa menu */              
document.getElementById("corpo").onscroll= function(){fixar()};

    function fixar(){
           var blocossecoes= document.getElementsByClassName("img-bloco1");
        if(screen.width>"1024"){
            
            var cabecalho =document.getElementById("p2").offsetHeight;
            if(document.body.scrollTop > cabecalho || document.documentElement.scrollTop > cabecalho){
            document.getElementById("menu").classList.add("menu-fix");
            
             
                for(i=0; i<= blocossecoes.length; i++){
            
                     document.getElementsByClassName("img-bloco1")[i].classList.add("fade2");
                    if(i==1 || i==4 || i==7 || i == 10){
                        document.getElementsByClassName("img-bloco1")[i].classList.add("tp1");
                    }else if(i==2 || i==5 || i==8 || i == 11){
                        document.getElementsByClassName("img-bloco1")[i].classList.add("tp2");
                    }

                }
            
                

            }else{
                
            document.getElementById("menu").classList.remove("menu-fix");
        }
        } 
            if(screen.width<"769"){
                       
                 for(i=0; i<= blocossecoes.length; i++){
                     
                      blocossecoes[i].classList.add("fade2");
                     
                 }
                    
                }
    }
              
     

function eitateste(){
    document.getElementsByClassName("swiper-wrapper")[0].style.marginTop="100%";
    document.getElementsByClassName("nav-mobile")[0].style.display="block";
    
}
function eitapeste(){
    document.getElementsByClassName("swiper-wrapper")[0].style.marginTop="0px";
    document.getElementsByClassName("nav-mobile")[0].style.display="none";
}








/*Alterar alturas*/
    function altura(){

        if(screen.width>"1024"){
            
            document.getElementById("p2").style.height = "660px";
        }
    }
    function altura2(){

        if(screen.width>"1024"){
            
            document.getElementById("p2").style.height = "420px";
        }

    }

    function desaltura(){

        if(screen.width>"1024"){
            
            document.getElementById("p2").style.height = "300px";
        }
    }



/*Slider*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
if (n > x.length) {slideIndex = 1}    
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" w3-white");
}
x[slideIndex-1].style.display = "block";  
x[slideIndex-1].style.transition = "all 1s"; 

dots[slideIndex-1].className += " w3-white";
}