import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();

  const [taskItems, settaskItems] = useState([]);

  const handleaddTask = () => {
    Keyboard.dismiss();
    settaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemscopy = [...taskItems];
    itemscopy.splice(index, 1);
    settaskItems(itemscopy);

  }




  return (
    <View style={styles.container}>

      <View style={styles.TitleWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (<TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>)
            })
          }

        </View>
      </View>


      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writetask}>
        <TextInput style={styles.input} placeholder={"write a Task"} value={task} onChangeText={text => setTask(text)}>

        </TextInput>
        <TouchableOpacity onPress={() => handleaddTask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  TitleWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    margin: 30,

  },
  writetask: {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    width: 250,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C0C0C0',


  },
  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0'
  },
  addtext: {},

});
