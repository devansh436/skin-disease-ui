const axios = require("axios");
const fs = require("fs");

const image = fs.readFileSync("image.png", {
    encoding: "base64"
});

axios({
    method: "POST",
    url: "https://detect.roboflow.com/yolov8-skin-disease-detection/1",
    params: {
        api_key: "zj7yhNf5EmQn8YoO4EVT"
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(function(response) {
    diseaseClass = response.data.predictions?.[0]?.class;
    confidence = response.data.predictions?.[0]?.confidence*100;
    console.log(`Class : ${diseaseClass}`);
    console.log(`Confidence: ${confidence}`);
})
.catch(function(error) {
    console.log(error.message);
});