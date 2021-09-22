const character = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "]

const spinner = function(char) {
    let delay = 100;
    for (const c of char) {
       setTimeout(() => {process.stdout.write(c)}, delay)
       delay += 200;
    }
    setTimeout(() => {process.stdout.write("\n")}, 1000);
};    

const res = spinner(character);
console.log(res);