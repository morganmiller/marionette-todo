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

  var tasks;

  var initializeTasks = function(){
    tasks = new Entities.TaskCollection([
      {id: 1, title: "Learn Marionette!"},
      {id: 2, title: "Make a task app"},
      {id: 3, title: "Remember to eat"}
    ]);
  };

  var API = {
    getTaskEntities: function(){
      if(tasks === undefined){
        initializeTasks();
      }
      return tasks;
    }
  };

  TaskApp.reqres.setHandler("task:entities", function(){
    return API.getTaskEntities();
  })
});
