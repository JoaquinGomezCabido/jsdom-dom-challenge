let counter = document.getElementById("counter");
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let like = document.getElementById("<3");
let likesList = document.querySelector(".likes");
let button = document.getElementById("pause");
let timer = setInterval(increase, 1000);
let commentsList = document.getElementById("list");
let comment = document.querySelector("#content");
let submit = document.querySelector("#submit");
let likes_array = [];

function increase() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

function decrease() {
    counter.innerText = parseInt(counter.innerText) - 1;
}

function control() {
    if (button.innerText == "pause") {
        button.innerText = "resume"
        clearInterval(timer);
    } else {
        button.innerText = "pause"
        timer = setInterval(increase, 1000);;
    }
}

plus.addEventListener("click", function (){
    increase();
});

minus.addEventListener("click", function (){
    decrease();
});

button.addEventListener("click", function (){
    control();
});

like.addEventListener("click", function (){
    if (likes_array[counter.innerHTML]) {
        likes_array[counter.innerHTML] += 1;
    } else {
        likes_array[counter.innerHTML] = 1;
    }
    let bullet = document.createElement("li");
    bullet.id = counter.innerHTML;
    let content = document.createTextNode(`${counter.innerHTML} has received ${likes_array[counter.innerHTML]} likes`);
    let identifier = counter.innerHTML;
    if (document.getElementById(identifier)) {
        document.getElementById(identifier).remove();
    };
    bullet.appendChild(content);
    likesList.appendChild(bullet);
    event.preventDefault();
});

submit.addEventListener("click", function(event){
    let bullet = document.createElement("li");
    let content = document.createTextNode(comment.value);
    document.querySelector("#content").value = "";
    bullet. appendChild(content);
    commentsList.appendChild(bullet);
    event.preventDefault();
});