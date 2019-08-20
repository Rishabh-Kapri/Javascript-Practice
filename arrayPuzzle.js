// array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// array = [1,'2','3',2];
array = ["1", 2, "4", "591", 392, "391", 2, 5, "10", 2, "1", "1", 1, 20, 20];

//sort the array
function sortArray (array) {
	return array.sort((a, b) => a - b); //javascript sort() sorts arrays in alphabetical order by default
}

function cleanTheRoom (array) {
	//check if the next number is the same as the previous
	//if yes then create a new array
	//else push the number to the answer array

	sortArray(array);
	let answer = [];
	let temp = [];

	for (let i=0; i<array.length; i++){

		if (array[i] === array[i+1])
			temp.push(array[i]);
		else if (temp.length){  //means there is one last number to push as the comparisons are 1 less
			temp.push(array[i]);
			answer.push(temp);
			temp = [];
		}
		else 
			answer.push(array[i]);
	}
	return answer;
}

function separate (array) {
	//filter the array into two separate array based on type
	let numberArr = array.filter(el => typeof(el) === 'number');
	let stringArr = array.filter(el => typeof(el) === 'string');

	return [cleanTheRoom(numberArr), cleanTheRoom(stringArr)];
}

console.log(separate(array));
