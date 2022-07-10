function gerar() {
    //let a = 1, b = -5, c = 6;
    let valor_a = window.document.getElementById("valor_a");
    let a = Number.parseFloat(valor_a);
    let valor_b = window.document.getElementById("valor_b");
    let b = Number.parseFloat(valor_b);
    let valor_c = window.document.getElementById("valor_c");
    let c = Number.parseFloat(valor_c);

    let delta = b * b - 4 * a * c;
    let xv = -b / 2 * a;
    let yv = -delta / (4 * a);
    console.log(`delta = ${delta}`);
    console.log(`xv = ${xv}`);
    console.log(`yv = ${yv}`);
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`x1 = ${x1}`);
        console.log(`x2 = ${x2}`);
    }
    else if (delta == 0) {
        console.log(`x1 = x2 = ${xv}`);
    }
    else {
        const imag = Math.sqrt(-delta) / (2 * a);
        if (xv == 0) {
            console.log(`x1 = ${imag}i`);
            console.log(`x2 = -${imag}i`);
        }
        else {
            console.log(`x1 = ${xv} + ${imag}i`);
            console.log(`x2 = ${xv} - ${imag}i`);
        }
    }
}