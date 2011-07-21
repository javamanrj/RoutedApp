Ext.define('Foo.app.controller.Base', {
	extend: 'Ext.ux.app.RoutedController',
	
	index: function(request) {
		this.render("workspace", this["get" + this.id + "IndexView"]());
	}
});