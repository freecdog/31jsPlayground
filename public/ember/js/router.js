/**
 * Created by yarvyk on 26.09.2014.
 */

Todos.Router.map(function() {
    // If use history API need to use path /ember
    //this.resource('todos', { path: '/ember' });
    this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});

// if you don't want to use deep linking (url#/route), use history API,
//Todos.Router.reopen({
//    location: 'history'
//});