import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {
    return (
        <View>
            <Text>{props.Text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Task;
