// 1071. Greatest Common Divisor of Strings
// Easy

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {

        return "";
    }

    let n = str1.length;

    let k = str2.length;

    let gcds = function (x, y) {
        
        if (!y) {
            return x;
        }
        return gcds(y, x % y);
    }

    let div = gcds (n, k);

    return str1.slice(0, div);
};