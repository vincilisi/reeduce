array_1=[15, 31, 328]

var somma = 0;
for (var i = 0; i < array_1.length; i++) {
    somma += array_1[i];
}


var media = somma / array_1.length;




const average = array_1.reduce((sum, num) => sum + num, 0) / array_1.length;

array_1.forEach((value) => {
    if (value < average) {
        console.log(value);
    }
});

console.log(media);