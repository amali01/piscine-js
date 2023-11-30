function RNA(s){
    let res = ""
    for (let i = 0 ; i < s.length ; i++) {
      if (s[i]==='G'){
        res += 'C'
      }else if (s[i]==='C'){
        res += 'G'
      }else if (s[i]==='T'){
        res += 'A'
      }else if (s[i]==='A'){
        res += 'U'
      }
    }
    return res
}

function DNA(s){
    let res = ""
    for (let i = 0 ; i < s.length ; i++) {
      if (s[i]==='C'){
        res += 'G'
      }else if (s[i]==='G'){
        res += 'C'
      }else if (s[i]==='A'){
        res += 'T'
      }else if (s[i]==='U'){
        res += 'A'
      }
    }
    return res
}