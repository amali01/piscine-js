function pyramid(s, n) {
    let str = "";
    let spaces = " ".repeat(s.length);
    for (var i = 0; i < n; i++) {
        str = str + spaces.repeat(n - i) + s.repeat(2 * i - 1) + "\n";
    }
    return str.slice(0, -1);
}