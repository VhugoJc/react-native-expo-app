import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

interface Props {
    right: boolean,
    title: string,
    onPress: () => void
}

export const Fab = ({right, title,onPress}: Props) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={right ?styles.btnLocationR :styles.btnLocationL}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#fff",
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center',
    },
    btnText: {
        alignSelf: "center",
        fontSize: 25
    },
    btnLocationR: {
        position: "absolute",
        bottom: 20,
        right: 20
    },
    btnLocationL: {
        position: "absolute",
        bottom: 20,
        left: 20
    }
});