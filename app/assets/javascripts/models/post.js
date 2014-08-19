Journal.Models.Post = Backbone.Model.extend({
  name: 'post',
  url: function() {
    return this.id ? 'api/posts/' + this.id : 'api/posts';
  }
});
