// 1. Find The Parity Outlier https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
    var result = integers.filter(function (item) {
        return item % 2 == 0;
    });

    if (result.length == 1) {
        return result[0];
    } else {
        return integers.filter(function (item) {
            return item % 2 != 0;
        })[0];
    }
}

// 2. Exes and Ohs https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    var arr = str.toLowerCase().split('');

    var arrX = arr.filter(function (item) {
        return item === 'x';
    });

    var arrO = arr.filter(function (item) {
        return item === 'o';
    });

    return arrX.length === arrO.length;
}

// 3. Shortest Word https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
    var arr = s.split(' ');

    var result = arr.map(function (item) {
        return item.length;
    });

    result.sort(function (a, b) {
        return a - b;
    });

    return result[0];
}

// 4. Vowel Count https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    var vowelsCount = 0;
    var vowelsList = 'aeiou';

    for (i = 0; i < str.length; i++) {
        if (vowelsList.indexOf(str[i]) !== -1) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

// 5. List Filtering https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    return result = l.filter(function (item) {
        return typeof item === 'number';
    });
}

// 6. Isograms https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
    var string = str.toLowerCase();

    if (string.length === 0) {
        return true;
    }

    for (i = 0; i < string.length; i++) {
        var pos = 0;
        var count = 0;

        while (true) {
            var foundPos = string.indexOf(string[i], pos);
            if (foundPos === -1) {
                break;
            }
            pos = foundPos + 1;
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}

// 7. Jaden Casing Strings https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
    var str = this.toString();
    var array = str.split(' ');
    var newArray = array.map(function (item) {
        return item[0].toUpperCase() + item.slice(1);
    });
    return newArray.join(' ');
};
