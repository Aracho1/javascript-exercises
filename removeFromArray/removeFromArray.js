const removeFromArray = function() {
	for (var i = 0; i < arguments.length; i++) {
		var array = arguments[0]
		var index = array.indexOf(arguments[i])
		if (index !== -1) array.splice(index, 1)
	}
		return array;
}

module.exports = removeFromArray
