const x = 1;
const y = 2;
const z = 3;

(function first(){
    const x = 1;
    const y = 2;
    const z = 3;
    (function second(){
        const x = 3;
        const y = 4;
        const z = 5;

        (function third(){
            const x = 5;
            const y = 6;
            const z = 7;
        })();
        console.log(`${x}, ${y}, ${z}`);
    })();
})();