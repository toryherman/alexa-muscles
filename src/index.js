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

const Alexa = require('alexa-sdk');
const recipes = require('./muscles');

const APP_ID = "amzn1.ask.skill.26ff3d01-156a-4949-9503-6559d43fac38";

let muscle;
let itemName;

const handlers = {
  'LaunchRequest': function () {
      this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
      // If the user either does not reply to the welcome message or says something that is not
      // understood, they will be prompted again with this text.
      this.attributes.repromptSpeech = this.t('WELCOME_REPROMPT');
      this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
      // console.log('In Launch');
      // console.log(JSON.stringify(this.event));
  },
  'MuscleIntent': function () {
      this.attributes.i = 0;
      let itemSlot = this.event.request.intent.slots.Item;

      if (itemSlot && itemSlot.value) {
          itemName = itemSlot.value.toLowerCase();
      }

      // if (windsors.indexOf(itemName) !== -1) {
      //     itemName = 'windsor knot';
      // } else if (halfs.indexOf(itemName) !== -1) {
      //     itemName = 'half windsor knot';
      // } else if (pratts.indexOf(itemName) !== -1) {
      //     itemName = 'pratt knot';
      // } else if (simples.indexOf(itemName) !== -1) {
      //     itemName = 'four in hand knot';
      // }

      const myRecipes = this.t('RECIPES');
      recipe = myRecipes[itemName];

      // console.log('In RecipeIntent');
      // console.log(JSON.stringify(this.event));
      this.emitWithState('GetRecipe');
  },
  'OriginIntent': function () {},
  'InsertionIntent': function () {},
  'ActionIntent': function () {},
  'NerveIntent': function () {},
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
      let speechOutput = this.t('RECIPE_NOT_FOUND_MESSAGE');
      const repromptSpeech = this.t('RECIPE_NOT_FOUND_REPROMPT');
      if (itemName) {
          speechOutput += this.t('RECIPE_NOT_FOUND_WITH_ITEM_NAME', itemName);
      } else {
          speechOutput += this.t('RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME');
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
            DISPLAY_CARD_TITLE: '%s  - Instructions for %s.',
            HELP_MESSAGE: 'You can ask questions such as, how do I tie a windsor knot, or, you can say exit ... Now, what can I help you with?',
            HELP_REPROMPT: 'You can say things like, how do I tie a windsor knot, or you can say exit ... Now, what can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
            CONTINUE_MESSAGE: ' When you are ready to move on, say next.',
            RECIPE_HELP_MESSAGE: 'You can say repeat to hear the step again, next to move on, or start over.',
            RECIPE_HELP_REPROMPT: 'You can say main menu to choose another knot.',
            RECIPE_NOT_FOUND_MESSAGE: 'I\'m sorry, I currently do not know ',
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'the instructions for %s. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'that knot. ',
            RECIPE_NOT_FOUND_REPROMPT: 'What else can I help with?'
        }
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
