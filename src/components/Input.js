import React from 'react'

export default function onEditTodo() {
  return (
    const onEditTodo = (id, newValue) => {
      this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.name = newValue;
        }
      });
    }
  
  )
}

export default function onSubmitEditTodo() {
  return (
    const onSubmitEditTodo = (e) => {
      e.preventDefault();
  
      this.onEditTodo(this.state.currentid, this.state.currentValue);
      this.setState({ editing: false });
    }
  )
}


export default function onEditInputChange() {
  return (
    onToggleEdit = (todo) => {
      this.setState({ editing: true });
      this.setState({ currentid: todo.id });
      this.setState({ currentValue: todo.name });
    };
  
    onEditInputChange = (e) => {
      this.setState({ currentValue: e.target.value });
    };
  )
}

