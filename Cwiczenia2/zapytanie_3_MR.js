let mapFunction = function() {
	
	emit(this.job, this.job);
	
};

let reduceFunction = function(key, values) {
	
	return null;
	
};

printjson(db.people.mapReduce(mapFunction, reduceFunction, { out: {inline:1} } ));