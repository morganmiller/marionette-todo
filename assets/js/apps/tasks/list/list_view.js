TaskApp.module("TasksModule.List", function(List, TaskApp, Backbone, Marionette, $, _){
  List.Task = Marionette.ItemView.extend({
    tagName: "li",
    className: "list-group-item",
    template: "#task-list-item",

    events: {
      "click button.toggle-completed": "completeTask"
    },

    completeTask: function(e){
      e.preventDefault();
      this.trigger("task:delete", this.model)
    },

    remove: function(){
      var task = this;
      this.$el.slideUp(function(){
        //instead of just removing the task, remove it and then add it to a
        //new sub-module, like a completedList or something.
        Marionette.ItemView.prototype.remove.call(task)
      });
    }
  });

  List.Tasks = Marionette.CompositeView.extend({
    className: "tasks-list",
    template: "#task-list",
    childView: List.Task,
    childViewContainer: "ul"
  });
});
