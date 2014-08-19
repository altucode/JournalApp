Journal.Views.PostShow = Backbone.View.extend({
  template: JST['post_show'],

  render: function() {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  events: {
    'dblclick .editable' : 'enterEditMode',
    'focusout .editable' : 'exitEditMode'
  },

  deletePost: function(event) {
    var post = this.collection.findWhere({id: event.attr('data-id')});
    this.collection.remove(post);
  },

  enterEditMode: function(event) {
    $(event.currentTarget).toggleClass('edit-mode');
    $(event.currentTarget).children('.edit').focus();
  },

  exitEditMode: function(event) {
    $(event.currentTarget).toggleClass('edit-mode');
    var attribs = {};
    attribs['title'] = $(event.currentTarget).children('input').val();
    attribs['body'] = $(event.currentTarget).children('textarea').val();
    var that = this;
    this.model.save(attribs, {
      success: function(model, response, options) {
        that.render();

      }
    });
  }
});