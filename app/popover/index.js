import * as React from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '~/component/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '~/component/ui/popover';
import { Text } from '~/component/ui/text';

export default function Example() {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <View className='flex-1 justify-center items-center p-6'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>
            <Text>Open popover</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side={Platform.OS === 'web' ? 'bottom' : 'top'}
          insets={contentInsets}
          className='w-80'
        >
          <Text className='font-medium leading-none native:text-xl'>Dimensions</Text>
          <Text className='text-sm text-muted-foreground'>
            Set the dimensions for the layer.
          </Text>
        </PopoverContent>
      </Popover>
    </View>
  );
}