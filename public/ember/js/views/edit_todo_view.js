/**
 * Created by yarvyk on 30.09.2014.
 */

Todos.EditTodoView = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
    }
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);