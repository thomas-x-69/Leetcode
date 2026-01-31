/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // check the big box 
    // check the row and col in smaller loop 
    // if contains duplicate then return false
    // else return true

    for (i = 0; i < 9; i++) {

        let Inrow = new Set()
        let Incol = new Set()
        let Inbox = new Set()
        for (j = 0; j < 9; j++) {
            let Row = board[i][j]
            let Col = board[j][i]
            let Box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

        if (Row != ".") {
                if (Inrow.has(Row)) return false
                Inrow.add(Row)
            }

            if (Col != ".") {
                if (Incol.has(Col)) return false
                Incol.add(Col)
            }

            if (Box != ".") {
                if (Inbox.has(Box)) return false
                Inbox.add(Box)
            }


        }
    }
    return true
};