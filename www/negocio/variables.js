//Coordenadas plaza de la vila
var _ayuntamiento_posicionX = '41,4705101';
var _ayuntamiento_posicionY = '2,085276600000043';

//dmz
var _wsURLCrearIncidencia="http://83.48.8.99:8000/wsAPPSQ/wsAPPSQ.asmx/IncidenciaTipus";
var _wsURLConsultaIncidencia="http://83.48.8.99:8000/wsAPPSQ/wsAPPSQ.asmx/ConsultaComunicatsTipus";
var _wsURLLogin="http://83.48.8.99:8000/wsAPPSQ/wsAPPSQ.asmx/Login";
//vilafranca
//var _wsURLCrearIncidencia="http://www.vilafranca.cat/wsAPPGIV/wsIncidentNotifierGIV.asmx/IncidenciaTipus_v1";
//var _wsURLConsultaIncidencia="http://www.vilafranca.cat/wsAPPGIV/wsIncidentNotifierGIV.asmx/ConsultaComunicatsTipus_v1";
//var _wsURLLogin="http://www.vilafranca.cat/wsAPPGIV/wsIncidentNotifierGIV.asmx/Login_v1";


var _mediaAudio;
var _mediaTimer = null;
var _mediaAudioFichero = "givaudio.mpeg";

var _mediaAudioFicheroIOS = "givaudio.wav";
var _mediaAudioFicheroIOSFullPath = "";

var _inciAudioFichero;

