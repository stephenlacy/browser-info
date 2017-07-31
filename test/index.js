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
    should(info().fullVersion).equal('42.0.2311.68');
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
    should(info().fullVersion).equal('48.0.2564.23');
    done();
 });

 it('should detect iOS', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    };
    should(info().os).equal('iOS');
    should(info().name).equal('Safari');
    should(info().version).equal('9');
    should(info().fullVersion).equal('9.0');
    done();
  });

  it('should detect Edge', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135  Safari/537.36 Edge/13'
    };

    should(info().os).equal('Windows');
    should(info().name).equal('Edge');
    should(info().version).equal('13');
    should(info().fullVersion).equal('13');
    done();
  });

  it('should detect IE mobile', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)'
    };

    should(info().os).equal('Windows Phone');
    should(info().name).equal('IEMobile');
    should(info().version).equal('9');
    should(info().fullVersion).equal('9.0');
    done();
  });

  it('should detect Opera', function(done) {
    global.navigator = {
      userAgent: 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16'
    };

    should(info().name).equal('Opera');
    should(info().os).equal('Linux');
    should(info().version).equal('12');
    should(info().fullVersion).equal('12.16');
    done();
  });
  it('should detect IE', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
    };

    should(info().name).equal('IE');
    should(info().os).equal('Windows');
    should(info().version).equal('11');
    should(info().fullVersion).equal('11.0');
    done();
  });

  it('should detect edge cases', function(done) {
    global.navigator = {
      userAgent: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36 Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
    };

    should(info().name).equal('Chrome');
    should(info().os).equal('Windows');
    should(info().version).equal('34');
    should(info().fullVersion).equal('34.0.1847.116');
    done();
  });

  it('should detect IE from argument', function(done) {
    var userAgent = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'

    should(info(userAgent).name).equal('IE');
    should(info(userAgent).os).equal('Windows');
    should(info(userAgent).version).equal('11');
    should(info(userAgent).fullVersion).equal('11.0');
    done();
  });

});
