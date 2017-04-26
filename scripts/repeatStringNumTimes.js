function repeatStringNumTimes (str, num){
	let strArr = [];
	for (let i=0; i<num; i++){
		strArr.push(str)
	}; 
	return num > 0 ? strArr.reduce((acc,cv) => acc.concat(cv), 0) : "";
}
console.log (repeatStringNumTimes("*",3))