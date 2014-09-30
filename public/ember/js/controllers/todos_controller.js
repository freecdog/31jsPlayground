/**
 * Created by yarvyk on 30.09.2014.
 */

Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function() {
            // Get the todo title set by the "New Todo" text field
            console.log('todo', this.get('content'), this);
            var title = this.get('newTitle');
            if (!title) { return false; }
            if (!title.trim()) { return; }

            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            todo.save();
        }
    },
    remaining: function(){
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),
    inflection: function(value){
        var remaining = this.get('remaining');
        if (remaining == 0) return 'sovsem';
        else if (remaining == 1) return 'ne mnogo';
        else return 'mnogo';
    }.property('remaining')
});

