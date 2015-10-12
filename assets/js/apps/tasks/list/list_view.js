TaskApp.module("TasksModule.List", function(List, TaskApp, Backbone, Marionette, $, _){
  List.Task = Marionette.ItemView.extend({
    tagName: "li",
    template: "#task-list-item"
  });

  List.Tasks = Marionette.CompositeView.extend({
    className: "tasks-list",
    template: "#task-list",
    childView: List.Task,
    childViewContainer: "ul"
  });
});
