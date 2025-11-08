let winMsg = document.querySelector(".winMsg")
let boxArr = document.querySelectorAll(".box")

let even = true
let checked = 0

boxArr.forEach(e => {
    e.addEventListener("click", () => {
        if (e.textContent == "") {
            if (even) {
                e.textContent = "X"
                even = false
                checked++
                if (checked > 3) {
                    checkWin()
                }
            } else {
                e.textContent = "O"
                even = true
                checked++
                if (checked > 3) {
                    checkWin()
                }
            }
        }
    })
})

// winning logic
const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let winArr = Array.from(boxArr) // 9 boxes array

function checkWin() {
    wins.forEach(elem => {
        if (boxArr[elem[0]].textContent == "" || boxArr[elem[1]].textContent == ""
            || boxArr[elem[2]].textContent == "") {
            return;
        } else {
            if (boxArr[elem[0]].textContent == boxArr[elem[1]].textContent && boxArr[elem[1]].textContent == boxArr[elem[2]].textContent) {
                winMsg.innerHTML = `Congratulation, ${boxArr[elem[0]].textContent} Win!!`
            } else if (checked === 9 && !winMsg.textContent) {
                winMsg.textContent = "It's a draw!";
            }
        }
    });
}

// reset game
let resetBtn = document.querySelector(".btn button")
resetBtn.addEventListener("click", reset)

function reset() {
    winArr.forEach(element => {
        element.innerHTML = ""
        winMsg.innerHTML = ""
    });
}