// server.js

    // set up ========================
	const express = require('express');
	const app = express();
	const mongoose = require('mongoose');
	const MongoClient = require('mongodb').MongoClient;
	const morgan = require('morgan');
	const bodyParser = require('body-parser');
	const methodOverride = require('method-override');
	const port = 9000;
	// configuration =================

	mongoose.connect('mongodb://skeletoncr:trop1cal@ds149491.mlab.com:49491/mongotestrodney');     // connect to mongoDB database
		
	app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());
    app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
    /*
	var db;
	MongoClient.connect('mongodb://skeletoncr:trop1cal@ds149491.mlab.com:49491/mongotestrodney', (err, database) => {
		console.log('MongoClient.connect');

		if(err) {
			return console.log(err);
		}
		
		db = database;
		app.listen(process.env.PORT || port, () => {
			console.log('Express listening activated in MongoClient,connect listening on:' + port);
		});

	});
	*/

    // listen (start app with node server.js) ======================================
    //app.listen(9000);
    //console.log("App listening on port 9000");

     // define model =================
 	/*
 	var Todo = mongoose.model('Todo', {
        text : String
    });
    */

    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all todos

    //app.get('api/names', (req, res) => {
    	/*
			
		// use mongoose to get all names in the database
        Todo.find(function(err, names) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(names); // return all names JSON format
        });

    	*/
    	/*
    	var cursor = db.collection('names').find((err, names) => {
    		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
    		if(err){
    			res.send(err);
    		}
    		res.json(names); // return all names in json format
    	});
    });

    // create todo and send back all names after creation
    app.post('/api/names', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        db.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the names after you create another
            db.find(function(err, names) {
                if (err)
                    res.send(err)
                res.json(names);
            });
        });

    });

        // delete a todo
    app.delete('/api/names/:names_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    */
    // routes ======================================================================
	require('./app/routes.js')(app);

	// listen (start app with node server.js) ======================================
	app.listen(port);
	console.log("App listening on port " + port);