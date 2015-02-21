(function() {
    'use strict';

    QUnit.module('ListView', {
        beforeEach: function () {
            this.todoCollection = new MyApp.TodoCollection();
            this.listView = new MyApp.ListView({
                collection: this.todoCollection
            });
            this.server = sinon.fakeServer.create();
        },
        afterEach: function () {
            this.server.restore();
            delete this.server;
            this.listView.remove();
            delete this.listView;
            this.todoCollection.reset();
            delete this.todoCollection;
        }
    });

    QUnit.test('render with empty collection', function (assert) {
        var $el = this.listView.render().$el;

        assert.ok($el.text().indexOf('List empty') !== -1);
    });

    QUnit.test('render with contents', function (assert) {
        this.server.respondWith('GET', '/todos',
            [200, { 'Content-Type': 'application/json' }, JSON.stringify(TestFixtures.Todos.all)]);

        this.todoCollection.fetch();
        this.server.respond();

        assert.equal(this.listView.$('li').length, this.todoCollection.length);
        assert.ok(this.listView.$('li:contains('+this.todoCollection.at(0).get('title')+')'));
    });

}());
