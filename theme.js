/*
==========================================
JETIX GENERATION THEME
Version 1.0.0
==========================================
*/

(() => {

if(document.getElementById("jetix-hero")) return;

const slides = [

{
title:"POKÉMON",
description:"Prinde-i pe toți într-o aventură legendară.",
image:"https://i.pinimg.com/1200x/52/15/70/521570519b83fd60194d678660c0e700.jpg"
},

{
title:"GALACTIK FOOTBALL",
description:"Fluxul decide totul.",
image:"https://img.cartoongoodies.com/wp-content/uploads/2022/09/Galactik-Football-Snow-Kids-Team.png"
},

{
title:"BEN 10",
description:"It's Hero Time!",
image:"https://rosepng.com/wp-content/uploads/elementor/thumbs/pixelcut-export-qutgniy4i7l1f40z60tn40ms8m6han8zns7bpt6v0i.png"
},

{
title:"YU-GI-OH!",
description:"Este timpul pentru Duel!",
image:"https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png"
}

];

const hero=document.createElement("section");

hero.id="jetix-hero";

hero.innerHTML=`

<div class="hero-background"></div>

<div class="hero-overlay"></div>

<div class="hero-content">

<div class="hero-logo">

<img src="AICI_LINK_LOGO_JETIX.png">

<h1>Generation</h1>

</div>

<h2 id="heroTitle"></h2>

<p id="heroDescription"></p>

<div class="hero-buttons">

<a class="hero-instagram"
href="https://instagram.com"
target="_blank">

Instagram

</a>

<a class="hero-discord"
href="https://discord.gg"
target="_blank">

Discord

</a>

</div>

</div>

`;

document.querySelector("#main").prepend(hero);

const bg=document.querySelector(".hero-background");
const title=document.getElementById("heroTitle");
const desc=document.getElementById("heroDescription");

let current=0;

function loadSlide(){

const slide=slides[current];

bg.style.opacity=0;

setTimeout(()=>{

bg.style.backgroundImage=`url('${slide.image}')`;

title.textContent=slide.title;

desc.textContent=slide.description;

bg.style.opacity=1;

current++;

if(current>=slides.length){

current=0;

}

},400);

}

loadSlide();

setInterval(loadSlide,10000);

})();
