'use strict'

describe("Pig Latin Filter Service", function(){
	var PigLatinFilterService;
	beforeEach(module('app'));

	beforeEach(inject(function(_PigLatinFilterService_){
		PigLatinFilterService = _PigLatinFilterService_;
	}));

	it('can get an instance of the Pig Latin Filter Service Factory', inject(function(PigLatinFilterService){
		expect(PigLatinFilterService).toBeDefined();
	}));

	it('adds the string "way" at the end when a string starts with vowel', inject(function(PigLatinFilterService){
		expect(PigLatinFilterService.getPigFilteredDataSentence("avengers")).toBe('avengersway');
	}));

	it('removes the string before the start of vowel and adds it at the end and then add "ay"', inject(function(PigLatinFilterService){
		expect(PigLatinFilterService.getPigFilteredDataSentence("clarke")).toBe('arkeclay');
	}))
	it('should convert all the words in a sentence to pig latin equivalent text', inject(function(PigLatinFilterService){
		expect(PigLatinFilterService.getPigFilteredDataSentence("this is good")).toBe('isthay isway oodgay');
	}))
	
});