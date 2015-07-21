//Coordenadas plaza de la vila
//hay que controlar formato de las coordenadas aqui?
var _ayuntamiento_posicionX = '41,470480';
var _ayuntamiento_posicionY = '2,0852293';


//dmz
//testvar _wsURLCrearIncidencia="http://80.39.72.44:8000/wsAPPGIV/wsIncidentNotifierGIV.asmx/IncidenciaTipus_v1";
//testvar _wsURLCrearIncidencia="http://80.39.72.44:8000/wsAPPSQ/wsAPPSQ.asmx/TestWs";
var _wsURLCrearIncidencia="http://80.39.72.44:8000/wsAPPSQ/wsAPPSQ.asmx/IncidenciaTipus";
var _wsURLConsultaIncidencia="http://80.39.72.44:8000/wsAPPSQ/wsAPPSQ.asmx/ConsultaComunicatsTipus";
var _wsURLLogin="http://80.39.72.44:8000/wsAPPSQ/wsAPPSQ.asmx/Login";

//Santcugat
//var _wsURLCrearIncidencia="http://82.159.148.100:81/wsAPPSQ/wsAPPSQ.asmx/IncidenciaTipus";
//var _wsURLConsultaIncidencia="http://82.159.148.100:81/wsAPPSQ/wsAPPSQ.asmx/ConsultaComunicatsTipus";
//var _wsURLLogin="http://82.159.148.100:81/wsAPPSQ/wsAPPSQ.asmx/Login";


var _mediaAudio;
var _mediaTimer = null;
var _mediaAudioFichero = "sttaudio.mpeg";

var _mediaAudioFicheroIOS = "stccaudio.wav";
var _mediaAudioFicheroIOSFullPath = "";

var _inciAudioFichero;

