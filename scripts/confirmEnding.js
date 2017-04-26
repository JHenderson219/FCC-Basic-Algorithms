function confirmEnding(str,target){
	const TGT_LEN = target.length;
	return target ? str.slice(str.length-TGT_LEN,str.length) === target : undefined;
}

console.log(confirmEnding("Bastian", "ian"));