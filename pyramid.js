function pyramid(char, n) {
    let str = "";
    let spaces = " ".repeat(char.length);
    for (var i = 0; i < n; i++) {
        str = str + spaces.repeat(n - i) + char.repeat(2 * i - 1) + "\n";
    }
    return str.slice(0, -1);
}