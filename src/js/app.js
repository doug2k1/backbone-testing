var MyApp = MyApp || {};

(function() {
    'use strict';

    MyApp.Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            done: false,
            description: ''
        }
    });

    MyApp.TodoCollection = Backbone.Collection.extend({
        model: MyApp.Todo,
        url: '/todos'
    });

    MyApp.ListView = Backbone.View.extend({
        id: 'listView',
        tagName: 'ul',

        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
        },

        render: function () {
            var html = '';

            if (this.collection.length === 0) {
                html = '<li>List empty</li>';
            } else {
                html = this.collection.map(this.itemHtml, this).join();
            }

            this.$el.html(html);

            return this;
        },

        itemHtml: function (item) {
            return '<li><p>' + item.get('title') + '</p></li>';
        }
    });

    MyApp.DetailsView = Backbone.View.extend({
        id: 'detailsView',

        render: function () {
            this.$el.html('<div></div>');

            return this;
        }
    });

    MyApp.NotTestedView = Backbone.View.extend({
        render: function () {
            this.$el.html('Not covered by tests');

            return this;
        }
    });
}());
