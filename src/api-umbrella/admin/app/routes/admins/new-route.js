Admin.AdminsNewRoute = Admin.AdminsBaseRoute.extend({
  model: function() {
    return Admin.Admin.create();
  },
});

export default undefined;
