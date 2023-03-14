/*var audio = new Audio("Ghibli-Jazz-Piano.mp3");

document.onclick = function() {
  audio.play();
}*/

let sign = "";
let img = "";
let rapperName = "";
let bio = "";
let helpB = "";

const maskAquarius = document.querySelector('.aquarius-button');
const maskpisces = document.querySelector('.pisces-button');
const maskAries = document.querySelector('.aries-button');
const maskTaurus = document.querySelector('.taurus-button');
const maskGemini = document.querySelector('.gemini-button');
const maskCancer = document.querySelector('.cancer-button');
const maskLeo = document.querySelector('.leo-button');
const maskVirgo = document.querySelector('.virgo-button');
const maskLibra = document.querySelector('.libra-button');
const maskScorpio = document.querySelector('.scorpio-button');
const maskSagittarius = document.querySelector('.sagittarius-button');
const maskCapricorn = document.querySelector('.capricorn-button');

function zodiac(){

    const birthmonth = document.getElementById("month").value;
    const birthday = document.getElementById("day").value;

    if ((birthmonth == 1 && birthday >= 20) || (birthmonth == 2 && birthday <= 18)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign = "Aquarius";
      img = "images/jcole.png";
      rapperName = "J.Cole";
      bio = "Your film is Spirited Away!";
      }
  
    if ((birthmonth == 2&& birthday >= 19) || (birthmonth == 3&& birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Pisces";
      img="images/Tyler_the_creator.png";
      rapperName="Tyler, The Creator";
      bio ="Your film is Ponyo!";
      }

    if ((birthmonth == 3 && birthday >= 21) || (birthmonth == 4 && birthday <= 19)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Aries";
      img="images/Chance-The_Rapper.svg";
      rapperName="Chance The Rapper";
      bio ="Your film is Princess Mononoke!";
    }
    
    if ((birthmonth == 4 && birthday >= 20)|| (birthmonth == 5 && birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Taurus";
      img="images/travis-scott.png";
      rapperName="Travis Scott";    
      bio ="Your film is Totoro!";
      }
    
    if ((birthmonth == 5 && birthday >= 21) || (birthmonth == 6 && birthday <= 20)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Gemini";
      img="images/kanye-west.png";
      rapperName="Kanye West";
      bio ="Your film is Kiki's Delivery Service!";
      }
    
    if ((birthmonth == 6 && birthday >= 21) || (birthmonth == 7 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Cancer";
      img="images/50-cent.png";
      rapperName="50 Cent";
      bio ="Your film is Secret World of Arriety!";
      }

    if ((birthmonth == 7 && birthday >= 23) || (birthmonth == 8 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Leo";
      img="images/lil-uzi-vert.svg";
      rapperName="Lil Uzi Vert";
      bio ="Your film is Graveyard of the Fireflies!";
      }

      if ((birthmonth == 8 && birthday >= 23) || (birthmonth == 9 && birthday <= 22)){

        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Virgo";
        img="images/flo-rida.png";
        rapperName="Flo Rida";
        bio ="Your film is When Marnie Was Here!";
        }

      if ((birthmonth == 9 && birthday >= 23) || (birthmonth == 10 && birthday <= 22)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Libra";
        img="images/eminem.png";
        rapperName="Eminem";
        bio ="Your film is Ocean Waves!";
      }

      if ((birthmonth == 10 && birthday >= 23) || (birthmonth == 11 && birthday <= 21)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Scorpio";
        img="images/drake.png";
        rapperName="Drake";
        bio ="Your film is Nausicaa of the Valley of the Wind!"; 
      }

      if ((birthmonth == 11 && birthday >= 22) || (birthmonth == 12 && birthday <= 21)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Sagittarius";
        img="images/jayz.svg";
        rapperName="Jay Z";
        bio ="Your film is Whisper of the Heart!";
        }
    
    if((birthmonth == 12 && birthday >= 22) || (birthmonth == 1 && birthday <= 19)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Capricorn";
        img="images/mac-miller.png";
        rapperName="Mac Miller";
        bio ="Your film is Howl's Moving Castle";  
      }
        else if ((birthmonth>12||birthday>31) || (birthmonth<1||birthday<1)){
          return alert("Please enter correct date!")
      }

  const charOutput = document.querySelector('.mainresult');
      findCharacter();
  }

function findCharacter(){
  const signName = document.querySelector('.js-sign-name');
  signName.innerHTML = sign;

  const imageName = document.querySelector('.js-rapper-img');
  imageName.src = img;

  const characterName = document.querySelector('.js-character-name-person');
  characterName.innerHTML = rapperName;

  const bioName = document.querySelector('.js-rapper-bio');
  bioName.innerHTML = bio;

  const revealBox = document.querySelector('.js-rapper-reveal');
  revealBox.style.display = "block";
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  zodiac();
});

const showHelpBox = () =>{

  const helpBox = document.querySelector('.js-help-box');


  if (helpB){
      helpBox.style.display = "none";
      helpB = false;
  }
  
  else{
      helpBox.style.display = "flex";
      helpB = true;
  }

  rectangle(helpB);
};

maskAquarius.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign = "Aquarius";
    img = "images/jcole.png";
    rapperName = "J.Cole";
      bio = "Your film is Spirited Away!";
      findCharacter();
  });
  maskpisces.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Pisces";
    img="images/Tyler_the-creator.png";
    rapperName="Tyler, The Creator";
      bio ="Your film is Ponyo!";
      findCharacter();
     
  });
  maskAries.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Aries";
    img="images/Chance-The-Rapper.svg";
    rapperName="Chance The Rapper";
      bio ="Your film is Princess Mononoke!";
      findCharacter();
    
  });
  maskTaurus.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Taurus";
    img="images/travis-scott.png";
    rapperName="Travis Scott";    
      bio ="Your film is Totoro!";
      findCharacter();
      
  });
  maskGemini.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Gemini";
    img="images/kanye-west.png";
    rapperName="Kanye West";
      bio ="Your film is Kiki's Delivery Service!";
      findCharacter();
    
  });
  maskCancer.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Cancer";
    img="images/50-cent.png";
    rapperName="50 Cent";
      bio ="Your film is Secret World of Arriety!";
      findCharacter();
    
  });
  maskLeo.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Leo";
    img="images/lil-uzi-vert.svg";
    rapperName="Lil Uzi Vert";
      bio ="Your film is Graveyard of the Fireflies!";
      findCharacter();
    
  });
  maskVirgo.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Virgo";
    img="images/flo-rida.png";
    rapperName="Flo Rida";
      bio ="Your film is When Marnie Was Here!";
      findCharacter();
   
  });
  maskLibra.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Libra";
    img="images/eminem.png";
    rapperName="Eminem";
      bio ="Your film is Ocean Waves!";
      findCharacter();
     
  });
  maskScorpio.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Scorpio";
    img="images/drake.png";
    rapperName="Drake";
      bio ="Your film is Nausicaa of the Valley of the Wind!";
      findCharacter();
   
  });
  maskSagittarius.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Sagittarius";
    img="images/jayz.svg";
    rapperName="Jay Z";
      bio ="Your film is Whisper of the Heart!";
      findCharacter();
     
  });
  maskCapricorn.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Capricorn";
    img="images/mac-miller.png";
    rapperName="Mac Miller";
      bio ="Your film is Howl's Moving Castle!";
      findCharacter();
  
  });

function rectangle(hideB){
  const mainRectangle = document.querySelector('.js-main-rectangle');

  if (hideB){
    mainRectangle.style.display = "none";
  }
  else{
    mainRectangle.style.display = "block";
  }
}

const helpOpenButton = document.querySelector('.js-help-button');
helpOpenButton.addEventListener('click', showHelpBox);

const helpCloseButton = document.querySelector('.js-help-button-close');
helpCloseButton.addEventListener('click', showHelpBox);