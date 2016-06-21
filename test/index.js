'use strict';

var info = require('../');
var should = require('should');

describe('browser-info', function() {

  it('should return info', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.68 Safari/537.36',
    };
    should(info().name).equal('Chrome');
    should(info().version).equal('42');
    should(info().os).equal('Linux');
    done();

  });

  it('should detect Android', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36'
    };
    should(info().os).equal('Android');
    should(info().name).equal('Chrome');
    should(info().version).equal('48');
    done();
 });

 it('should detect iOS', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    };
    should(info().os).equal('iOS');
    should(info().name).equal('Safari');
    should(info().version).equal('9');
    done();
  });

  it('should detect Edge', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135  Safari/537.36 Edge/13'
    };

    should(info().os).equal('Windows');
    should(info().name).equal('Edge');
    should(info().version).equal('13');
    done();
  });

  it('should detect IE mobile', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)'
    };

    should(info().os).equal('Windows Phone');
    should(info().name).equal('IEMobile');
    should(info().version).equal('9');
    done();
  });

  it('should detect IE', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
    };

    should(info().name).equal('IE');
    done();
  });

  it('should detect edge cases', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36 Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
    };

    should(info().name).equal('Chrome');
    should(info().version).equal('34');
    done();
  });
});
