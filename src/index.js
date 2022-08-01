module.exports = function towelSort(matrix) {
    const result = [];
    if (!(matrix)) return result;
    matrix.forEach((item, index) => {
        if (index % 2 === 0) return result.push(...item);
        result.push(...item.reverse());
    });

    return result;
}
