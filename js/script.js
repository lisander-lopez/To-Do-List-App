var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    editing: false
  },
  methods: {
    addItemToList: function () {
      app.todos.push({ text: app.itemToAdd });
    },
    deleteItem: function (index) {
      app.todos.splice(index, 1);
    },
    saveListAndRefresh: function () {
     localStorage.setItem("toDoItems", JSON.stringify(app.todos));
     console.log('Saved!');
      
    },
    loadItemList: function () {
      app.todos = JSON.parse(localStorage.getItem("toDoItems")) || [{ text: "Example" }];
    }
  }
});

app.loadItemList();
