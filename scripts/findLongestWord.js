function findLongestWord(str){
	return str.split(' ').map(e => e.length).reduce((a,b) => a>b ? a : b);
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));