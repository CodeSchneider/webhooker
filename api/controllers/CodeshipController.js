/**
 * CodeshipController
 *
 * @description :: Server-side logic for managing codeships
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'status': function(req,res,next){
		sails.sockets.blast('message',{ message: 'message from codeship', payload: req.body });
		return res.ok();
	}

};
