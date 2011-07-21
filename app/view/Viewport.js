Ext.define('RoutedApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires: [
        'RoutedApp.view.Header',
		'RoutedApp.view.Footer',
		'RoutedApp.view.Navigation'
	],	
	layout: 'border',
	items: [{
		xtype: 'view.Header',
		region: 'north',
		height: 40
	}, {
		xtype: 'view.Navigation',
		region: 'west',
		width: 200
	}, {
		xtype: 'tabpanel',	// <-- this is the render-target "workspace", since it's the center region
		//xtype: 'container',	// <-- instead of "tabpanel", can also do card-layout
		//layout: 'card',
		region: 'center'	
	}, {
		xtype: 'view.Footer',
		region: 'south',
		height: 32				
	}]	
});