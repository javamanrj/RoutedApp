// Configure auto-loader
Ext.Loader.setConfig({
    enabled: true,
    paths: { 
        'RoutedApp.lib': '/javascripts/RoutedApp/lib',
        'Ext.ux': '/javascripts/RoutedApp/ux'
    }
});

Ext.log = function() {
	console.log.apply(console, arguments);
}