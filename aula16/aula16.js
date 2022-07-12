(function readyJS(win, doc) {
    // 'use strict';
    // // let type = null;
    // // console.log(typeof type);
    // let arr = [0, 1, 'Dilma', false, null, { age: 34, weight: 54.6 }];
    // let obj = { name: 'Godofredo', city: 'Chopinzinho' };
    // for (let x = 0; x < arr.length; x++) {
    //     if (typeof arr[x] == 'number') {
    //         console.log(arr[x]);
    //     }
    // }
    // console.log(Array.isArray(arr));
    let data = {
        car: {
            year: 2018,
            color: 'yellow',
            arr: [0, 1, 2, 3]
        }
    };
    let data2 = '{"name":"Tonho","age":27}';
    console.log(JSON.stringify(data));//transforma em json
    console.log(JSON.parse(data2));//transforma em objeto

})(window, document);