//====================================
// Select Elements
//====================================

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");
const scrollTopBtn = document.querySelector(".scroll-top");

//====================================
// Mobile Menu
//====================================

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.classList.toggle("fa-xmark");

});

//====================================
// Close Menu After Click
//====================================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.classList.remove("fa-xmark");

    });

});

//====================================
// Window Scroll
//====================================

window.addEventListener("scroll", () => {

    // Sticky Header

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

    // Back To Top Button

    if(window.scrollY > 500){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

    // Active Navbar Links

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

//====================================
// Back To Top
//====================================

scrollTopBtn.addEventListener("click", (e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
//====================================
// Dark Mode
//====================================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

        localStorage.setItem("theme","light");

    }else{

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

        localStorage.setItem("theme","dark");

    }

});

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");

}

//====================================
// Typing Effect
//====================================

const typingText = document.querySelector(".typing-text");

const words = [

    "Developer",
    "Designer",
    "Freelancer",
    "Programmer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typingEffect,1200);

            return;

        }

    }else{

        typingText.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect,deleting?60:120);

}

typingEffect();

//====================================
// Scroll Reveal
//====================================

const revealElements = document.querySelectorAll(

".section-title,.about-container,.skill-card,.project-card,.service-card,.contact-container"

);

function reveal(){

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight-120){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

//====================================
// Skills Animation
//====================================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card,index)=>{

    card.style.transitionDelay = `${index*0.1}s`;

});
//====================================
// Loading Screen
//====================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.remove();

        },700);

    }

});

//====================================
// Smooth Scroll
//====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

//====================================
// Project Filter
//====================================

const filterButtons=document.querySelectorAll(".filter-btn");

const projectCards=document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const filter=button.dataset.filter;

        projectCards.forEach(card=>{

            if(filter==="all"){

                card.style.display="block";

            }else if(card.dataset.category===filter){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

});

//====================================
// Counter Animation
//====================================

const counters=document.querySelectorAll(".counter");

let started=false;

window.addEventListener("scroll",()=>{

    const stats=document.querySelector(".stats");

    if(!stats) return;

    if(window.scrollY>=stats.offsetTop-400 && !started){

        counters.forEach(counter=>{

            const target=+counter.dataset.target;

            let count=0;

            const speed=target/100;

            const update=()=>{

                count+=speed;

                if(count<target){

                    counter.innerText=Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=target;

                }

            }

            update();

        });

        started=true;

    }

});

//====================================
// Image Hover Animation
//====================================

document.querySelectorAll(".project-card img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

//====================================
// Console Message
//====================================

console.log("%cWelcome To My Portfolio 🚀","color:#3b82f6;font-size:20px;font-weight:bold;");