// You should implement your task here.

module.exports = function towelSort(arr) {
    let newarr = [];
    if (arr === undefined || arr.length === 0) {
        return newarr;
    }
    for (let i=0; i < arr.length; i++) {
        if (i%2!=0){
            arr[i].reverse()
        }
    }
    arr.forEach(function (elem) {
        elem.forEach(function (item) {
            newarr.push(item);
        });
    });
    return newarr;
};
