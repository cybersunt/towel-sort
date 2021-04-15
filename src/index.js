module.exports = function towelSort (matrix) {
    if (Array.isArray(matrix)) {
        return matrix.map((el, index)=> Array.isArray(el) && (index - 1) % 2 === 0 ? el.sort((a,b) => b - a) : el.sort((a,b) => a - b)).flat();
    }
    if (Array.isArray(matrix) && matrix.lenght === 0) {
        return [];
    }
    if (matrix === undefined) {
        return [];
    }
}
