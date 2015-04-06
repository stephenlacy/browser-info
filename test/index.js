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

});
