Ext.require('Ext.ux.app.RoutedApplication', function () {
    App = Ext.create('Ext.ux.app.RoutedApplication', {
        appFolder: '/javascripts/RoutedApp/app',	
		name: 'RoutedApp',
        controllers: [
			'Base',
			'Albums',
			'Artists',
			'Songs'
		],
		requires: [
			'RoutedApp.view.Viewport',
			'RoutedApp.view.FormWindow'
		],
		
        launch: function () {			
			// create Viewport instance								
			var viewport = Ext.create('RoutedApp.view.Viewport', {
				controller: this
			});
									
			// Get a reference to main TabPanel.  This is where top-level controllers will render themselves.
			// eg: this.render("workspace", this.getArtistsIndexView());
			// Think of it as a "render target".
			var workspace = viewport.down('container[region=center]');						
			this.addLayout('workspace', workspace);
			
			// Create Window instance for rendering popup forms upon.  Controllers could render a form upon this shared
			// window instance via:
			// this.render("window", this.getAlbumsCreateView());
			var popup = Ext.create('RoutedApp.view.FormWindow', {});
			this.addLayout('window', popup);
			
			// First set of dispatches render Index views the first time.
			Ext.dispatch('artists');
			Ext.dispatch('albums');
			Ext.dispatch('songs');
			
			// Called 2nd time to setActiveItem.  Kind ugly.
			Ext.dispatch('artists');
        }
    });
});
