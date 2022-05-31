let mapFunction = function() {
	emit(this.sex, { weight: parseFloat(this.weight), height: parseFloat(this.height) });
};

let reduceFunction = function(key, values) {
	
	let w = values.map(v => v.weight);
	let h = values.map(v => v.height);
	
	let myAvg = obj => obj.reduce((x,y) => x + y) / obj.length;
	
	return {
		weight: myAvg(w),
		height: myAvg(h)
	};
};

printjson(db.people.mapReduce(mapFunction, reduceFunction, { out: {inline:1} } ));