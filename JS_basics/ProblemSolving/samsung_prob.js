function splitNcap(strn) {
  let strng = "";
  let finalst = "";
  let arr = [];
  for (i = 0; i < strn.length; i++) {
    if (i == 0) {
      strng += strn[i].toUpperCase();
    } else if (str[i] == " ") {
      arr.push(strng);
      strng = [];
      i++;
      strng += strn[i].toUpperCase();
    } else {
      strng += strn[i];
    }
  }
  arr.push(strng);
  for (i = arr.length - 1; i >= 0; i--) {
    finalst += arr[i];
  }
  return finalst;
}

let str = "welcome to bengaluru samsung";
console.log(splitNcap(str));
