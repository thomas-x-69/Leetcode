var minDays = function (bloomDay, m, k) {
    function bouquetFormed(bloomDay, day, conFlower) {
        let bouquet = 0;
        let temp = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= day) {
                temp++;
            } else {
                bouquet += ~~(temp / conFlower);
                temp = 0;
            }
        }
        bouquet += ~~(temp / conFlower);
        return bouquet;
    };

    let n = bloomDay.length;
    if (m * k > n) {
        return -1;
    }

    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let bouquet = bouquetFormed(bloomDay, mid, k);

        if (bouquet >= m) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};