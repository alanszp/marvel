/* global describe, beforeEach, module, it, expect, inject, runs, waitsFor, should */
'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('marvelApp.services'));


  describe('Comic', function() {
    it('should return a JSON with data.results.length equal to 15 ', inject(function(Comic) {


    	var termino = false;

    	


			Comic.get().then(function(res) {
    			console.log("ok");
    		termino = true;
    		},function(res) {
    			console.log("err");
    		termino = true;
    		});
	

		waitsFor(function(){
			
			return termino;
		}, "Tenia que haberlo encontrado ya", 5000);

		runs(function(){
			comic.should.equal(2);
		});



    }));
  });
});
