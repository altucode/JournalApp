window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Journal.Routers.Posts;
    Backbone.history.start({
      success: this.pageSetup()
    });
  },
  pageSetup: function() {
      Journal.Collections.posts.fetch({
      success: function(collection, response) {
        var sideBarIndex = new Journal.Views.PostsIndex({
          collection: Journal.Collections.posts
        }).render();

        $("div.sidebar").append(sideBarIndex.$el);
      },
      error: function(collection, response) {
        console.log("ERROR");
      }
    })
  }

};

$(document).ready(function(){
  Journal.initialize();
});


