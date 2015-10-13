TaskApp.module("TasksModule.Form", function(Form, TaskApp, Backbone, Marionette, $, _){
  Form.Controller = {
    showForm: function(){
      var inputForm = new Form.Fields;
      TaskApp.regions.form.show(inputForm)
    }
  }
});
