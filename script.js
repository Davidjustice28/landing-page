function zoom(id,scale) {
    document.getElementById(id).style.transform = `scale(${scale})`
}
setTimeout(() => {
    zoom("main-logo", 1)
    setTimeout(() => {
        document.querySelector("h3").style.opacity = "1"
    }, 1000);
}, 500)

const h1 = document.querySelector("h1")

window.onscroll = function loadheader() {
    if(document.documentElement.scrollTop> 75) {
        h1.style.opacity = "1"
    }else {
        h1.style.opacity = "0"
    }
}


const div1 = document.getElementById("info1")
div1.addEventListener("mouseover", () => zoom("example1",1 ))
div1.addEventListener("mouseout", () => zoom("example1", .7))
const div2 = document.getElementById("info2")
div2.addEventListener("mouseover", () => zoom("example2", 1))
div2.addEventListener("mouseout", () => zoom("example2", .7))
const div3 = document.getElementById("info3")
div3.addEventListener("mouseover", () => zoom("example3",1 ))
div3.addEventListener("mouseout", () => zoom("example3", .7))
const div4 = document.getElementById("info4")
div4.addEventListener("mouseover", () => zoom("example4",1 ))
div4.addEventListener("mouseout", () => zoom("example4", .7))
