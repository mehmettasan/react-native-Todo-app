import { StyleSheet } from "react-native";

export default StyleSheet.create({
    todo_button_active:{
        minWidth:"90%",
        height:50,
        backgroundColor:"#7da453",
        borderRadius:10,
        padding:10,
        justifyContent:"center",
        margin:10,
    },
    todo_button_deactive:{
        minWidth:"90%",
        height:50,
        backgroundColor:"#37474f",
        borderRadius:10,
        padding:10,
        justifyContent:"center",
        margin:10,
    },
    todo_text_active:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
    todo_text_deactive:{
        color:"#c0c0c0",
        textDecorationLine:"line-through",
        fontSize:20,
        fontWeight:"bold"
    }
})