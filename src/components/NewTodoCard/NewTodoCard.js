import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./NewTodoCard.style";

const NewTodoCard = ({ changeText, onPress }) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={changeText}
                placeholder="Yapılacak gir..."
                underlineColorAndroid={"#5a7c85"}
                style={styles.text_input}
                placeholderTextColor="#c0c0c0" />
            <TouchableOpacity
                onPress={onPress}
                style={styles.save_btn} >
                <Text style={styles.save_btn_text}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewTodoCard;