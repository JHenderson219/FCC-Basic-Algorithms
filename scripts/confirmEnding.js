function confirmEnding(str,target){
	return target ? str.slice(str.length-target.length,str.length) === target : undefined;
}

console.log(confirmEnding("Bastian", "ian"));