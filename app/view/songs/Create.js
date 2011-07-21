Ext.define('Foo.view.albums.Create', {
	extend: 'Ext.form.Panel',
	alias: 'widget.albums.Create',
	title: 'Create Song',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: 'Name'
	}]
});