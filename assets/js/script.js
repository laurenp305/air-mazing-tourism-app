//WHEN user inputs city
//THEN list of flights show up and weather details for that location

// Real-Time Flights


const APIKey = cd340a575bd3d2c4abb310150d155c79,
const queryURL = "https://api.aviationstack.com/v1/flights" 
+ cityName + "&appid=" + APIKey;
    
// // optional parameters: 

//     & limit = 100
//     & offset = 0
//     & callback = MY_CALLBACK
//     // more parameters available 