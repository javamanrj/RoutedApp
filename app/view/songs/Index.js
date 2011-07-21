Ext.define('RoutedApp.view.songs.Index', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.songs.Index',
	title: 'Songs Grid',
	html: 'Songs rows here',
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			text: 'Add',
			handler: function() {
				Ext.dispatch('songs/add');
			}
		}]
	}]
});