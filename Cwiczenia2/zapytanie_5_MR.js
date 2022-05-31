var mapFunction = function() {
	
	this.credit.forEach(cr => emit(cr.currency, { balance: parseFloat(cr.balance), totalBalance: 0, averageBalance: 0 }));
	
};

var reduceFunction = function(key, values) {
	
	let mapBalance = values.map(x => x.balance);
	
	return {
		balance : 0,
		totalBalance : mapBalance.reduce((x,y) => x + y),
		averageBalance : mapBalance.reduce((x,y) => x + y) / mapBalance.length
	}
	
};

var finalizeFunction = function(key, reducedValue) {
	return { currency : key, totalBalance : reducedValue.totalBalance, averageBalance : reducedValue.averageBalance };
}



printjson(db.people.mapReduce(mapFunction, reduceFunction, { out: {inline:1} , finalize: finalizeFunction , query: { sex : "Female", nationality : "Poland" } }  ));