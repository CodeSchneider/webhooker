/**
 * CodeshipController
 *
 * @description :: Server-side logic for managing codeships
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'status': function(req,res,next){
		console.log('codeship/status hit.');
		console.log(req);
		sails.sockets.blast('message',{ message: 'message from codeship', req_obj: req });
		return res.ok();
	}

};
