/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (i = 0; i < 9; i++) {
        let row = new Set(),
            col = new Set(),
            box = new Set();
        for (j = 0; j < 9; j++) {
            R = board[i][j]
            C = board[j][i]
            B = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

            if (R!=".")
            {
                if(row.has(R))return false
                row.add(R)
            }
            if (C!=".")
            {
                  if(col.has(C))return false
                col.add(C)
            }
            if (B!=".")
            {
                  if(box.has(B))return false
                box.add(B)
            }
        }

    }
    return true
};