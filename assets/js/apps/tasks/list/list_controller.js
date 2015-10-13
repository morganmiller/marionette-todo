TaskApp.module("TasksModule.List", function(List, TaskApp, Backbone, Marionette, $, _){
  List.Controller = {
    listTasks: function(){
      var tasks = TaskApp.request("task:entities");

      var tasksListView = new List.Tasks({
        collection: tasks
      });

      tasksListView.on("childview:task:delete", function(childView, model){
        tasks.remove(model)
      });

      TaskApp.regions.main.show(tasksListView);
    }
  }
});
