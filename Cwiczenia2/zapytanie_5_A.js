printjson(
    db.people.aggregate([
        {
            $match: { sex: "Female", nationality: "Poland" }
        },
        {
            $unwind: "$credit"
        },
        {
            $group: {
                _id: "$credit.currency",
                "total amount": { $sum: { $toDouble: "$credit.balance" } },
                "average amount": { $avg: { $toDouble: "$credit.balance" } },
            }
        }
    ])
    .toArray()
);