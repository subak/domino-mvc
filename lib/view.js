define(["uuid", "domino-class"], function (uuid, parent) {
  "use strict";

  function View(aModel) {
    this.id = uuid.v4();

    Object.defineProperties(this, {
      model: {
        get: function () {
          return aModel.get();
        }
      }
    });
  }

  var fn = parent.extends(View);
  
  return View;
});