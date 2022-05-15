## 💡 Inspiration
- The pandemic has restricted us to stay at home and has taken a huge toll in our physical well-being
- Exercising within our house boundaries is a real challenge.
- We've developed a novel application to accurately track the count of certain curated indoor exercises and get the amount of calories burnt
- This is a cheap, free-to-use alternative to measure the effectivness of your workout session  

## 💻 What it does
- The website uses AI to recognise the number of _pushups/squats and bicep curls_
- It then calculates the calories burnt and notifies the user in their mobile phones
- The user can select any kind of excerises and do them.

![Model]()

## ⚙️ How we built it
- The site runs on mediapipe, posenet, js.
- We've used mediapipe to detect user motion and then calculate the number of reps.
- A report is generated and sent as a message using the Twilio API.
- The user can end the session anytime if they wanted, just by clicking "Stop".

![Architecture](https://cdn.discordapp.com/attachments/821039436137103410/933269090393542676/unknown.png)

## 🧠 Challenges we ran into
- Application hangs, screen freezes because the tensorflow was blocking the camera.
- Organising the structure of the project.
- Tweaking with the mediapipe AI model to accurately detect the type of motion.

## 📖 What we learned
- Mediapipe using Javascript
- Running AI models for posture detection.
- Using Twilio for sending messages.
- AssemblyAI API for posting user datas and result in CockroachDB

## 📧 Use of Google Cloud
- Google Cloud offers text to voice conversion.
- We used google cloud speech conversation for voice control exercise web application.

## 📧 Use of Assembly.AI API
- We used Assembly.AI API for storing user info in CochroachDB.
- It used for a safe and secure transformation of data.
- We will be using user authentication for user login in future.

## 📖 Use of Deso
- Deso is a decentralized social application and it is open source & on chain open data
- We used deso for login, logout purpose and also for transactions occurs in our website.

## 📧 Use of Twilio
- We used Twilio to send users report to our users. 
- Twilio is safe and secure API for sending text messages.

![Twilio Message](https://discord.com/channels/@me/821039436137103410/927475056794292275)

## 🚀 What's next for FitnessZone
- Parsing the voice commands using NLP.
- Smart execrise recommendation system.
- Accurate detection using deep learning models.
- More exercise recognization.

## 🏅 Accomplishments that we're proud of
- We're glad to sucessfully complete this project!
- The end goal was achieved to a satisfactory level and the outcome would help us as well to excerise at home.

## 🔨 How to run
- Fork repo
- Run index.html file in the html folder