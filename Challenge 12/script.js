const e = document.getElementsByTagName("div");
console.log(e);

for(let i = 0; i < e.length; i++) {

    let random = Math.random();
    console.log(random);
    if (random <= 0.20) {
        e[i].style.backgroundColor = "red";

    } else if (random <= 0.40) {
        e[i].style.backgroundColor = "blue";

    } else if (random <= 0.60) {
        e[i].style.backgroundColor = "green";

    } else if (random <= 0.80) {
        e[i].style.backgroundColor = "yellow";

    } else {
        e[i].style.backgroundColor = "purple";
    }
}

// when i am runnig the code in console it's actually workig but in editor it's showing undefined style property
