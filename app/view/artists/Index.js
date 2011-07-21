Ext.define('RoutedApp.view.artists.Index', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.artists.Index',
	title: 'Artists Grid',
	html: 'Artists rows here',

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			text: 'Add',
			handler: function() {
				Ext.dispatch('artists/add');
			}
		}]
	}]
});