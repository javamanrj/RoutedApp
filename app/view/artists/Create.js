Ext.define('Foo.view.artists.Create', {
	extend: 'Ext.form.Panel',
	alias: 'widget.artists.Create',
	title: 'Create artist',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: 'Name'
	}]
});