var TaskApp = new Marionette.Application();

TaskApp.on("before:start", function(){
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
      main: "#main-region",
      form: "#form-region"
    }
  });

  TaskApp.regions = new RegionContainer();
});

TaskApp.on("start", function() {
  TaskApp.TasksModule.Form.Controller.showForm();
  TaskApp.TasksModule.List.Controller.listTasks();
});
