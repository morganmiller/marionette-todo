TaskApp.module("Entities", function(Entities, TaskApp, Backbone, Marionette, $, _){
  Entities.Task = Backbone.Model.extend({
    defaults: {
      title: " ",
      status: "incomplete"
    }
  });

  Entities.TaskCollection = Backbone.Collection.extend({
    model: Entities.Task
  });
});
