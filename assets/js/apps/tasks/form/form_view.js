TaskApp.module("TasksModule.Form", function(Form, TaskApp, Backbone, Marionette, $, _) {
  Form.Fields = Marionette.ItemView.extend({
    template: "#form-field",

    ui: {
      input: "#new-task"
    },

    events: {
      "keypress #new-task": "receiveInput"
    },

    receiveInput: function(e){
      var ENTER_KEY = 13;
      var newTaskTitle = this.ui.input.val().trim();

      if (e.which === ENTER_KEY && newTaskTitle){
        this.createNewTask(newTaskTitle)
      }
    },

    createNewTask: function(newTaskTitle){
      if(newTaskTitle.trim() === ""){return;}
      TaskApp.TasksModule.List.Controller.listTasks(newTaskTitle);
      this.ui.input.val("")
    }
  })
});
