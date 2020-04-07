/* globals navigator*/

'use strict';

function getOS(userAgent){
  if (userAgent.indexOf('Windows Phone') !== -1) {
    return 'Windows Phone';
  }
  if (userAgent.indexOf('Win') !== -1) {
    return 'Windows';
  }
  if (userAgent.indexOf('Android') !== -1) {
    return 'Android';
  }
  if (userAgent.indexOf('Linux') !== -1) {
    return 'Linux';
  }
  if (userAgent.indexOf('X11') !== -1) {
    return 'UNIX';
  }
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return 'iOS';
  }
  if (userAgent.indexOf('Mac') !== -1) {
    return 'OS X';
  }
}

function info(userAgent){
  var ua = userAgent || navigator.userAgent;
  var tem;

  var os = getOS(ua);
  var match = ua.match(/(opera|coast|chrome|safari|firefox|edge|trident(?=\/))\/?\s*?(\S+)/i) || [];

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

    tem = ua.match(/\bEdg\/(\S+)/) || ua.match(/\bEdge\/(\S+)/);
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

  if (match[0] === 'Coast') {
    match[0] = 'OperaCoast';
  }

  if (match[0] !== 'Chrome') {
    var tem = ua.match(/version\/(\S+)/i)
    if (tem !== null && tem !== '') {
      match.splice(1, 1, tem[1]);
    }
  }

  if (match[0] === 'Firefox') {
    match[0] = /waterfox/i.test(ua)
      ? 'Waterfox'
      : match[0];
  }

  return {
    name: match[0],
    version: match[1].split('.')[0],
    fullVersion: match[1],
    os: os
  };
}

module.exports = info;
