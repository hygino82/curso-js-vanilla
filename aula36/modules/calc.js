function sum(x, y) {
    return x + y;
}

function multi(x, y) {
    return x * y;
}

function percent(value, total) {
    return multi(value, 100) / total + '%';
}

export { percent };