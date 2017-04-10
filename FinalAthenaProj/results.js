const request = require('request-promise-native')
const express = require('express')
const router = express.Router()

// YOUR KEY HERE
var EMOTION_KEY = '5cff1de31620408a839dcd0304dfc345'
var EMOTION_URL = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?subscription-key=' + EMOTION_KEY

var FACE_KEY = 'f32be374196d4295964eb6805d465e0a'
var FACE_URL = 'url' + FACE_KEY

var RECOMMEND_KEY = 'dfabb956f40d4f9e9e190791c1e24954'
var RECOMMEND_URL = 'url' + RECOMMEND_KEY



router.post('/', function (req, res, next) {
  var url = req.body.url

  Promise.all([
    // MAKE CALL TO COG SERVICES
    callAPI(url)
  ]).then(([response]) => {
    var results = response

    // PARSE RESULTS HERE
    var topEmotion = parseResponse(results)

    // DETERMINE WHICH IMAGE TO DISPLAY
     var suggestion = makeSuggestion(topEmotion)

    // RENDER RESULTS
    res.render('results', {
      title: 'Results',
      description: suggestion.description,
	  photo: suggestion.photo
	  })
  }).catch(reason => {
    console.log('Promise was rejected becasue ' + reason)

    // RENDER AN ERROR MESSAGE
    res.render('results',
      { title: 'Error',
        description: 'Oops something went wrong! Please make sure that you submitted the correct image link and that your face is both promienent in the image and unobstructed. Submit another link to try again!',
        photo: '/images/Error.jpg'
      })
  })
})

module.exports = router

// =========================================================
// HELPER FUNCTIONS HERE
// =========================================================
// This funtion goes in the controllers/results.js file under the "helper functions" comment

function callAPI (url) {
 // Call API
  return request.post({
    url: EMOTION_URL,
    json: {'url': url}
  }).then((result) => {
    return result
  })
}
// This funtion goes in the controllers/results.js file under the "helper functions" comment

function parseResponse (response) {
  // Create array of emotion values
  var emotions = response[0].scores

  // Loop through the array to find the top emotion
  var topEmotion = 'anger'
  for (var e in emotions) {
    if (emotions[e] > emotions[topEmotion]) {
      topEmotion = e
    }
  }

  return topEmotion
}

// This funtion goes in the controllers/results.js file under the "helper functions" comment

function makeSuggestion (topEmotion) {
  var link = ''
  var description = ''

  // Decide which image to use based on the emotion passed in
  switch (topEmotion) {
    case 'anger':
      link = '/images/AngryDwight.jpg'
      description = 'You look just as angry as Dwight!'
      break
    case 'contempt':
      link = '/images/Angela.jpg'
      description = 'Your contempt level is reaching Angela levels!'
      break
    case 'disgust':
      link = '/images/Kelly.gif'
      description = 'You look just as disgusted as Kelly!'
      break
    case 'fear':
      link = '/images/Michael.jpg'
      description = 'You might just be just as fearful and superstitous as Michael!'
      break
    case 'happiness':
      link = '/images/JimAndPam.png'
      description = 'You look just as happy as Jim and Pam together!'
      break
    case 'neutral':
      link = '/images/Stanley.jpg'
      description = 'Looking just as neutral as Stanley staring at the camera.'
      break
    case 'sadness':
      link = '/images/SadDwight.jpg'
      description = 'Looking as sad as Dwight today!'
      break
    case 'surprise':
      link = '/images/Jim.jpg'
      description = "You look just as suprised as Jim walking in on Dwight's birthday suprise for Kelly."
      break
    case '':
      link = '/images/Error.jpg'
      description = 'Oops something went wrong! Please make sure that you submitted the correct image link and that your face is both promienent in the image and unobstructed. Submit another link to try again!'
      break
  }

  // Store suggestion
  var suggestion = {
    photo: link,
    description: description
  }

  return suggestion
}