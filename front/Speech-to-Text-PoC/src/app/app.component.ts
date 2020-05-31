import { Component, OnInit } from '@angular/core';
import { RecognitionService } from './services/recognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testConcept';
  public recognition: any;
  public wordListener: any;
  public sectionNewsLetters: Array<string> = ['inici', 'deporte', 'política', 'cultura', 'economía'];
  public wordFlag: string;
  public LabelCase: string = 'estas viendo: ';

  constructor(
    private recognitionService: RecognitionService
  ) {
    this.recognition = this.recognitionService.getRecognitionInstance();
  }


  ngOnInit() {
    /* this.words = ['deportes', 'actualidad', 'politica'];
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
        .then(res => { this.wordListener = res; return res })
        .then(data => this.wordFlag = this.filterWordsIntoArray(data))
        .then(data => {
          this.recognitionService.createSpeak(`estas viendo ${this.wordFlag}`);
          var stringTest = 'El reconocimiento de voz implica recibir voz a través del micrófono de un dispositivo, luego es verificado por un servicio de reconocimiento de voz contra una lista de palabras o frases grammar. Cuando se reconoce con éxito una palabra o frase, esta se devuelve como una cadena de texto y así poder iniciar otras acciones.'.split(' ');
          stringTest.forEach(data => this.recognitionService.createSpeak(data));
        })
        .catch(res => console.log(res.message));
    }



  }


  /* searchWordCoincidences = () => {
    var stringVar = (<string>this.wordListener).split(' ');
    console.log(stringVar);
  }
 */
  filterWordsIntoArray = (stringValue: any) => {
    console.log(stringValue);
    var testVar = this.sectionNewsLetters.find(data => new String(stringValue).includes(data));
    console.log(testVar);
    return testVar;
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
        diagnostic.textContent = 'Result received: ' + color + '.';
        bg.style.backgroundColor = color;
        console.log('Confidence: ' + event.results[0][0].confidence);
        resolve(event.results[0][0].transcript);
      }

    });
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
