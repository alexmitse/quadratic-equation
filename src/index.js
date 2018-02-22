module.exports = function solveEquation(equation) {
    let arr = equation.split(' ');
    let D;
    if (arr[7] == '-')
        D = (+arr[4]) * (+arr[4]) + (4 * (+arr[0]) * ((+arr[8])));
    else
        D = (+arr[4]) * (+arr[4]) - (4 * (+arr[0]) * (+arr[8]));
    let x1, x2;
    if (arr[3] == '-') {
        x1 = ((+arr[4]) + Math.sqrt(D)) / (2 * (+arr[0]));
        x2 = ((+arr[4]) - Math.sqrt(D)) / (2 * (+arr[0]));
    }
    else {
        x1 = (+(-arr[4]) + Math.sqrt(D)) / (2 * (+arr[0]));
        x2 = (+(-arr[4]) - Math.sqrt(D)) / (2 * (+arr[0]));
    }
    x1 = Math.round(x1)
    x2 = Math.round(x2);
    let result = [];
    if (x1 < x2)
        result.push(x1, x2);
    else
        result.push(x2, x1);

    return result;
}