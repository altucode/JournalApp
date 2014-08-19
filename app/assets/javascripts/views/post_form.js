Journal.Views.PostForm = Backbone.View.extend({
  template: JST['post_form'],

  render: function() {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  events: {
    'submit form' : 'submitPost'
  },

  submitPost: function(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON()["post"];

    this.model.save(formData, {
      success: this.createSuccess.bind(this),
      error: this.createError.bind(this)
    });
  },

  createSuccess: function(model, response) {
    this.collection.add(model);
    Backbone.history.navigate("/posts/" + model.get('id'), { trigger: true });
  },

  createError: function(model, response) {
    console.log(model);
    this.render();
  }
});