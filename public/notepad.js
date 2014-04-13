// (function($) {

	var WikalDatabase = {
		id: "movies",
		description: "A local JavaScript powered wiki",
		migrations: [
			{
				version: 1,
				migrate: function(transaction, next) {
					transaction.db.createObjectStore("movies");
					next();
				}
			},
			{
				version: 2,
				migrate:function (transaction, next) {
                var store = undefined;
                if (!transaction.db.objectStoreNames.contains("movies")) {
                    store = transaction.db.createObjectStore("movies");
                }
                store = transaction.objectStore("movies");
                store.createIndex("titleIndex", "title", {
                    unique:false
                });
                store.createIndex("formatIndex", "format", {
                    unique:false
                });
                next();
				}
			}
		]
	}


	var Movie = Backbone.Model.extend({
		database: WikalDatabase,
		storeName: WikalDatabase.id
	});

/////////////////////////////// works to create an item
// var movie = new Article();
// movie.save({
// 	title:"The Matrix",
// 	content:"dvdsnuts"
// });

	var List = Backbone.Collection.extend({
		database: WikalDatabase,
		storeName: WikalDatabase.id,
		model: Movie
	});




    // var movies = [
    //     {
    //         title:"Hello",
    //         format:"blueray",
    //         id:"1"
    //     },
    //     {
    //         title:"Bonjour",
    //         format:"dvd",
    //         id:"2"
    //     },
    //     {
    //         title:"Halo",
    //         format:"blueray",
    //         id:"3"
    //     },
    //     {
    //         title:"Nihao",
    //         format:"streaming",
    //         id:"4"
    //     },
    //     {
    //         title:"Ciao",
    //         format:"dvd",
    //         id:"5"
    //     }
    // ];

    // _.each(movies, function(movie) {
    //     var m = new Movie();
    //     m.save(movie);
    // });







var theater = new List();
theater.fetch({
    success: function() {
        // The theater collection will be populated with all the items with an id comprised between "a" and "b" ("alphonse" is between "a" and "b")
        console.log("sfd", theater.models);
    }
});


	// var article = new Article

// var movie = new Article({title: "nonya1"})
// movie.fetch({
//     success: function() {
//         //...
//     }
// });

	// var list = new List({});

	// list.fetch({
	//     success: function() {
	//         console.log('done');
	//     }
	// });



	// var ListView = Backbone.View.extend({
	//     el: $('body'),
	//     events: {
	//       'click button#add': 'addItem'
	//     },
	// 	initialize: function(){
	//       _.bindAll(this, 'render', 'addItem', 'appendItem');
	//       // remember: every function that uses 'this' as the current object should be in here
	//       var self = this;
	//       this.collection = new List();
	//       this.collection.fetch({
	// 	    success: function() {
	// 	        console.log(self);
	// 	    }
	// 	  });
	//       // this.model.fetch();
	//       this.collection.bind('add', this.appendItem); // collection event binder


	//       this.counter = 0;

	//       this.render();
	//     },
	//     render: function(){
	// 	    var self = this;
	// 			$(this.el).append("<button id='add'>Add list article</button>");
	// 			$(this.el).append("<ul></ul>");
	// 			_(this.collection.models).each(function(article){ // in case collection is not empty
	// 			self.appendItem(article);
	// 		}, this);
	// 	},
	// 	addItem: function(){
	// 		this.counter++;
	// 		var article = new Article();
	// 		article.set({
	// 			title: article.get('title') + this.counter // modify article defaults
	// 		});
	// 		article.save();
	// 		this.collection.add(article); // add article to collection; view is updated via event 'add'
 //    	},
	// 	appendItem: function(article){
 //    		$('ul', this.el).append("<li>"+article.get('title')+"</li>");
 //    	}
 //  	});

	// var listView = new ListView();


// var AppView = Backbone.View.extend({

// 	el: "#notepad",

// 	events: {
// 		"click #save": "save"
// 	},

// 	initialize: function() {
// 		_.bindAll(this)
// 		this.$title = $("#title")
// 		this.$content = $("#content")

// 		this.model.on("change", this.render)
// 		this.model.fetch()
// 	},

// 	render: function() {
// 		this.$title.html(this.model.get("title"))
// 		this.$content.val(this.model.get("content"))
// 	},

// 	save: function() {
// 		this.model.save({
// 			title: this.$title.html(),
// 			content: this.$content.val()
// 		})
// 	}

// })

// var myNote = new Article({
// 	title: "Yellop"
// });


// // var movie = new Note({id: "123"});
// // movie.save();

// x = new AppView({ model: myNote })

// })(jQuery);