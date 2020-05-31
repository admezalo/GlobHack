import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { RecognitionsService } from './services/recognitions.service';
import { environment } from 'src/environments/environment.prod';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-globhack';
  public sectionNewsLetters: Array<string> = ['principal', 'deportes', 'política', 'entretenimiento', 'cultura', 'salud', 'economía'];
  public recognition: any;
  public wordListener: any;
  public wordFlag: any;
  public labelWelcome: string;

  constructor(
    private dataService: DataService,
    private recognitionService: RecognitionsService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
    this.recognition = this.recognitionService.getRecognitionInstance();
    this.labelWelcome = environment.MESSAGE_WELCOME;
  }

  ngOnInit() {
    this.findDataApi(this.labelWelcome);

    document.body.onclick = () => {
      this.recognition.start();
      this.createListener()
        .then(res => { this.wordListener = res; return res })
        .then(data => { this.router.navigate([(this.filterWordsIntoArray(data) != 'principal') ? this.filterWordsIntoArray(data) : '/']) })
        .then(data => this.findDataApi(this.wordListener))
        .catch(res => console.log(res.message));
    }
  }

  filterWordsIntoArray = (stringValue: any) => {
    console.log(stringValue);
    var testVar = this.sectionNewsLetters.find(data => new String(stringValue).includes(data));
    console.log(testVar);
    if (testVar) {
      return testVar
    } else {
      return '/';
    }
  }

  findDataApi = (inputStringVoice: any) => {
    console.log(inputStringVoice);
    this.dataService.getInfoInteractionApi(inputStringVoice).subscribe(
      data => {
        console.log('Response welcome', data);
        if (data.section) {
          this.recognitionService.createSpeak(data.section);
        }
        this.recognitionService.createSpeak(data.output);
        if (data.news) {
          var arrayNews = new Array(data.news);
          for (const item of data.news) {
            this.recognitionService.createSpeak(item);
          }
        }
      },
      error => console.log(error)
    );
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
        /*  var color = event.results[0][0].transcript;
         diagnostic.textContent = 'Result received: ' + color + '.';
         bg.style.backgroundColor = color;
         console.log('Confidence: ' + event.results[0][0].confidence); */
        resolve(event.results[0][0].transcript);
      }

    });
  }
}
