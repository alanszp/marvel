/* global describe, beforeEach, module, it, expect, inject */
'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('marvelApp.services'));


  describe('Comic', function(done) {
    it('should return a JSON with data.results.length equal to 15 ', inject(function(Comic) {
		var tamano = 0 ;

		var comics = Comic.query(function(value){
			console.log(comics);
			tamano = value.data.results.length;
		});
    }));
  });
});
