printjson(
    db.people.aggregate([
        {
            $unwind: "$credit"
        },
        {
            $group: {
                _id: "$credit.currency",
                "total amount": { $sum: { $toDouble: "$credit.balance" } }
            }
        }
    ])
    .toArray()
);