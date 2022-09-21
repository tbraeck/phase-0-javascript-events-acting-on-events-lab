var dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
var dodger = document.getElementById("dodger");

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }

}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        console.log(e, "crampers");

    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
        console.log(e, "Farty babies");
    }
});





// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight();
//         console.log(e);

//     }
// });


