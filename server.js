/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var app = express();
var PORT=3001;

//    app.get('/',function(req, res){
//        res.send('Sunt Express');
//        
//    })

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
    
    // general usage app.use(middleware.requireAuthentication);
    app.use(middleware.logger);
    app.get('/about',middleware.requireAuthentication, function(req, res) {
        res.send('About Us!');
    });
     //.use(express.static());
    app.use(express.static( __dirname + "/public")); 
    
    app.listen(PORT,function (){
        console.log("Express started on Port " + PORT + "!");
    });

