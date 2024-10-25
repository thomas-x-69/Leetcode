/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    let sortedFolder = folder.sort();
    let res = [sortedFolder[0]];
    let last = sortedFolder[0]
    for (let i = 1; i < sortedFolder.length; i++) {
        if (sortedFolder[i].startsWith(last + '/')) {
            continue;
        } else {
            res.push(last = sortedFolder[i]);
        }
    }
    return res
};