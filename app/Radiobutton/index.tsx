import * as React from 'react';
import { View } from 'react-native';
import { Label } from '~/component/ui/label';
import { RadioGroup, RadioGroupItem } from '~/component/ui/radio-group';

export default function Example() {
  const [value, setValue] = React.useState('Comfortable');

  function onLabelPress(label) {
    return () => {
      setValue(label);
    };
  }

  return (
    <View className='flex-1 justify-center items-center p-6'>
      <RadioGroup value={value} onValueChange={setValue} className='gap-3'>
        <RadioGroupItemWithLabel value='Default' onLabelPress={onLabelPress('Default')} />
        <RadioGroupItemWithLabel value='Comfortable' onLabelPress={onLabelPress('Comfortable')} />
        <RadioGroupItemWithLabel value='Compact' onLabelPress={onLabelPress('Compact')} />
      </RadioGroup>
    </View>
  );
}

function RadioGroupItemWithLabel({
  value,
  onLabelPress,
}: {
  value: string;
  onLabelPress: () => void;
}) {
  return (
    <View className='flex-row gap-2 items-center'>
      <RadioGroupItem
        aria-labelledby={`label-for-${value}`}
        value={value}
        style={{ borderColor: 'blue' }} // Blue border for the radio button
      />
      <Label
        nativeID={`label-for-${value}`}
        onPress={onLabelPress}
        style={{ color: 'blue', fontSize: 16 }} // Blue color for label text
      >
        {value}
      </Label>
    </View>
  );
}
