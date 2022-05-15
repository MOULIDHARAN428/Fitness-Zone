const axios = require("axios");

const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "YOUR-API-TOKEN",
        "content-type": "application/json",
    },
});
assembly
    .post("/transcript", {
        audio_url: "https://bit.ly/3yxKEIY"
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

// curl --request POST 
//   --url https: api.assemblyai.com/v2/
//   --header 'authorization: ###'
  
const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "YOUR-API-TOKEN",
        "content-type": "application/json",
    },
});
assembly
    .get(`/transcript/${YOUR-TRANSCRIPT-ID-HERE}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

const axios = require("axios"); const fs = require("fs");
const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "YOUR-API-TOKEN",
        "content-type": "application/json",
        "transfer-encoding": "chunked",
    },
});
const file = "PATH-TO-YOUR-FILE";
fs.readFile(file, (err, data) => {
    if (err) return console.error(err);

    assembly
        .post("/upload", data)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));

const assembly = axios.create({ baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "YOUR-API-TOKEN",
        "content-type": "application/json",
    },
});
assembly
    .post("/transcript", {
        audio_url: "https://bit.ly/3yxKEIY"
    })
    .then((res) => console.log(res.data))

const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "YOUR-API-TOKEN",
        "content-type": "application/json",
    },
});
assembly
    .post("/transcript", {
        audio_url: "https://bit.ly/3yxKEIY",
        webhook_url: "https://postb.in/1561597007927-8767862515524"
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

// let socket;
// const token =
//   "#";

socket = new WebSocket(
  `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`
);


// const assembly = axios.create({
//     baseURL: "https://api.assemblyai.com/v2",
//     headers: {
//         authorization: "YOUR-API-TOKEN",
//         "content-type": "application/json",
//     },
// });
// assembly
//     .post("/transcript", {
//         audio_url: "https://bit.ly/3yxKEIY"
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.error(err));
