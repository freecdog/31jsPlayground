/**
 * Created by yarvyk on 30.09.2014.
 */

Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Learn Ember.js',
        isCompleted: true
    },
    {
        id: 2,
        title: '... ...',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Profit!',
        isCompleted: true
    },
    {
        id: 4,
        title: 'Whazzzzzup!',
        isCompleted: false
    }
];