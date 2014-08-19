Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts_index'],

  render: function() {
    var content = this.template({ posts: this.collection });
    this.$el.html(content);
    return this;
  },

  events: {
    'click button.delete-post' : 'deletePost'
  },

  initialize: function() {
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "change:title", this.render);
    this.listenTo(this.collection, "change:body", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  deletePost: function(event) {
    var post = this.collection.findWhere({id: event.attr('data-id')});
    this.collection.remove(post);
  }
});