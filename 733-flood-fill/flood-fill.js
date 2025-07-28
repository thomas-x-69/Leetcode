/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const orgCol = image[sr][sc];
    if (orgCol === color) return image;
    const rows = image.length, cols = image[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || visited[r][c] || image[r][c] !== orgCol) {
            return;
        }
        image[r][c] = color;
        visited[r][c] = true;

        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }

    dfs(sr, sc);
    return image;
};