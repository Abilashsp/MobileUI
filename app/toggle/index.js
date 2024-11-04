import * as React from 'react';
import { View } from 'react-native';
import { Toggle } from '~/component/ui/toggle';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo icons

function Example() {
  const [pressed, setPressed] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Toggle bold"
        variant="outline"
        style={{
          borderWidth: 1,
          borderColor: pressed ? '#007AFF' : '#ccc',
          backgroundColor: pressed ? '#007AFF' : 'transparent',
          padding: 8,
          borderRadius: 8,
        }}
      >
        <FontAwesome name="bold" size={18} color={pressed ? '#fff' : '#000'} />
      </Toggle>
    </View>
  );
}

export default Example;
