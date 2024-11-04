import * as React from 'react';
import { View } from 'react-native';
import { Label } from '~/component/ui/label';
import { Switch } from '~/component/ui/switch';

export default function Example() {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <View className='flex-1 justify-center items-center p-6 gap-12'>
        <View className='flex-row items-center gap-2'>
          <Switch checked={checked} onCheckedChange={setChecked} nativeID='airplane-mode' />
          <Label
            nativeID='airplane-mode'
            onPress={() => {
              setChecked((prev) => !prev);
            }}
          >
            Airplane Mode
          </Label>
        </View>
      </View>
    </>
  );
}