const e=[...[{id:0,name:"Jennifer",img:"../images/pets-1/pets-jennifer.jpg",img_2x:"../images/pets-2/jennifer.png",type:"Dog",breed:"Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",age:"2 months",inoculations:["none"],diseases:["none"],parasites:["none"]},{id:1,name:"Sophia",img:"./images/pets-1/sophia.png",img_2x:"./images/pets-2/sophia.png",type:"Dog",breed:"Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",age:"1 month",inoculations:["parvovirus"],diseases:["none"],parasites:["none"]},{id:2,name:"Woody",img:"./images/pets-1/woody.png",img_2x:"./images/pets-2/woody.png",type:"Dog",breed:"Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",age:"3 years 6 months",inoculations:["adenovirus","distemper"],diseases:["right back leg mobility reduced"],parasites:["none"]},{id:3,name:"Scarlett",img:"./images/pets-1/scarlett.png",img_2x:"./images/pets-2/scarlett.png",type:"Dog",breed:"Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:"3 months",inoculations:["parainfluenza"],diseases:["none"],parasites:["none"]},{id:4,name:"Katrine",img:"./images/pets-1/katrine.png",img_2x:"./images/pets-2/katrine.png",type:"Cat",breed:"British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",age:"6 months",inoculations:["panleukopenia"],diseases:["none"],parasites:["none"]},{id:5,name:"Timmy",img:"./images/pets-1/timmy.png",img_2x:"./images/pets-2/timmy.png",type:"Cat",breed:"British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",age:"2 years 3 months",inoculations:["calicivirus","viral rhinotracheitis"],diseases:["kidney stones"],parasites:["none"]},{id:6,name:"Freddie",img:"./images/pets-1/freddie.png",img_2x:"./images/pets-2/freddie.png",type:"Cat",breed:"British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",age:"2 months",inoculations:["rabies"],diseases:["none"],parasites:["none"]},{id:7,name:"Charly",img:"./images/pets-1/charly.png",img_2x:"./images/pets-2/charly.png",type:"Dog",breed:"Jack Russell Terrier",description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:"8 years",inoculations:["bordetella bronchiseptica","leptospirosis"],diseases:["deafness","blindness"],parasites:["lice","fleas"]}]],t=(document.querySelector(".hamburger"),document.querySelector(".nav__list"),document.querySelector(".logo"),document.querySelector(".overlay"),document.querySelector("#arrow_left")),n=document.querySelector("#arrow_right"),i=document.querySelector("#carousel"),s=document.querySelector("#slider__list_left"),o=document.querySelector("#slider__list_center"),a=document.querySelector("#slider__list_right"),r=document.querySelector(".pop-up"),l=document.querySelector(".pop-up__container"),c=document.querySelector("#pop-up__close");document.querySelector(".pets .slider__list");let d;function m(){const e=window.innerWidth;return e<576?(d=1,d):e<1201&&e>=576?(d=2,d):(d=3,d)}window.addEventListener("load",(()=>{s.innerHTML="",o.innerHTML="",a.innerHTML="",m();let t=w();for(let n=0;n<d;n++){const i=k();let s=t[n];i.setAttribute("data-petnumber",s),i.innerHTML=`<div class="slider__img">\n                            <img src="${e[s].img}" alt="${e[s].name}" >\n                        </div>\n                        <div class="slider__nickname">${e[s].name}</div>\n                        <div class="slider__info-btn">\n                            <button class="btn btn_border" type="button">Learn more</button>\n                        </div>`,o.appendChild(i),console.log(i)}let n=w();for(let t=0;t<d;t++){const i=k();let o=n[t];i.setAttribute("data-petnumber",o),i.innerHTML=`<div class="slider__img">\n                            <img src='${e[o].img}' alt="${e[o].name}">\n                        </div>\n                        <div class="slider__nickname">${e[o].name}</div>\n                        <div class="slider__info-btn">\n                            <button class="btn btn_border" type="button">Learn more</button>\n                        </div>`,s.appendChild(i)}a.innerHTML=s.innerHTML}));const u=document.querySelector(".menu__icon"),p=document.querySelector(".menu__body"),g=document.querySelector(".menu__body-wrapper");u&&u.addEventListener("click",(function(e){document.body.classList.toggle("_scroll-lock"),u.classList.toggle("_active"),p.classList.toggle("_active"),g.classList.toggle("_active")}));const h=document.querySelectorAll(".menu__link[data-goto], .button-primary[data-goto], #home, #ourPets");if(h.length>0){function y(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const n=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset;u.classList.contains("_active")&&(document.body.classList.remove("_scroll-lock"),u.classList.remove("_active"),p.classList.remove("_active"),g.classList.remove("_active")),window.scrollTo({top:n,behavior:"smooth"}),e.preventDefault()}}h.forEach((e=>{e.addEventListener("click",y)}))}g.addEventListener("click",(function(e){e.target.closest(".menu__link")||(u.classList.remove("_active"),p.classList.remove("_active"),g.classList.remove("_active"))}));const v=document.querySelector("#home"),_=document.querySelector("#ourPets"),f=document.querySelector("#help");function b(){i.classList.add("transition-left"),t.removeEventListener("click",b),n.removeEventListener("click",L)}function L(){i.classList.add("transition-right"),t.removeEventListener("click",b),n.removeEventListener("click",L)}function k(){const e=document.createElement("div");return e.classList.add("slider__item"),e}function w(){let e=[],t=[];for(document.querySelectorAll("#slider__list_center .slider__item").forEach((e=>(t.push(+e.dataset.petnumber),t)));e.length<3;){let n=Math.floor(8*Math.random());t.includes(n)||e.includes(n)||e.push(n)}return console.log("used "+t),console.log("super: "+e),e}function S(){document.querySelector(".pop-up__body").remove(),r.style.display="none",document.querySelector("body").classList.toggle("not-scroll")}v&&v.addEventListener("click",(function(e){e.preventDefault(),setTimeout((function(){window.location.href="index.html"}),150),document.body.classList.remove("_scroll-lock"),u.classList.remove("_active"),p.classList.remove("_active"),g.classList.remove("_active")})),_&&_.addEventListener("click",(function(e){e.preventDefault(),setTimeout((function(){window.location.href="./pets.html"}),150),document.body.classList.remove("_scroll-lock"),u.classList.remove("_active"),p.classList.remove("_active"),g.classList.remove("_active")})),f&&f.addEventListener("click",(function(e){e.preventDefault(),setTimeout((function(){window.location.href="./index.html#help"}),250),document.body.classList.remove("_scroll-lock"),u.classList.remove("_active"),p.classList.remove("_active"),g.classList.remove("_active")})),t.addEventListener("click",b),n.addEventListener("click",L),i.addEventListener("animationend",(o=>{"move-left-XL"===o.animationName||"move-left-M"===o.animationName||"move-left-S"===o.animationName?(i.classList.remove("transition-left"),document.querySelector("#slider__list_center").innerHTML=a.innerHTML):(i.classList.remove("transition-right"),document.querySelector("#slider__list_center").innerHTML=s.innerHTML),s.innerHTML="";let r=w();console.log("super =  "+r),m();for(let t=0;t<d;t++){const n=k();let i=r[t];console.log("petCardNumber - "+i),n.setAttribute("data-petnumber",i),n.innerHTML=`<div class="slider__img">\n                            <img src='${e[i].img}' alt="${e[i].name}">\n                        </div>\n                        <div class="slider__nickname">${e[i].name}</div>\n                        <div class="slider__info-btn">\n                            <button class="btn btn_border" type="button">Learn more</button>\n                        </div>`,s.appendChild(n),console.log("по одному: "+r[t])}a.innerHTML=s.innerHTML,t.addEventListener("click",b),n.addEventListener("click",L)})),o.addEventListener("click",(function(t){if(console.log(t.target.id),"slider__list_center"==t.target.id)return!0;r.style.display="block",document.querySelector("body").classList.toggle("not-scroll");const n=document.createElement("div");n.classList.add("pop-up__body");let i=t.target.closest(".slider__item").dataset.petnumber;n.innerHTML=`\n                    <div class="pop-up__img">\n                        <img src="${e[i].img_2x}" alt="${e[i].name}">\n                    </div>\n                    <div class="pop-up__text">\n                        <h3 class="title_h3">${e[i].name}</h3>\n                        <h4 class="title_h4">${e[i].type} - ${e[i].breed}</h4>\n                        <p>${e[i].description}</p>\n                        <ul>\n                            <li><strong>Age:</strong> ${e[i].age}</li>\n                            <li><strong>Inoculations:</strong> ${e[i].inoculations}</li>\n                            <li><strong>Diseases:</strong> ${e[i].diseases}</li>\n                            <li><strong>Parasites:</strong> ${e[i].parasites}</li>\n                        </ul>\n                    </div>`,l.prepend(n);let s=document.querySelector(".pop-up__body");s.addEventListener("mouseout",(()=>{c.style.backgroundColor="#F1CDB3"})),s.addEventListener("mouseover",(()=>{c.style.backgroundColor="transparent"}))})),c.addEventListener("click",S),r.addEventListener("click",(function(e){if(e.target!=this)return!0;S()}));
//# sourceMappingURL=index.0b7c6f08.js.map
