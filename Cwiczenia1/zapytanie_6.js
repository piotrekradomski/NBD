printjson(db.people.insertOne( 
    { "sex":"Male","first_name":"Piotr","last_name":"Radomski","job":"Developer","email":"s24212@pjwstk.edu.pl","location":{"city":"Warsaw","address":{"streetname":"Koszykowa","streetnumber":"86"}},"description":"PJATK","height":"172","weight":"62","birth_date":"1996-06-23T05:20:00Z","nationality":":Poland","credit":[ {"type":"jcb","number":"119195112892550","currency":"PLN","balance":"50000"} ]}
));

printjson(db.people.find( { last_name: "Radomski" } ));