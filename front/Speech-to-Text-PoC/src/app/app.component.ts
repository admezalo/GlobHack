import { Component, OnInit } from '@angular/core';

import { getSpeechRecognition, getSpeechGrammarList, getSpeechRecognitionEvent, geSpeechSynthesis } from './testSpeech';

const SpeechRecognition: any = getSpeechRecognition();
const SpeechGrammarList: any = getSpeechGrammarList();
const SpeechRecognitionEvent: any = getSpeechRecognitionEvent();
const speechSynthesis: any = geSpeechSynthesis();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testConcept';
  public words: Array<string> = [];
  public speechSynthesis = speechSynthesis;
  public speechRecognitionList = new SpeechGrammarList();
  public recognition = new SpeechRecognition();
  public wordListening: any;

  constructor() {
  }


  ngOnInit() {
    this.words = ['deportes', 'actualidad', 'politica'];
    var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + this.words.join(' | ') + ' ;'

    this.speechRecognitionList.addFromString(grammar, 1);
    this.recognition.grammars = this.speechRecognitionList;
    this.recognition.continuous = false;
    this.recognition.lang = 'es-CO';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    var diagnostic = document.querySelector('.output');
    var bg = document.querySelector('html');
    var hints = document.querySelector('.hints');

    //hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';
    /* 
        document.body.onclick = function () {
        
          console.log('Ready to receive a color command.');
        } */

    document.body.onclick = () => {
      this.recognition.start();
      this.createListener()
        .then(res => { this.wordListening = res; return res })
        .then(data => this.createSpeak(data))
        .catch(res => console.log(res.message));
    }



  }

  createListener() {
    var diagnostic = document.querySelector('.output');
    var bg = document.querySelector('html');

    return new Promise((resolve, reject) => {

      this.recognition.onresult = (event, error) => {
        // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
        // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
        // It has a getter so it can be accessed like an array
        // The first [0] returns the SpeechRecognitionResult at the last position.
        // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
        // These also have getters so they can be accessed like arrays.
        // The second [0] returns the SpeechRecognitionAlternative at position 0.
        // We then return the transcript property of the SpeechRecognitionAlternative object
        if (error) {
          reject(error);
        }
        var color = event.results[0][0].transcript;

        // callback(color);
        diagnostic.textContent = 'Result received: ' + color + '.';
        bg.style.backgroundColor = color;
        // console.log(color);
        console.log('Confidence: ' + event.results[0][0].confidence);
        resolve(event.results[0][0].transcript);
      }

    });
  }

  createSpeak = (textToSpeach) => {
    var speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
    speech.text = textToSpeach;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    this.speechSynthesis.speak(speech);
  }

  /* 
    this.recognition.onspeechend = function () {
      this.recognition.stop();
    }
  
    this.recognition.onnomatch = function (event) {
      diagnostic.textContent = "I didn't recognise that color.";
    }
  
    this.recognition.onerror = function (event) {
      diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
    } */
}
