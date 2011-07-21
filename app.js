Ext.require('Ext.ux.app.Application', function () {
    App = Ext.create('Ext.ux.app.Application', {
        appFolder: '/javascripts/RoutedApp/app',
        controllers: [
			'Base',
			'Albums',
			'Artists',
			'Songs'
		]
        launch: function () {			
			// create Viewport instance								
			var viewport = Ext.create('Foo.view.Viewport', {
				controller: this
			});

			// Create Window instance for rendering popup forms upon
			var popup = Ext.create('Foo.view.FormWindow', {});
			this.addLayout('window', popup);

			// Get a reference to main TabPanel.  This is where top-level controllers will render themselves.
			var workspace = viewport.down('container[region=center]');						
			this.addLayout('workspace', workspace);
			
			
        }
    });
});
