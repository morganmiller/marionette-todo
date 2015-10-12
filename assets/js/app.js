var TaskApp = new Marionette.Application();

TaskApp.on("before:start", function(){
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
      main: "#main-region"
    }
  });

  TaskApp.regions = new RegionContainer();
});
