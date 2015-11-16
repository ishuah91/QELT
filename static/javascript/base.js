Ext.application({
	name: 'QELT',

	appFolder : '/static/javascript',

	controllers: ['Signin', 'Board', 'Question'],

	launch: function () {
		var app = this;
		app.getController('Signin').isUserSignedIn(function(userdata){
			app.getController('Board')
				.updateUserData(userdata)
				.view.show();
		});
	}
});