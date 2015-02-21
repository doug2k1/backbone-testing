(function() {
    'use strict';

    QUnit.module('TodoCollection', {
        beforeEach: function () {
            this.todoCollection = new MyApp.TodoCollection();
            this.server = sinon.fakeServer.create();
        },
        afterEach: function () {
            this.server.restore();
            delete this.server;
            this.todoCollection.reset();
            delete this.todoCollection;
        }
    });

    QUnit.test('fetch', function (assert) {
        this.server.respondWith('GET', '/todos',
            [200, { 'Content-Type': 'application/json' }, JSON.stringify(TestFixtures.Todos.all)]);

        this.todoCollection.fetch();
        this.server.respond();

        assert.equal(this.todoCollection.length, 3);
    });

}());
