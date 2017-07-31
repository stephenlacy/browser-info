/* globals navigator*/

'use strict';


function info(userAgent){
  var ua = userAgent || navigator.userAgent;
  var tem;

  var match = ua.match(/(opera|chrome|safari|firefox|edge|trident(?=\/))\/?\s*?(\S+)/i) || [];

  var os = (function (match){
    if (ua.indexOf('Windows Phone') !== -1) {
      return 'Windows Phone';
    }
    if (ua.indexOf('Win') !== -1) {
      return 'Windows';
    }
    if (ua.indexOf('Android') !== -1) {
      return 'Android';
    }
    if (ua.indexOf('Linux') !== -1) {
      return 'Linux';
    }
    if (ua.indexOf('X11') !== -1) {
      return 'UNIX';
    }
    if (/iPad|iPhone|iPod/.test(ua)) {
      return 'iOS';
    }
    if (ua.indexOf('Mac') !== -1) {
      return 'OS X';
    }
  })(match);

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
