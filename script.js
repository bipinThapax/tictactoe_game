// practicing tic tac toe game

// logic:
// 1. When clicking box text should be either X or O
// 2. when X or O are same in a row/column/diagonal either of them wins.
// 3. when one wins, it should show congrats msg along with restart btn
// 4. if no one wins, it should show proper msg and restart btn
// 5. reset btn makes all box clear.  


// winning combination
/*
1-2-3   1-5-9   1-4-7
4-5-6   3-5-7   2-5-8
7-8-9           3-6-9  
*/

let boxArr = document.querySelectorAll(".box")

let even = true
boxArr.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerHTML == "") {
            if (even) {
                e.innerHTML = "X"
                even = false
            } else {
                e.innerHTML = "O"
                even = true
            }
        }
    })
})

