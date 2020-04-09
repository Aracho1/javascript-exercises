const repeatString = function(a, b) {
	if (b > 0) {
		return a.repeat(b);
	}
	else if (b < 0) {
		return 'ERROR'
	}
	else {
		return ""
	}
}

module.exports = repeatString
