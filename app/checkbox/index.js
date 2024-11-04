import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Checkbox } from '~/component/ui/checkbox';

function Example() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          checked={isChecked}
          onCheckedChange={setIsChecked}
          style={[styles.checkbox, isChecked && styles.checked]}
        />
        <Text style={styles.label}>Accept Terms and Conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#B0B0B0', // Light gray border for unchecked state
  },
  checked: {
    backgroundColor: '#007AFF', // Blue color when checked
    borderColor: '#007AFF',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
});

export default Example;
