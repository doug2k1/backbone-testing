(function() {
    'use strict';

    QUnit.module('DetailsView', {
        beforeEach: function () {
            this.detailsView = new MyApp.DetailsView();
        },
        afterEach: function () {
            this.detailsView.remove();
            delete this.detailsView;
        }
    });

    QUnit.test('render', function (assert) {
        assert.ok(this.detailsView.render().$el.html() !== '');
    });

}());
