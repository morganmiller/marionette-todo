TaskApp.module("TasksModule.List", function(List, TaskApp, Backbone, Marionette, $, _){
  List.Task = Marionette.ItemView.extend({
    tagName: "li",
    template: "#task-list-item"
  });

  List.Tasks = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: List.Task
  });
});
