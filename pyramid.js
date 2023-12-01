function pyramid(str, num) {
    let res = "";
    for (let i = 0; i < num; i++) {
      // Add spaces for alignment
      for (let k = 0; k < num - i - 1; k++) {
        res += " ";
      }
      // Add asterisks for the pyramid
      for (let j = 0; j < 2 * i + 1; j++) {
        res += str;
      }
      // Move to the next line if not the last level
      if (i !== num - 1) {
        res += "\n";
      }
    }
    return res;
  }
