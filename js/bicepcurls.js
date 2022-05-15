console.log("ml5 version:", ml5.version);
var video = document.getElementById("video");
const reps = document.getElementById("reps")

var poseNet = ml5.poseNet(video, modelLoaded);
let check = true;
let state = "start"
let repsCounter = 0
function modelLoaded() {
  console.log("Model Loaded!");
}
function startRecording(){
  const chunks = []
  const rec = new MediaRecorder(video.srcObject);

  rec.ondataavailable = e => chunks.push(e.data)
  rec.onstop = e => download(new Blob(chunks))
  console.log(rec)
}

function download(blob){
  console.log("In Download")
  let a = document.createElement('a'); 
  a.href = URL.createObjectURL(blob);
  a.download = 'recorded.webm';
  document.body.appendChild(a);
  a.click();
}

function getVideo() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.srcObject = stream;
      console.log(stream);
      video.play();
      
      const chunks = []
      const rec = new MediaRecorder(video.srcObject)
      rec.start()

      rec.ondataavailable = e => chunks.push(e.data)
      rec.onstop = e => download(new Blob(chunks))

      console.log(rec)
      console.log(chunks)

      if (check) {
        poseNet.on("pose", function(results) {
          poses = results;
          if (poses.length > 0) {
            let data = checkReps(poses[0].pose);
            repsCounter += data

            if(data){
              reps.textContent = `${repsCounter}`
            }
          }
        });
      }

      startTimer(90);
    });
  }
}

$(".snap").click(function() {
  if(state === "start"){
    state = "recording"
    $(this).text("Recording...");
    getVideo();
  }
});

function startTimer(sec) {
  const myTimer = document.getElementById("countDown");

  let myMinutes = Math.floor(sec / 60),
    remSeconds = sec % 60;

  let interval = setInterval(downTime, 1000);

  function downTime() {
    if (sec > 0) {
      sec -= 1;
      myMinutes = Math.floor(sec / 60);
      remSeconds = sec % 60;
      if (remSeconds < 10) {
        myMinutes < 10
          ? (myTimer.textContent = `0${myMinutes} : 0${remSeconds}`)
          : (myTimer.textContent = `${myMinutes} : 0${remSeconds}`);
      } else {
        myMinutes < 10
          ? (myTimer.textContent = `0${myMinutes} : ${remSeconds}`)
          : (myTimer.textContent = `${myMinutes} : ${remSeconds}`);
      }
    } else {
      video.srcObject.getTracks().forEach(function(track) {
        track.stop();
      });
      clearInterval(interval);
      $("video")[0].pause();
      $(".snap").text("   Done   ");
      myTimer.textContent = "Done";
      state = "finish"
    }
  }
}

let allKeypoints = [
  "nose",
  "leftEye",
  "rightEye",
  "leftEar",
  "rightEar",
  "leftShoulder",
  "rightShoulder",
  "leftElbow",
  "rightElbow",
  "leftWrist",
  "rightWrist",
  "leftHip",
  "rightHip",
  "leftKnee",
  "rightKnee",
  "leftAnkle",
  "rightAnkle"
];

let start_frame = false;
let rstart_frame = false;
let result_count = 0;
let start_frames_index = [];
let end_frames_index = [];
let reached_down = false;
let rreached_down = false;

let ANGLE_CHECK = 180;
let DISTANCE_THRESHOLD = 20;

function vectorAngle(v1, v2) {
  var numer = v1.x * v2.x + v1.y * v2.y;
  var denom = Math.sqrt(v1.x * v1.x + v1.y * v1.y) * Math.sqrt(v2.x * v2.x + v2.y * v2.y);
  return (Math.acos(numer / denom) * 180.0) / Math.PI;
}

function checkReps(pose) {
  var repsCounter_done = false;

  leftShoulder = {
    x: pose.leftShoulder.x,
    y: pose.leftShoulder.y,
    confidence: pose.leftShoulder.confidence
  };

  rightShoulder = {
    x: pose.rightShoulder.x,
    y: pose.rightShoulder.y,
    confidence: pose.rightShoulder.confidence
  };

  leftElbow = {
    x: pose.leftElbow.x,
    y: pose.leftElbow.y,
    confidence: pose.leftElbow.confidence
  };
  // hip
  rightElbow = {
    x: pose.rightElbow.x,
    y: pose.rightElbow.y,
    confidence: pose.rightElbow.confidence
  };

  leftWrist = {
    x: pose.leftWrist.x,
    y: pose.leftWrist.y,
    confidence: pose.leftWrist.confidence
  };

  rightWrist = {
    x: pose.rightWrist.x,
    y: pose.rightWrist.y,
    confidence: pose.rightWrist.confidence
  };

  leftESVec = {
    x: leftShoulder.x - leftElbow.x,
    y: leftShoulder.y - leftElbow.y
  };

  rightESVec = {
    x: rightShoulder.x - rightElbow.x,
    y: rightShoulder.y - rightElbow.y
  };

  leftEWVec = {
    x: leftWrist.x - leftElbow.x,
    y: leftWrist.y - leftElbow.y
  };

  rightEWVec = {
    x: rightWrist.x - rightElbow.x,
    y: rightWrist.y - rightElbow.y
  };

  leftSEWAngle = vectorAngle(leftESVec, leftEWVec);
  rightSEWAngle = vectorAngle(rightESVec, rightEWVec);

  if (leftSEWAngle >= 0.9 * ANGLE_CHECK && leftShoulder.confidence > 0.1 && leftElbow.confidence > 0.1 && leftWrist.confidence > 0.1)   
      {
    if (!start_frame) {
       console.log('lstart frame')
      start_frame = true;
    } else if (start_frame && reached_down) {
       console.log('lend frame')
      start_frame = false;
      reached_down = false;
      repsCounter_done = true;
    }
  }
  if (rightSEWAngle >= 0.9 * ANGLE_CHECK && rightShoulder.confidence > 0.1 && rightElbow.confidence > 0.1 && rightWrist.confidence > 0.1)   
      {
    if (!rstart_frame) {
       console.log('rstart frame')
      rstart_frame = true;
    } else if (rstart_frame && rreached_down) {
       console.log('rend frame')
      rstart_frame = false;
      rreached_down = false;
      repsCounter_done = true;
    }
  }

  if (Math.abs(leftEWVec.y) < 30) {
    console.log('lreached down')
    reached_down = true;
  }
  if (Math.abs(rightEWVec.y) < 30){
    console.log('rreached down')
    rreached_down = true;
  }

  return repsCounter_done;
}
