function titleCase(str){
	return str.split(' ')
						.map((e) => e.split('')
						.map((e,i) => i === 0 ? e.toUpperCase() : e ))
						.map((e,i) => e.join(""))
						.join(" ");
}
console.log(titleCase("I'm a little tea pot"));
