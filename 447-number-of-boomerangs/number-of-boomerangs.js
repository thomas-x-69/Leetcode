/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
     let count = 0;
    
    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        
        for (let j = 0; j < points.length; j++) {
            if (i != j) {
                let distance = DistanceCalculator(points[i], points[j]);
                map.set(distance, (map.get(distance) || 0) + 1);
            }
        } 
        for (let value of map.values()) {
            count += value * (value - 1); 
        }
    }
   
    
    return count;

};
function DistanceCalculator(point1, point2) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
}