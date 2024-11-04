import { Textarea } from '~/component/ui/textarea';
import { Text } from '~/component/ui/text';
import React, { useRef, useState } from 'react';
import {
    View,
  } from "react-native";

export default function Example() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null); // Define the inputRef here

  return (
    <View style={{ padding: 20 }}>
      <Text id="textareaLabel" style={{ fontSize: 16, marginBottom: 8 }}>
        Your Thoughts:
      </Text>
      <Textarea
        ref={inputRef}
        placeholder="Write some stuff..."
        value={value}
        onChangeText={setValue}
        aria-labelledby="textareaLabel"
        style={{
          height: 120,
          borderColor: '#ccc',
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
          backgroundColor: '#f9f9f9',
        }}
      />
    </View>
  );
}
