import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./Header.style"

const Header = ({ todos }) => {
    const [activeTodoCout, setActiveTodoCount] = useState(0);
    useEffect(() => {
        let count = 0
        todos.forEach((item) => {
            item.isCompleted == false ? count++ : null;
        })
        setActiveTodoCount(count);
    })

    return (
        <View style={styles.header}>
            <Text style={styles.header_text}>Yapılacaklar</Text>
            <Text style={styles.header_text}>{activeTodoCout}</Text>
        </View>
    )
}

export default Header;