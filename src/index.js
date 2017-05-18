/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-howto
 **/

'use strict';

const ua = require('universal-analytics');
const Alexa = require('alexa-sdk');
const muscles = require('./muscles');

const APP_ID = 'amzn1.ask.skill.26ff3d01-156a-4949-9503-6559d43fac38';

const intentOptions = ['origin', 'insertion', 'action', 'nerve'];
let itemName;
let intentArray;

const handlers = {
  'LaunchRequest': function () {
      this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
      this.attributes.repromptSpeech = this.t('WELCOME_REPROMPT');
      this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'GetMuscle': function () {
      console.log(JSON.stringify(this.event));
      intentArray = [];
      const myMuscles = this.t('MUSCLES');

      let itemSlot = this.event.request.intent.slots.Item;
      let intent = this.event.request.intent.name;

      if (intent == 'OriginIntent') {
          intentArray.push('origin');
      } else if (intent == 'InsertionIntent') {
          intentArray.push('insertion');
      } else if (intent == 'ActionIntent') {
          intentArray.push('action');
      } else if (intent == 'NerveIntent') {
          intentArray.push('nerve');
      } else if (intent == 'MuscleIntent') {
          intentArray = intentOptions;
      }

      if (itemSlot && itemSlot.value) {
          itemName = itemSlot.value.toLowerCase();
      }

      if (myMuscles[itemName]) {
          let response = buildResponseString(intentArray, myMuscles);
          this.attributes.speechOutput = response + this.t('RESPONSE_END');
          this.attributes.repromptSpeech = this.t('RESPONSE_REPROMPT');
          this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
      } else {
          this.emit('Unhandled');
      }

      // Google Analytics
      let intentTrackingID = ua('UA-87314233-4');
      intentTrackingID.event(intent, itemSlot.value).send();
  },
  'MuscleIntent': function () {
      this.emit('GetMuscle');
  },
  'OriginIntent': function () {
      this.emit('GetMuscle');
  },
  'InsertionIntent': function () {
      this.emit('GetMuscle');
  },
  'ActionIntent': function () {
      this.emit('GetMuscle');
  },
  'NerveIntent': function () {
      this.emit('GetMuscle');
  },
  'AMAZON.RepeatIntent': function () {
      const myMuscles = this.t('MUSCLES');
      let response = buildResponseString(intentArray, myMuscles);
      this.attributes.speechOutput = response + this.t('RESPONSE_END');
      this.attributes.repromptSpeech = this.t('RESPONSE_REPROMPT');
      this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'AMAZON.HelpIntent': function () {
      this.attributes.speechOutput = this.t('HELP_MESSAGE');
      this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
      this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'AMAZON.StopIntent': function () {
      this.emit('SessionEndedRequest');
  },
  'AMAZON.CancelIntent': function () {
      this.emit('SessionEndedRequest');
  },
  'SessionEndedRequest': function () {
      this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'Unhandled': function () {
      let speechOutput = this.t('MUSCLE_NOT_FOUND_MESSAGE');
      const repromptSpeech = this.t('MUSCLE_NOT_FOUND_REPROMPT');
      if (itemName) {
          speechOutput += this.t('MUSCLE_NOT_FOUND_WITH_ITEM_NAME', itemName);
      } else {
          speechOutput += this.t('MUSCLE_NOT_FOUND_WITHOUT_ITEM_NAME');
      }
      speechOutput += repromptSpeech;

      this.attributes.speechOutput = speechOutput;
      this.attributes.repromptSpeech = repromptSpeech;

      this.emit(':ask', speechOutput, repromptSpeech);
  }
};

const languageStrings = {
    'en-US': {
        translation: {
            MUSCLES: muscles.MUSCLES,
            SKILL_NAME: 'Muscles one oh one',
            WELCOME_MESSAGE: 'Welcome to %s. I can tell you the origin, insertion, action, and nerve of various muscles ... Now, what can I help you with.',
            WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.',
            RESPONSE_END: 'What else can I help you with?',
            RESPONSE_REPROMPT: 'You can say repeat to hear the previous information, you can ask about another muscle, or you can say exit. Now, what can I help you with?',
            HELP_MESSAGE: 'You can ask for the origin, insertion, action, or nerve or a muscle, or, you can say exit ... Now, what can I help you with?',
            HELP_REPROMPT: 'You can say things like, what is the origin of biceps femoris, or you can say exit ... Now, what can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
            MUSCLE_NOT_FOUND_MESSAGE: 'I\'m sorry, I currently do not know ',
            MUSCLE_NOT_FOUND_WITH_ITEM_NAME: 'the muscle %s. ',
            MUSCLE_NOT_FOUND_WITHOUT_ITEM_NAME: 'that muscle. ',
            MUSCLE_NOT_FOUND_REPROMPT: 'What else can I help with?'
        }
    }
};

function buildResponseString (array, muscleList) {
    let fullString = '';

    for (let i = 0; i < array.length; i++) {
        let tag = array[i];
        let muscleInfo = muscleList[itemName][tag];
        let muscleName = muscleList[itemName]['name'];
        let tagString = 'The ';
        if (muscleInfo.length == 1) {
            tagString += tag + ' of ' + muscleName + ' is... <prosody rate="90%">' + muscleInfo[0] + '.</prosody> ';
        } else {
            tag += 's';
            tagString += tag + ' of ' + muscleName + ' are... <prosody rate="90%">';
            for (let i = 0; i < muscleInfo.length; i++) {
                if (i == muscleInfo.length - 1) {
                    tagString += 'and ' + muscleInfo[i] + '.</prosody> ';
                } else {
                    tagString += muscleInfo[i] + '... ';
                }
            }
        }
        fullString += tagString;
    }

    return fullString;
}

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
