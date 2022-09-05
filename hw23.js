`use strict`;

// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = arr1.concat(arr2);
console.log(mergedArr);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const reversedArr = arr1.reverse();
console.log(reversedArr);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(arr4);

// 5. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран первый элемент.
const arr5 = [`js`, `css`, `jq`];
console.log(arr5.shift());

// 6. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран последний элемент.
console.log(arr5.pop());

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
let arr6 = [1, 2, 3, 4, 5];
let arr7 = arr6.filter(
    function (item) {
        return item < 4
    }
)
console.log(arr7);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
let arr8 = arr6.filter(
    function (item) {
        return item > 3
    }
)
console.log(arr8);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
let arr10 = [1, 2, 3, 4, 5];
let arr10result = arr10.slice(1, arr10.length - 1);
console.log(arr10result);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, ‘a’, ‘b’, ‘c’, 4, 5].
let arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, `a`, `b`, `c`);
console.log(arr11);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, ‘a’, ‘b’, 2, 3, 4, ‘c’, 5, ‘e’].
let arr12 = [1, 2, 3, 4, 5]
arr12.splice(1, 0, 'a', 'b');
arr12.splice(-1, 0, 'c');
arr12.splice(8, 0, 'e');
console.log(arr12);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arr13 = [3, 4, 1, 2, 7];

function sortNumbers(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

arr13.sort(sortNumbers);
console.log(arr13);

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
const arr14 = [5, 6, 7, 8, 9];
let arr14result = arr14.reduce(function (sum, elem) {
    return sum + elem;
});
console.log(arr14result);

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
let arr15 = [5, 6, 7, 8, 9];
let arr15square = arr15.map((value => value ** 2));
console.log(arr15square);

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
let arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
let negativeNumber = arr16.filter(
    function (item) {
        if (item < 0) return true;
    }
)
console.log(negativeNumber);

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
let evenNumbers = arr17.filter(
    function (item) {
        if (item % 2 === 0)
            return true;
    }
)
console.log(evenNumbers);

// 18. Дан массив со строками [‘aaa’, ‘aaaqqq’, ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr18 = [`aaa`, `aaaqqq`, `zzzqq`, `zz`, `qsaa`, `q`, `az`];
let length = arr18.filter(
    function (item) {
        return item.length > 5;
    }
)
console.log(length);


// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
let arr19 = [1, 2, [3, 4], 5, [6, 7]];
let arr19result = arr19.filter(
    function (item) {
        return Array.isArray(item);
    }
);
console.log(arr19result);


// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
let arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
let negativeNUmberCount = arr20.filter(
    function (item) {
        if (item < 0) return true;
    }
)
console.log(negativeNUmberCount.length);