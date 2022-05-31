var mapFunction = function() {
	
	emit(this.nationality, parseFloat(this.weight) / Math.pow(parseFloat(this.height)/100, 2));
	
};

var avgReduce = function(key, values) {
	
	return values.reduce((x,y) => x + y) / values.length;
	
};

var minReduce = function(key, values) {
	
    return Math.min(...values);
	
};

var maxReduce = function(key, values) {
	
	return Math.max(...values);
	
};

var avgFinalize = function(key, reducedValue) {
	return { avg : reducedValue };
}

var minFinalize = function(key, reducedValue) {
	return { min : reducedValue };
}

var maxFinalize = function(key, reducedValue) {
	return { max : reducedValue };
}


printjson(db.people.mapReduce(mapFunction, avgReduce, { out: {inline:1} , finalize: avgFinalize }  ));
printjson(db.people.mapReduce(mapFunction, minReduce, { out: {inline:1} , finalize: minFinalize } ));
printjson(db.people.mapReduce(mapFunction, maxReduce, { out: {inline:1} , finalize: maxFinalize } ));