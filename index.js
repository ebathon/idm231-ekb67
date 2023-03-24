/*var audio = new Audio();

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
      
    //   document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign = "Aquarius";
      img = "images/jcole.png";
      rapperName = "J.Cole";
      bio = "Aquarius is the zodiac sign for those born between January 20th and February 18th. Symbolized by the water bearer, Aquarians are known for their independent and unconventional nature. They are often innovative, intellectual, and have a love for humanitarian causes. In many ways, J. Cole embodies the spirit of Aquarius. As a rapper, he is known for his unique and unconventional style, often incorporating introspective lyrics and socially conscious themes into his music. He is also known for his independent spirit and refusal to conform to the traditional norms of the music industry.";
      }
  
    if ((birthmonth == 2&& birthday >= 19) || (birthmonth == 3&& birthday <= 20)){
      
    //   document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Pisces";
      img="images/Tyler_the_creator.png";
      rapperName="Tyler, The Creator";
      bio ="Pisces is the zodiac sign for those born between February 19th and March 20th. Symbolized by the fish, Pisces are known for their compassionate, intuitive, and creative nature. They have a love for the mystical and spiritual and are often drawn to artistic pursuits.Tyler, the Creator, who was born on March 6th, embodies many of the traits associated with Pisces. As a rapper, he is known for his innovative and creative style, often incorporating unique and unconventional sounds into his music. He has also shown a deep sense of empathy and compassion in his lyrics, addressing topics such as mental health, social injustice, and personal growth.";
      }

    if ((birthmonth == 3 && birthday >= 21) || (birthmonth == 4 && birthday <= 19)){
     
    //   document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Aries";
      img="images/Chance-The_Rapper.svg";
      rapperName="Chance The Rapper";
      bio ="Aries is the zodiac sign for those born between March 21st and April 19th. Symbolized by the ram, Aries are known for their bold, assertive, and independent nature. They have a natural talent for leadership and a love for adventure.Chance the Rapper, who was born on April 16th, embodies many of the traits associated with Aries. As a rapper, he is known for his energetic and assertive style, often using his music as a platform to address social and political issues. He has also shown a natural talent for leadership, organizing charity events and advocating for causes such as mental health awareness and education reform. ";
    }
    
    if ((birthmonth == 4 && birthday >= 20)|| (birthmonth == 5 && birthday <= 20)){
      
    document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Taurus";
      img="images/travis-scott.png";
      rapperName="Travis Scott";    
      bio ="Taurus is the zodiac sign for those born between April 20th and May 20th. Symbolized by the bull, Taureans are known for their practical, reliable, and hardworking nature. They have a love for stability and material comforts and value loyalty and dependability.Travis Scott, who was born on April 30th, embodies many of the traits associated with Taurus. As a rapper and producer, he is known for his meticulous attention to detail and his work ethic, often spending hours in the studio perfecting his craft. He has also shown a love for material comforts and luxury, often incorporating high-end fashion and design into his music videos and stage performances.";
      }
    
    if ((birthmonth == 5 && birthday >= 21) || (birthmonth == 6 && birthday <= 20)){
     
    //   document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Gemini";
      img="images/kanye-west.png";
      rapperName="Kanye West";
      bio ="Gemini is the zodiac sign for those born between May 21st and June 20th. Symbolized by the twins, Geminis are known for their curious, adaptable, and expressive nature. They have a natural talent for communication and are often drawn to creative pursuits.Kanye West, who was born on June 8th, embodies many of the traits associated with Gemini. As a rapper and producer, he is known for his innovative and expressive style, often incorporating diverse musical influences and experimental production techniques into his work. He is also known for his outspoken and sometimes controversial views on social and political issues.";
      }
    
    if ((birthmonth == 6 && birthday >= 21) || (birthmonth == 7 && birthday <= 22)){
      
    //   document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Cancer";
      img="images/50-cent.png";
      rapperName="50 Cent";
      bio ="Cancer is the zodiac sign for those born between June 21st and July 22nd. Symbolized by the crab, Cancers are known for their emotional, intuitive, and nurturing nature. They have a deep sense of empathy and are often drawn to caring for others.50 Cent, who was born on July 6th, embodies many of the traits associated with Cancer. As a rapper and entrepreneur, he has shown a natural talent for leadership and a love for nurturing and developing new talent. He has also shown a deep sense of empathy, using his platform to address issues such as poverty, violence, and social injustice.";
      }

    if ((birthmonth == 7 && birthday >= 23) || (birthmonth == 8 && birthday <= 22)){
      
    //   document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Leo";
      img="images/lil-uzi-vert.svg";
      rapperName="Lil Uzi Vert";
      bio ="Leo is the zodiac sign for those born between July 23rd and August 22nd. Symbolized by the lion, Leos are known for their confident, charismatic, and creative nature. They have a natural talent for leadership and are often drawn to the spotlight.Lil Uzi Vert, who was born on July 31st, embodies many of the traits associated with Leo. As a rapper and fashion icon, he is known for his charismatic and confident style, often incorporating bold fashion statements and flashy jewelry into his public persona. He has also shown a natural talent for leadership, often collaborating with other artists and taking creative control over his music and visuals.";
      }

      if ((birthmonth == 8 && birthday >= 23) || (birthmonth == 9 && birthday <= 22)){

        // document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Virgo";
        img="images/flo-rida.png";
        rapperName="Flo Rida";
        bio ="Virgo is the zodiac sign for those born between August 23rd and September 22nd. Symbolized by the virgin, Virgos are known for their analytical, detail-oriented, and practical nature. They have a natural talent for organization and are often drawn to careers in fields such as healthcare, education, and finance.Flo Rida, who was born on September 17th, embodies many of the traits associated with Virgo. As a rapper and songwriter, he has shown a meticulous attention to detail in his music production and lyricism. He has also demonstrated a practical and analytical approach to his career, making strategic business decisions and building his brand through collaborations with other artists and businesses.";
        }

      if ((birthmonth == 9 && birthday >= 23) || (birthmonth == 10 && birthday <= 22)){
        
        // document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Libra";
        img="images/eminem.png";
        rapperName="Eminem";
        bio ="Libra is the zodiac sign for those born between September 23rd and October 22nd. Symbolized by the scales, Libras are known for their balanced, harmonious, and diplomatic nature. They have a natural talent for resolving conflicts and creating harmonious relationships.Eminem, who was born on October 17th, embodies many of the traits associated with Libra. As a rapper and songwriter, he has shown a talent for balancing his controversial and often confrontational lyrics with a thoughtful and introspective approach to his music. He has also demonstrated a diplomatic and strategic approach to his career, navigating the music industry and the public eye with a savvy business sense.";
      }

      if ((birthmonth == 10 && birthday >= 23) || (birthmonth == 11 && birthday <= 21)){
       
        // document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Scorpio";
        img="images/drake.png";
        rapperName="Drake";
        bio ="Scorpio is the zodiac sign for those born between October 23rd and November 21st. Symbolized by the scorpion, Scorpios are known for their intense, passionate, and determined nature. They have a natural talent for uncovering hidden truths and are often drawn to careers in fields such as psychology, investigation, and research.Drake, who was born on October 24th, embodies many of the traits associated with Scorpio. As a rapper and songwriter, he has shown an intense and passionate approach to his music, often exploring themes of love, loss, and personal struggle. He has also demonstrated a talent for uncovering hidden truths and emotions through his lyrics, connecting with fans on a deep and personal level."; 
      }

      if ((birthmonth == 11 && birthday >= 22) || (birthmonth == 12 && birthday <= 21)){
        
        // document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Sagittarius";
        img="images/jayz.svg";
        rapperName="Jay Z";
        bio ="Sagittarius is the zodiac sign for those born between November 22nd and December 21st. Symbolized by the archer, Sagittarians are known for their adventurous, optimistic, and philosophical nature. They have a natural talent for exploring new ideas and experiences and are often drawn to careers in fields such as travel, education, and entertainment. Jay-Z, who was born on December 4th, embodies many of the traits associated with Sagittarius. As a rapper and entrepreneur, he has shown an adventurous and optimistic approach to his career, constantly pushing the boundaries of the music industry and expanding into new business ventures. He has also demonstrated a philosophical and introspective approach to his music, exploring themes of personal growth, social issues, and cultural identity.";
        }
    
    if((birthmonth == 12 && birthday >= 22) || (birthmonth == 1 && birthday <= 19)){
       
        // document.getElementsByClassName("zodiac-sub-box").innerHTML
        audio= document.getElementById("mac-miller-self-care.mp3");
        sign="Capricorn";
        img="images/mac-miller.png";
        rapperName="Mac Miller";
        bio ="Capricorn is the zodiac sign for those born between December 22nd and January 19th. Symbolized by the mountain goat, Capricorns are known for their disciplined, ambitious, and hardworking nature. They have a natural talent for achieving their goals and are often drawn to careers in fields such as business, finance, and music. Mac Miller, who was born on January 19th, embodies many of the traits associated with Capricorn. As a rapper and producer, he showed a disciplined and hardworking approach to his music, constantly refining his craft and experimenting with new sounds. He also demonstrated an ambitious and entrepreneurial spirit, building his brand and connecting with fans through his unique style and personal lyrics.";

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
    bio = "Aquarius is the zodiac sign for those born between January 20th and February 18th. Symbolized by the water bearer, Aquarians are known for their independent and unconventional nature. They are often innovative, intellectual, and have a love for humanitarian causes. In many ways, J. Cole embodies the spirit of Aquarius. As a rapper, he is known for his unique and unconventional style, often incorporating introspective lyrics and socially conscious themes into his music. He is also known for his independent spirit and refusal to conform to the traditional norms of the music industry.";
      findCharacter();
  });
  maskpisces.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Pisces";
    img="images/Tyler_the_creator.png";
    rapperName="Tyler, The Creator";
    bio ="Pisces is the zodiac sign for those born between February 19th and March 20th. Symbolized by the fish, Pisces are known for their compassionate, intuitive, and creative nature. They have a love for the mystical and spiritual and are often drawn to artistic pursuits.Tyler, the Creator, who was born on March 6th, embodies many of the traits associated with Pisces. As a rapper, he is known for his innovative and creative style, often incorporating unique and unconventional sounds into his music. He has also shown a deep sense of empathy and compassion in his lyrics, addressing topics such as mental health, social injustice, and personal growth.";
      findCharacter();
     
  });
  maskAries.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Aries";
    img="images/Chance-The-Rapper.svg";
    rapperName="Chance The Rapper";
    bio ="Aries is the zodiac sign for those born between March 21st and April 19th. Symbolized by the ram, Aries are known for their bold, assertive, and independent nature. They have a natural talent for leadership and a love for adventure.Chance the Rapper, who was born on April 16th, embodies many of the traits associated with Aries. As a rapper, he is known for his energetic and assertive style, often using his music as a platform to address social and political issues. He has also shown a natural talent for leadership, organizing charity events and advocating for causes such as mental health awareness and education reform. ";
      findCharacter();
    
  });
  maskTaurus.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Taurus";
    img="images/travis-scott.png";
    rapperName="Travis Scott";    
    bio ="Taurus is the zodiac sign for those born between April 20th and May 20th. Symbolized by the bull, Taureans are known for their practical, reliable, and hardworking nature. They have a love for stability and material comforts and value loyalty and dependability.Travis Scott, who was born on April 30th, embodies many of the traits associated with Taurus. As a rapper and producer, he is known for his meticulous attention to detail and his work ethic, often spending hours in the studio perfecting his craft. He has also shown a love for material comforts and luxury, often incorporating high-end fashion and design into his music videos and stage performances.";
      findCharacter();
      
  });
  maskGemini.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Gemini";
    img="images/kanye-west.png";
    rapperName="Kanye West";
    bio ="Gemini is the zodiac sign for those born between May 21st and June 20th. Symbolized by the twins, Geminis are known for their curious, adaptable, and expressive nature. They have a natural talent for communication and are often drawn to creative pursuits.Kanye West, who was born on June 8th, embodies many of the traits associated with Gemini. As a rapper and producer, he is known for his innovative and expressive style, often incorporating diverse musical influences and experimental production techniques into his work. He is also known for his outspoken and sometimes controversial views on social and political issues.";
      findCharacter();
    
  });
  maskCancer.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Cancer";
    img="images/50-cent.png";
    rapperName="50 Cent";
    bio ="Cancer is the zodiac sign for those born between June 21st and July 22nd. Symbolized by the crab, Cancers are known for their emotional, intuitive, and nurturing nature. They have a deep sense of empathy and are often drawn to caring for others.50 Cent, who was born on July 6th, embodies many of the traits associated with Cancer. As a rapper and entrepreneur, he has shown a natural talent for leadership and a love for nurturing and developing new talent. He has also shown a deep sense of empathy, using his platform to address issues such as poverty, violence, and social injustice.";
      findCharacter();
    
  });
  maskLeo.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Leo";
    img="images/lil-uzi-vert.svg";
    rapperName="Lil Uzi Vert";
    bio ="Leo is the zodiac sign for those born between July 23rd and August 22nd. Symbolized by the lion, Leos are known for their confident, charismatic, and creative nature. They have a natural talent for leadership and are often drawn to the spotlight.Lil Uzi Vert, who was born on July 31st, embodies many of the traits associated with Leo. As a rapper and fashion icon, he is known for his charismatic and confident style, often incorporating bold fashion statements and flashy jewelry into his public persona. He has also shown a natural talent for leadership, often collaborating with other artists and taking creative control over his music and visuals.";
      findCharacter();
    
  });
  maskVirgo.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Virgo";
    img="images/flo-rida.png";
    rapperName="Flo Rida";
    bio ="Virgo is the zodiac sign for those born between August 23rd and September 22nd. Symbolized by the virgin, Virgos are known for their analytical, detail-oriented, and practical nature. They have a natural talent for organization and are often drawn to careers in fields such as healthcare, education, and finance.Flo Rida, who was born on September 17th, embodies many of the traits associated with Virgo. As a rapper and songwriter, he has shown a meticulous attention to detail in his music production and lyricism. He has also demonstrated a practical and analytical approach to his career, making strategic business decisions and building his brand through collaborations with other artists and businesses.";
      findCharacter();
   
  });
  maskLibra.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Libra";
    img="images/eminem.png";
    rapperName="Eminem";
    bio ="Libra is the zodiac sign for those born between September 23rd and October 22nd. Symbolized by the scales, Libras are known for their balanced, harmonious, and diplomatic nature. They have a natural talent for resolving conflicts and creating harmonious relationships.Eminem, who was born on October 17th, embodies many of the traits associated with Libra. As a rapper and songwriter, he has shown a talent for balancing his controversial and often confrontational lyrics with a thoughtful and introspective approach to his music. He has also demonstrated a diplomatic and strategic approach to his career, navigating the music industry and the public eye with a savvy business sense.";
      findCharacter();
     
  });
  maskScorpio.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Scorpio";
    img="images/drake.png";
    rapperName="Drake";
    bio ="Scorpio is the zodiac sign for those born between October 23rd and November 21st. Symbolized by the scorpion, Scorpios are known for their intense, passionate, and determined nature. They have a natural talent for uncovering hidden truths and are often drawn to careers in fields such as psychology, investigation, and research.Drake, who was born on October 24th, embodies many of the traits associated with Scorpio. As a rapper and songwriter, he has shown an intense and passionate approach to his music, often exploring themes of love, loss, and personal struggle. He has also demonstrated a talent for uncovering hidden truths and emotions through his lyrics, connecting with fans on a deep and personal level."; 
      findCharacter();
   
  });
  maskSagittarius.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Sagittarius";
    img="images/jayz.svg";
    rapperName="Jay Z";
    bio ="Sagittarius is the zodiac sign for those born between November 22nd and December 21st. Symbolized by the archer, Sagittarians are known for their adventurous, optimistic, and philosophical nature. They have a natural talent for exploring new ideas and experiences and are often drawn to careers in fields such as travel, education, and entertainment. Jay-Z, who was born on December 4th, embodies many of the traits associated with Sagittarius. As a rapper and entrepreneur, he has shown an adventurous and optimistic approach to his career, constantly pushing the boundaries of the music industry and expanding into new business ventures. He has also demonstrated a philosophical and introspective approach to his music, exploring themes of personal growth, social issues, and cultural identity.";
      findCharacter();
     
  });
  maskCapricorn.addEventListener('click', function(){
    audio= document.getElementById("mac-miller-self-care.mp3");
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Capricorn";
    img="images/mac-miller.png";
    rapperName="Mac Miller";
    bio ="Capricorn is the zodiac sign for those born between December 22nd and January 19th. Symbolized by the mountain goat, Capricorns are known for their disciplined, ambitious, and hardworking nature. They have a natural talent for achieving their goals and are often drawn to careers in fields such as business, finance, and music. Mac Miller, who was born on January 19th, embodies many of the traits associated with Capricorn. As a rapper and producer, he showed a disciplined and hardworking approach to his music, constantly refining his craft and experimenting with new sounds. He also demonstrated an ambitious and entrepreneurial spirit, building his brand and connecting with fans through his unique style and personal lyrics.";
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

function changeImage() {
  if (document.getElementById("imgClickAndChange").src == "images/help-button.png"){
      document.getElementById("imgClickAndChange").src = "images/help-button-close.png";
  } else {
      document.getElementById("imgClickAndChange").src = "images/help-button-close.png";
  }
}

