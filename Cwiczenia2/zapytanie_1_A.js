printjson(
    db.people.aggregate( 
        { 
            $group: {
                _id: "$sex",
                "average weight": { $avg: { $toDouble: "$weight" } },
                "average height": { $avg: { $toDouble: "$height" } }
            }
        })
);