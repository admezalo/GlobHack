
var speechClass = {};

speechClass.getSpeechRecognition = () => window.SpeechRecognition || window.webkitSpeechRecognition;
speechClass.getSpeechGrammarList = () => window.SpeechGrammarList || webkitSpeechGrammarList;
speechClass.getSpeechRecognitionEvent = () => window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
speechClass.geSpeechSynthesis = () => window.speechSynthesis;


module.exports = speechClass;