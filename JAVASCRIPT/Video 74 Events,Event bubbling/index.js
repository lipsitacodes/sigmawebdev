let btn = document.getElementById("btn")
btn.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = " <b>Yaayyy you were clicked</b> Enjoy your click!"
})

btn.addEventListener("contextmenu", () => {
    alert("Don't Hack us by Right click please")
})

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);

})                            