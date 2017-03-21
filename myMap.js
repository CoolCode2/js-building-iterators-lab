// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(array, callback) {

		let newThingArray = [];

	for(let i = 0; i < array.length; i++){
		newThingArray.push(callback(array[i], i, array));

	}
	return newThingArray;

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
