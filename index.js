/* globals navigator*/

'use strict';


function info(userAgent){
  var ua = userAgent || navigator.userAgent;
  var tem;
  var os;

  var match = ua.match(/(opera|chrome|safari|firefox|edge|trident(?=\/))\/?\s*?(\S+)/i) || [];


  if (ua.indexOf('Win') !== -1) {
    os = 'Windows';
  }
  if (ua.indexOf('Mac') !== -1) {
    os = 'OS X';
  }
  if (ua.indexOf('X11') !== -1) {
    os = 'UNIX';
  }
  if (ua.indexOf('Linux' ) !== -1) {
    os = 'Linux';
  }
  if (ua.indexOf('Android') !== -1) {
    os = 'Android';
  }
  if (/iPad|iPhone|iPod/.test(ua)) {
    os = 'iOS';
  }
  if (ua.indexOf('Windows Phone') !== -1) {
    os = 'Windows Phone';
  }

  tem = ua.match(/\bIEMobile\/(\S+[0-9])/);
  if (tem !== null) {
    return {
      name: 'IEMobile',
      version: tem[1].split('.')[0],
      fullVersion: tem[1],
      os: os
    };
  }

  if (/trident/i.test(match[1])) {
    tem = /\brv[ :]+(\S+[0-9])/g.exec(ua) || [];
    return {
      name: 'IE',
      version: tem[1] && tem[1].split('.')[0],
      fullVersion: tem[1],
      os: os
    };
  }

  if (match[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/);
    if (tem !== null) {
      return {
        name: 'Opera',
        version: tem[1].split('.')[0],
        fullVersion: tem[1],
        os: os
      };
    }

    tem = ua.match(/\bEdge\/(\S+)/);
    if (tem !== null) {
      return {
        name: 'Edge',
        version: tem[1].split('.')[0],
        fullVersion: tem[1],
        os: os
      };
    }
  }
  match = match[2]? [match[1], match[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if (match[0] !== 'Chrome') {
    var tem = ua.match(/version\/(\S+)/i)
    if (tem !== null && tem !== '') {
      match.splice(1, 1, tem[1]);
    }
  }
  return {
    name: match[0],
    version: match[1].split('.')[0],
    fullVersion: match[1],
    os: os
  };
}

module.exports = info;
