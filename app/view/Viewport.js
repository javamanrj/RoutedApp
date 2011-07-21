Ext.define('Foo.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires: [
        'Foo.view.Header',
		'Foo.view.Footer'
	],	
	layout: 'border',
	items: [{
		xtype: 'view.Header',
		region: 'north',
		height: 40
	}, {
		xtype: 'tabpanel',	// <-- this is the render-target "workspace", since it's the center region
		region: 'center'
	}, {
		xtype: 'view.Footer',
		region: 'south',
		height: 32				
	}]	
});