import * as React from 'react';
import { View } from 'react-native';
import { ToggleGroup, ToggleGroupIcon, ToggleGroupItem } from '~/component/ui/toggle-group';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

function Example() {
  const [value, setValue] = React.useState([]);

  return (
    <View className='flex-1 justify-center items-center p-6 gap-12'>
      <ToggleGroup value={value} onValueChange={setValue} type='multiple'>
        <ToggleGroupItem value='bold' aria-label='Toggle bold'>
          <ToggleGroupIcon icon={() => <FontAwesome name="bold" size={18} />} />
        </ToggleGroupItem>
        <ToggleGroupItem value='italic' aria-label='Toggle italic'>
          <ToggleGroupIcon icon={() => <FontAwesome name="italic" size={18} />} />
        </ToggleGroupItem>
        <ToggleGroupItem value='underline' aria-label='Toggle underline'>
          <ToggleGroupIcon icon={() => <FontAwesome name="underline" size={18} />} />
        </ToggleGroupItem>
      </ToggleGroup>
    </View>
  );
}

export default Example;
