Ext.define('RoutedApp.view.albums.Index', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.albums.Index',
	title: 'Albums Grid',
	html: 'Albums rows here',
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			text: 'Add',
			handler: function() {
				Ext.dispatch('albums/add');
			}
		}]
	}]
});