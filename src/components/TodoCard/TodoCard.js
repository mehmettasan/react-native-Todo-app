import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./TodoCard.style"

const TodoCard = ({ todo, onPressTodo }) => {

  return (
    <TouchableOpacity
      style={todo.isCompleted ? styles.todo_button_deactive : styles.todo_button_active}
      onPress={() => onPressTodo(todo.id)}>
      <Text style={todo.isCompleted ? styles.todo_text_deactive : styles.todo_text_active}>{todo.tododes}</Text>
    </TouchableOpacity>
  )
}

export default TodoCard;
