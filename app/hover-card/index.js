import { View } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from '~/component/ui/avatar';
import { Button } from '~/component/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/component/ui/hover-card';
import { Text } from '~/component/ui/text';

export default function Example() {
  return (
    <View className='flex-1 justify-center items-center p-6 gap-12 bg-gray-100'>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant='link' size='lg'>
            <Text style={{ color: 'black' }}>@nextjs</Text>
          </Button>
        </HoverCardTrigger>
        
        <HoverCardContent className='w-80 native:w-96 bg-gray-200 rounded-lg p-4 shadow-lg'>
          <View className='flex flex-row justify-between gap-4'>
            <Avatar alt='Vercel avatar'>
              <AvatarImage source={{ uri: 'https://github.com/vercel.png' }} />
              <AvatarFallback>
                <Text style={{ color: 'black' }}>VA</Text>
              </AvatarFallback>
            </Avatar>
            <View className='gap-1 flex-1'>
              <Text className='text-sm native:text-base font-semibold' style={{ color: 'black' }}>@nextjs</Text>
              <Text className='text-sm native:text-base' style={{ color: 'black' }}>
                The React Framework – created and maintained by @vercel.
              </Text>
              <View className='flex flex-row items-center pt-2 gap-2'>
                <Text className='text-xs native:text-sm' style={{ color: '#4B5563' }}>
                  Joined December 2021
                </Text>
              </View>
            </View>
          </View>
        </HoverCardContent>
      </HoverCard>
    </View>
  );
}
