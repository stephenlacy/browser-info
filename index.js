/* globals navigator*/

'use strict';


function info(){
  var ua = navigator.userAgent;
  var tem;
  var os;

  var match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

  if (ua.indexOf('Win') !== -1) {
    os = 'Windows';
  }
  if (ua.indexOf('Mac') !== -1) {
    os = 'MacOS';
  }
  if (ua.indexOf('X11') !== -1) {
    os = 'UNIX';
  }
  if (ua.indexOf('Linux' )!== -1) {
    os = 'Linux';
  }

  if (/trident/i.test(match[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE',
      version: (tem[1]||''),
      os: os
    };
  }
  if (match[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/);
    if (tem !== null) {
      return {
        name: 'Opera',
        version: tem[1],
        os: os
      };
    }
  }
  match = match[2]? [match[1], match[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
    match.splice(1, 1, tem[1]);
  }
  return {
    name: match[0],
    version: match[1],
    os: os
  };
}

module.exports = info;
