// 1
document.addEventListener("DOMContentLoaded", () => {
    let time = 0;
    const interval = setInterval(() => {
        if (time < 60) {
            time += 5;
            console.log("sec: " + time);
        }
    }, 5000);
    setTimeout(() => {
        clearInterval(interval);
    }, 60 * 1000);
});
// 2 
function getFunction() {
    let info = "info";
    return function (value) {
        return info + " " + value;
    };
}
const myFunction = getFunction();
console.log(myFunction('lala'));
