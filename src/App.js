import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TodoCard from "./components/TodoCard";
import Header from "./components/Header";
import NewTodoCard from "./components/NewTodoCard";

let todos_data = [{
    id:0,
    tododes:"Ekmek Alınacak",
    isCompleted:false
}]
const App = () => {
    const [todos, setTodos] = useState(todos_data)
    const [text,setText]=useState("");
    const [id,setId]=useState(todos_data[todos_data.length-1].id)

    const handleTodoPress = (id) => {
        todos_data = todos_data.filter((item) => {
            if (item.id == id) {
                item.isCompleted = true
                return item
            }
            else {
                return item
            }
        })
        setTodos(todos_data)
    }

    const handleText=(text)=>{
        setText(text);
    }

    const handleSaveBtn=()=>{
        todos_data.push({id:id+1,tododes:text,isCompleted:false})
        setId(id+1)
        setTodos(todos_data)
    }

    return (
        <View style={styles.container}>
            <Header todos={todos} />
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoCard onPressTodo={handleTodoPress} todo={item} />}
            />
            <NewTodoCard changeText={handleText} onPress={handleSaveBtn} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#102027",
        alignItems: "center",
    },
})

export default App;