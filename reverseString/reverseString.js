const reverseString = function(sentence) {
	let splitWords = sentence.split(" ")
	let array = []
	for (var i = 0; i < splitWords.length; i++) {
		var splitLetters = splitWords[i].split("").reverse().join("")
		array.unshift(splitLetters)
	}
		return array.join(" ")
	}

module.exports = reverseString
