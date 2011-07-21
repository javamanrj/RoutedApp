// Configure auto-loader
Ext.Loader.setConfig({
    enabled: true,
    paths: {        
        'Foo.lib': '/Web/javascripts/foo/lib',
        'Ext.ux': '/Web/javascripts/foo/ux'
    }
});

Ext.require([
	'Foo.view.FormWindow'
]);
