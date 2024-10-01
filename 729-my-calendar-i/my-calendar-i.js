var MyCalendar = function () {
    this.calendar = []
};
MyCalendar.prototype.book = function (start, end) {
    for (let x of this.calendar) {
        if (((start < x[0]) && (end > x[0])) || (start == x[0]) || ((start > x[0]) && (start < x[1]))) return false
    }
    this.calendar.push([start, end])
    return true
};