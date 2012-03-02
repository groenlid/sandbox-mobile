Ext.application({
    name: 'Uranime',

    launch: function() {
    	Ext.create("Ext.tab.Panel", {
    		fullscreen: true,
    		tabBarPosition: 'bottom',
    		items: [
    			{
    				title: 'Blog',
    				iconCls: 'star',
    				xtype: 'nestedlist',
    				displayField: 'title',
    				
    				store: {
    					type: 'tree',
    					fields: [
    						'title', 'link', 'author', 'contentSnipped', 'content',
		    				{name: 'leaf', defaultValue: true}
    					],

    					root: {
    						leaf: false
    					},

    					proxy: {
    						type: 'jsonp',
    						url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
    						reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
    					}
    				}	
    			},
    			{
    				title: 'Home',
    				iconCls: 'home',
    				html: [
                        '<img src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>You're creating the Getting Started app. This demonstrates how ",
                        "to use tabs, lists and forms to create a simple app</p>",
                        '<h2>Sencha Touch (2.0.0)</h2>'
                    ].join("")
    			}
    		]
    	});
    }
});