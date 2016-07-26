/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var middleware = {
  requireAuthentication : function (req, res, next)   {
      console.log("private route hit");
      next();
  },
  logger: function( req, res, next) {
        var date =      new Date().toGMTString();
      console.log( "Request : " + req.method + " " + req.originalUrl  + " at time " + date   );
      next();
  }
};

module.exports=middleware;

