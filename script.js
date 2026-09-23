const words = [
"Naval Architecture Undergraduate",
"Web Developer",
"Programmer",
"DSA Solver",
"Student Athlete",
"Self Learner"
];

let i = 0;

function typeEffect() {

document.getElementById("typing").innerHTML =
words[i];

i++;

if(i >= words.length){
i = 0;
}

}

setInterval(typeEffect,2000);

typeEffect();