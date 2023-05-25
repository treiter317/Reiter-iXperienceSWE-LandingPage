var imgSrc = ["headshot.jpg", "elephant.jpg", "wrecker22.jpg", "doggos.jpg", "safariexplorer.jpg"]
var imgAlt = ["Picture of me", "Picture of me feeding elephant", "Picture of me in powerlifting competition", 
                "Picture of me with my dogs", "Picture of me on Safari"]
let count = 0;

function changeImage() {
    let img = document.getElementById("picture")
    let index = count % 5
    img.setAttribute("src", "assets/pictures/" + imgSrc[index])
    img.setAttribute("alt", imgAlt[index])
    count++
}


function showJSMessage() {
    document.getElementById("nextimage").textContent = "Yay Javascript!"
}

function revertMessage() {
    document.getElementById("nextimage").textContent = "Next Image!"
}