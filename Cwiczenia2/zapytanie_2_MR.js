let mapFunction = function() {
	
	this.credit.forEach( x => emit(x.currency, parseFloat(x.balance)) );
	
};

let reduceFunction = function(key, values) {
	
	return values.reduce((x,y) => x + y);
	
};

printjson(db.people.mapReduce(mapFunction, reduceFunction, { out: {inline:1} } ));