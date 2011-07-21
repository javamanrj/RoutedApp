Ext.define('RoutedApp.view.Navigation', {
	extend: 'Ext.menu.Menu',
	alias: 'widget.view.Navigation',
	floating: false,
	plain: true,
	title: 'Navigation',
	items: [{
		text: 'Artists',
		action: 'artists'
	}, {
		text: 'Albums',
		action: 'albums'
	}, {
		text: 'Songs',
		action: 'songs'
	}],
	listeners: {
		click: function(menu, item) {
			Ext.dispatch(item.action);
		}
	}
});