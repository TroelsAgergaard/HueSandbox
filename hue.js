fetch('https://192.168.8.100/api/T1J3yE8iLzoWVD2ciiGM9djYHAp5INR417yk9z2f/lights/1/state', {
    method: "PUT",
    body: JSON.stringify({
        "on": true,
        "bri": 82,
        "xy":[0.475,0.322]
    })
}).then(data => {
    console.log(data)
})
