Ext.define('Foo.view.albums.Create', {
	extend: 'Ext.form.Panel',
	alias: 'widget.albums.Create',
	title: 'Create Album',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: 'Name'
	}]
});