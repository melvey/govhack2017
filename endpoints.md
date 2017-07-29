
# GET /nests
Fetch all nests in the following data format
```JSON
[
	{
		"hostId": 1,
		"hostName": "Kian Soon Hoon",
		"suburb": "Nightcliff",
		"campusDist": "2.5km",
		"price": 110,
		"minStay": "1 month",
		"photo": "/photos/2afsdrqr23r.jpg"
	}
]
```

# GET /nest/:id
```JSON
{
	"hostId": 1,
	"hostName": "Kian Soon Hoon",
	"address": "Bougainvillea St, Nightcliff",
	"campusDist": "2.5km",
	"price": 110,
	"minStay": "1 month",
	"photo": "/photos/2afsdrqr23r.jpg",
	"amenities": "Internet, Offstreet parking",
	"facilities": [
		{
			"type": "park",
			"distance": "120m",
		}
	]
}
```
