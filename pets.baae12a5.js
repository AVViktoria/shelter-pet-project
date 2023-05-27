const e=[...[{id:0,name:"Jennifer",img:"assets/pets-katrine.jpg",img_2x:"../images/pets-2/jennifer.png",type:"Dog",breed:"Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",age:"2 months",inoculations:["none"],diseases:["none"],parasites:["none"]},{id:1,name:"Sophia",img:"./images/pets-1/sophia.png",img_2x:"./images/pets-2/sophia.png",type:"Dog",breed:"Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",age:"1 month",inoculations:["parvovirus"],diseases:["none"],parasites:["none"]},{id:2,name:"Woody",img:"./images/pets-1/woody.png",img_2x:"./images/pets-2/woody.png",type:"Dog",breed:"Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",age:"3 years 6 months",inoculations:["adenovirus","distemper"],diseases:["right back leg mobility reduced"],parasites:["none"]},{id:3,name:"Scarlett",img:"./images/pets-1/scarlett.png",img_2x:"./images/pets-2/scarlett.png",type:"Dog",breed:"Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:"3 months",inoculations:["parainfluenza"],diseases:["none"],parasites:["none"]},{id:4,name:"Katrine",img:"./images/pets-1/katrine.png",img_2x:"./images/pets-2/katrine.png",type:"Cat",breed:"British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",age:"6 months",inoculations:["panleukopenia"],diseases:["none"],parasites:["none"]},{id:5,name:"Timmy",img:"./images/pets-1/timmy.png",img_2x:"./images/pets-2/timmy.png",type:"Cat",breed:"British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",age:"2 years 3 months",inoculations:["calicivirus","viral rhinotracheitis"],diseases:["kidney stones"],parasites:["none"]},{id:6,name:"Freddie",img:"./images/pets-1/freddie.png",img_2x:"./images/pets-2/freddie.png",type:"Cat",breed:"British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",age:"2 months",inoculations:["rabies"],diseases:["none"],parasites:["none"]},{id:7,name:"Charly",img:"./images/pets-1/charly.png",img_2x:"./images/pets-2/charly.png",type:"Dog",breed:"Jack Russell Terrier",description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:"8 years",inoculations:["bordetella bronchiseptica","leptospirosis"],diseases:["deafness","blindness"],parasites:["lice","fleas"]}]],t=document.querySelector(".first-page"),i=document.querySelector(".previous-page"),n=document.querySelector(".page-number"),s=document.querySelector(".next-page"),a=document.querySelector(".last-page"),o=document.querySelector(".pets-cards .slider__list"),r=document.querySelector(".pop-up"),l=document.querySelector(".pop-up__container"),d=document.querySelector("#pop-up__close"),c=document.querySelector(".slider__buttons");document.querySelector(".hamburger"),document.querySelector(".nav__list"),document.querySelector(".logo"),document.querySelector(".overlay");let m,u=[0,1,2,3,4,5,6,7],p=[];for(let e=0;e<6;e++)p.push(...u);let h=0;m=document.documentElement.clientWidth>=1280?8:document.documentElement.clientWidth>1280&&document.documentElement.clientWidth>=768?6:3;let g=[],y=[];for(let e=0;e<Math.ceil(p.length/m);e++)g[e]=p.slice(e*m,e*m+m),f(g[e]),y.push(...g[e]);function b(){const e=document.createElement("div");return e.classList.add("slider__item"),e}function f(e){for(let t=e.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}}function v(){const t=window.innerWidth;m=t<576?3:t<1280&&t>=576?6:8;for(let t=0;t<m;t++){const i=b();let n=y[t+h];i.setAttribute("data-petnumber",n),i.innerHTML=`<div class="slider__img">\n                            <img src='${e[n].img}' alt="${e[n].name}">\n                        </div>\n                        <div class="slider__nickname">${e[n].name}</div>\n                        <div class="slider__info-btn">\n                            <button class="btn btn_border" type="button">Learn more</button>\n                        </div>`,o.appendChild(i)}}function _(){document.querySelector(".pop-up__body").remove(),r.style.display="none",document.querySelector("body").classList.toggle("not-scroll")}window.addEventListener("load",(()=>{o.innerHTML="",v(),n.innerHTML="1",i.setAttribute("disabled","disabled"),t.setAttribute("disabled","disabled")})),s.addEventListener("click",(()=>{let e=+n.innerHTML+1;n.innerHTML=e,o.innerHTML="",console.log(h),h+=m,console.log(h),v()})),i.addEventListener("click",(()=>{let e=+n.innerHTML-1;n.innerHTML=e,o.innerHTML="",h-=m,v()})),a.addEventListener("click",(()=>{let e=Math.ceil(p.length/m);n.innerHTML=e,o.innerHTML="",h=p.length-m,v()})),t.addEventListener("click",(()=>{n.innerHTML=1,o.innerHTML="",h=0,v()})),c.addEventListener("click",(()=>{n.innerHTML>1?(i.removeAttribute("disabled","disabled"),t.removeAttribute("disabled","disabled")):(i.setAttribute("disabled","disabled"),t.setAttribute("disabled","disabled")),n.innerHTML==Math.ceil(p.length/m)?(s.setAttribute("disabled","disabled"),a.setAttribute("disabled","disabled")):(s.removeAttribute("disabled","disabled"),a.removeAttribute("disabled","disabled"))})),o.addEventListener("click",(function(t){if("slider__list_center"==t.target.id)return!0;r.style.display="block",document.querySelector("body").classList.toggle("not-scroll");const i=document.createElement("div");i.classList.add("pop-up__body");let n=t.target.closest(".slider__item").dataset.petnumber;i.innerHTML=`\n                    <div class="pop-up__img">\n                        <img src="${e[n].img_2x}" alt="${e[n].name}">\n                    </div>\n                    <div class="pop-up__text">\n                        <h3 class="title_h3">${e[n].name}</h3>\n                        <h4 class="title_h4">${e[n].type} - ${e[n].breed}</h4>\n                        <p>${e[n].description}</p>\n                        <ul>\n                            <li><strong>Age:</strong> ${e[n].age}</li>\n                            <li><strong>Inoculations:</strong> ${e[n].inoculations}</li>\n                            <li><strong>Diseases:</strong> ${e[n].diseases}</li>\n                            <li><strong>Parasites:</strong> ${e[n].parasites}</li>\n                        </ul>\n                    </div>`,l.prepend(i);let s=document.querySelector(".pop-up__body");s.addEventListener("mouseout",(()=>{d.style.backgroundColor="#F1CDB3"})),s.addEventListener("mouseover",(()=>{d.style.backgroundColor="transparent"}))})),d.addEventListener("click",_),r.addEventListener("click",(function(e){if(e.target!=this)return!0;_()}));
//# sourceMappingURL=pets.baae12a5.js.map