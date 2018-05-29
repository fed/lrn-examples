var initOptions = {
  "type": "activity",
  "items": [
    {
      "content": '<span class="learnosity-response question-demoscience1234"></span>',
      "response_ids": [
        "demoscience1234"
      ],
      "workflow": "",
      "reference": "question-demoscience1"
    },
    {
      "content": '<span class="learnosity-response question-demoscience5678"></span>',
      "response_ids": [
        "demoscience5678"
      ],
      "workflow": "",
      "reference": "question-demoscience2"
    }
  ],
  "ui_style": "horizontal",
  "name": "Assess API Example",
  "state": "initial",
  "navigation": {
    "show_next": true,
    "toc": true,
    "show_submit": true,
    "show_save": false,
    "show_prev": true,
    "show_title": true,
    "show_intro": true,
  },
  "time": {
    "max_time": 600,
    "limit_type": "soft",
    "show_pause": true,
    "warning_time": 60,
    "show_time": true
  },
  "configuration": {
    "onsubmit_redirect_url": "/assessment/",
    "onsave_redirect_url": "/assessment/",
    "idle_timeout": true,
    "questionsApiVersion": "v2"
  },
  // The questionsApiActivity object holds the authentication security data: consumer_key, timestamp, and signature. This requires a serverside language to generate the signature and ensure your client specific secret remains a secret!
  "questionsApiActivity": {
    "consumer_key": "yis0TYCu7U9V4o7M",
    "timestamp": "INSERT_CURRENT_TIMESTAMP_HERE",
    "signature": "INSERT_GENERATED SIGNATURE HERE",
    "user_id": "demo_student",
    "type": "submit_practice",
    "state": "initial",
    "id": "assessdemo",
    "name": "Assess API - Demo",
    "questions": [
      {
        "response_id": "demoscience1234",
        "type": "sortlist",
        "description": "In this question, the student needs to sort the events, chronologically earliest to latest.",
        "list": ["Russian Revolution", "Discovery of the Americas", "Storming of the Bastille", "Battle of Plataea", "Founding of Rome", "First Crusade"],
        "instant_feedback": true,
        "feedback_attempts": 2,
        "validation": {
          "valid_response": [4, 3, 5, 1, 2, 0],
          "valid_score": 1,
          "partial_scoring": true,
          "penalty_score": -1
        }
      },
      {
        "response_id": "demoscience5678",
        "type": "highlight",
        "description": "The student needs to mark one of the flower's anthers in the image.",
        "img_src": "http://www.learnosity.com/static/img/flower.jpg",
        "line_color": "rgb(255, 20, 0)",
        "line_width": "4"
      }
    ]
  }
};

var assessApp = LearnosityAssess.init(initOptions, 'learnosity_assess',
  {
    readyListener() {
      console.log('Assess API successfully loaded');
    },
    errorListener(err) {
      console.error('Something bad happened', err);
    }
  }
);