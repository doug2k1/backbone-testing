(function() {
    'use strict';

    QUnit.module('Todo');

    QUnit.test('constructor defaults', function (assert) {
        var todo = new MyApp.Todo();

        assert.equal(todo.get('title'), '');
        assert.equal(todo.get('done'), false);
        assert.equal(todo.get('description'), '');
    });

}());
