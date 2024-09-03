import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTodoScreen({ navigation, route }) {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    const { addTodo } = route.params;
    if (addTodo) {
      addTodo(text);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
});
