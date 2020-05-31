import { Injectable } from '@angular/core';
import { getSpeechRecognition, getSpeechGrammarList, getSpeechRecognitionEvent, geSpeechSynthesis } from './testSpeech';

const SpeechRecognition: any = getSpeechRecognition();
const SpeechGrammarList: any = getSpeechGrammarList();
const SpeechRecognitionEvent: any = getSpeechRecognitionEvent();
const speechSynthesis: any = geSpeechSynthesis();


@Injectable({
  providedIn: 'root'
})
export class RecognitionService {
  public words: Array<string> = [];
  public speechSynthesis = speechSynthesis;
  public speechRecognitionList = new SpeechGrammarList();
  public recognition = new SpeechRecognition();
  public wordListening: any;


  constructor() {
    this.words = ['deportes', 'actualidad', 'politica'];
    var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + this.words.join(' | ') + ' ;'
    this.speechRecognitionList.addFromString(grammar, 1);
    this.recognition.grammars = this.speechRecognitionList;
    this.recognition.continuous = false;
    this.recognition.lang = 'es-CO';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

  }

  getRecognitionInstance = () => this.recognition;

  createSpeak = textToSpeach => {
    var speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
    speech.text = textToSpeach;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    this.speechSynthesis.speak(speech);
  }

}
