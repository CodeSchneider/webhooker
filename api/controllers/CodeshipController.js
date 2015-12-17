/**
 * CodeshipController
 *
 * @description :: Server-side logic for managing codeships
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'status': function(req,res,next){
		console.log('hit...');
		return res.send({'message':'thanks for the info codeship.'});
	}

};
