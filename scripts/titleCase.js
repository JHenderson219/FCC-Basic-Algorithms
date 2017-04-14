function titleCase(str){
	return str.toLowerCase().split(' ')
						.map((e) => e.split('')
						.map((e,i) => i === 0 ? e.toUpperCase() : e ))
						.map((e,i) => e.join(""))
						.join(" ");
}
console.log(titleCase("sHoRt AnD sToUt"));
