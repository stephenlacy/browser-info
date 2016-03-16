'use strict';

var info = require('../');
var should = require('should');

describe('browser-info', function() {

  it('should return info', function(done) {
    GLOBAL.navigator = {
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.68 Safari/537.36',
    };
    should(info().name).equal('Chrome');
    should(info().version).equal('42');
    should(info().os).equal('Linux');
    done();

  });

  it('should detect Android', function(done) {
     GLOBAL.navigator = {
         userAgent: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36'
     };
     should(info().os).equal('Android');
     done();
 });

 it('should detect iOS', function(done) {
    GLOBAL.navigator = {
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    };
    should(info().os).equal('iOS');
    done();
  });

  it('should detect Edge', function(done) {
     GLOBAL.navigator = {
         userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135  Safari/537.36 Edge/13'
     };

     should(info().name).equal('Edge');
     done();
  });
});
