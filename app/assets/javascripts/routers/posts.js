Journal.Routers.Posts =  Backbone.Router.extend({
  routes: {
    "posts/new" : "new",
    "posts/:id" : "show"
  },

  index: function() {
    Journal.Collections.posts.fetch();

    var indexView = new Journal.Views.PostsIndex({
      collection: Journal.Collections.posts
    });

    this._swapView(indexView);
  },

  show: function(id) {
    var that = this;

    $(document).ready(function () {
      var post = Journal.Collections.posts.getOrFetch(id);

      var showView = new Journal.Views.PostShow({
        model: post
      });

      that._swapView(showView);
    });
  },

  new: function() {
    var newView = new Journal.Views.PostForm({
      model: new Journal.Models.Post(),
      collection: Journal.Collections.posts
    });
    this._swapView(newView);
  },

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    $(".content").html(newView.render().$el);

    this.currentView = newView;
  }
});