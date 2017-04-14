function palindrome (str) {
	let saniStr = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
	console.log(saniStr)
return saniStr === saniStr.split("").reverse().join("");
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));