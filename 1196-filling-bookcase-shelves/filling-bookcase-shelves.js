/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
   // Initialize an array to store the minimum height for each position
   let minHeight = new Array(books.length + 1).fill(0);

   // Iterate through each book
   for(let i = 0; i < books.length; i++){
       let [currWidth, currHeight] = books[i];

       // Update the total height at the current position
       minHeight[i + 1] = minHeight[i] + currHeight;

       // Iterate through previous books to find the optimal height and width combination
       for(let book = i - 1; book >= 0; book--){
           // If adding the current book exceeds the shelf width, break the loop
           if(currWidth + books[book][0] > shelfWidth) break;

           // Update the current width and height based on the added book
           currWidth += books[book][0];
           currHeight = Math.max(currHeight, books[book][1]);

           // Update the total height at the current position with the optimal combination
           minHeight[i + 1] = Math.min(minHeight[i + 1], minHeight[book] + currHeight);
       }
   } 

   // Return the minimum height needed for the entire shelf
   return minHeight[books.length];
};