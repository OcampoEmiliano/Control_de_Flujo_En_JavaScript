let num = [0,1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < num.length; index++) {
    console.log(num[index]);
    if ((num[index] % 2) == 0) {
        console.log("par")
    } else {
        console.log("impar")
    }
}