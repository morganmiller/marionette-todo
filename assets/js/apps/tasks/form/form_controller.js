TaskApp.module("TasksModule.Form", function(Form, TaskApp, Backbone, Marionette, $, _){
  Form.Controller = {
    showForm: function(){
      var inputForm = new Form.Fields;
      TaskApp.regions.form.show(inputForm)
    }
    //
    //
    //
    //listTasks: function(){
    //  var tasks = TaskApp.request("task:entities");
    //
    //  var tasksListView = new List.Tasks({
    //    collection: tasks
    //  });
    //
    //  tasksListView.on("childview:task:delete", function(childView, model){
    //    tasks.remove(model)
    //  });
    //
    //  TaskApp.regions.main.show(tasksListView);
    //}
  }
});
