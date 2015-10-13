TaskApp.module("Entities", function(Entities, TaskApp, Backbone, Marionette, $, _){
  Entities.Task = Backbone.Model.extend({
    defaults: {
      title: " "
    }
  });

  Entities.TaskCollection = Backbone.Collection.extend({
    model: Entities.Task
  });

  var tasks;

  //Seed tasks
  var initializeTasks = function(){
    tasks = new Entities.TaskCollection([
      {title: "Learn Marionette!"},
      {title: "Make a task app"},
      {title: "Remember to eat"}
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
