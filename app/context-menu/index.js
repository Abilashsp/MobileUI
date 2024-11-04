import * as React from 'react';
import { Platform, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '~/component/ui/context-menu';
import { Text } from '~/component/ui/text';

function Example() {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [subCheckboxValue, setSubCheckboxValue] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('pedro');

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className="flex h-[150px] w-full max-w-[300px] mx-auto items-center justify-center rounded-lg border border-gray-400 bg-gray-100 shadow-md"
      >
        <Text
          className="text-gray-700 text-sm native:text-lg"
          style={{ color: 'black' }}
        >
          {Platform.OS === 'web' ? 'Right click here' : 'Long press here'}
        </Text>
      </ContextMenuTrigger>

      <ContextMenuContent
        align="start"
        insets={contentInsets}
        className="w-64 native:w-72 bg-white rounded-lg shadow-lg p-2"
      >
        <ContextMenuItem inset className="hover:bg-blue-100 rounded-lg p-2">
          <Text style={{ color: '#333', fontWeight: '600' }}>Back</Text>
          <ContextMenuShortcut style={{ color: '#1E90FF' }}>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled className="p-2">
          <Text style={{ color: '#888' }}>Forward</Text>
          <ContextMenuShortcut style={{ color: '#ccc' }}>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset className="hover:bg-blue-100 rounded-lg p-2">
          <Text style={{ color: '#333', fontWeight: '600' }}>Reload</Text>
          <ContextMenuShortcut style={{ color: '#1E90FF' }}>⌘R</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuSub>
          <ContextMenuSubTrigger inset className="hover:bg-blue-100 rounded-lg p-2">
            <Text style={{ color: '#333', fontWeight: '600' }}>More Tools</Text>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="web:w-48 native:mt-1 bg-gray-50 shadow-md rounded-lg">
            <Animated.View entering={FadeIn.duration(200)}>
              <ContextMenuItem className="hover:bg-gray-100 p-2 rounded-lg">
                <Text style={{ color: '#333' }}>Save Page As...</Text>
                <ContextMenuShortcut style={{ color: '#1E90FF' }}>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem className="hover:bg-gray-100 p-2 rounded-lg">
                <Text style={{ color: '#333' }}>Create Shortcut...</Text>
              </ContextMenuItem>

              <ContextMenuSeparator />
              <ContextMenuItem className="hover:bg-gray-100 p-2 rounded-lg">
                <Text style={{ color: '#333' }}>Developer Tools</Text>
              </ContextMenuItem>
            </Animated.View>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={checkboxValue}
          onCheckedChange={setCheckboxValue}
          closeOnPress={false}
          className="p-2 hover:bg-blue-100 rounded-lg"
        >
          <Text style={{ color: '#333' }}>Show Bookmarks Bar</Text>
          <ContextMenuShortcut style={{ color: '#1E90FF' }}>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={subCheckboxValue}
          onCheckedChange={setSubCheckboxValue}
          closeOnPress={false}
          className="p-2 hover:bg-blue-100 rounded-lg"
        >
          <Text style={{ color: '#333' }}>Show Full URLs</Text>
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup
          value={radioValue}
          onValueChange={setRadioValue}
          className="p-2"
        >
          <ContextMenuLabel inset>
            <Text style={{ color: '#333', fontWeight: '600' }}>People</Text>
          </ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem
            value="pedro"
            closeOnPress={false}
            className="hover:bg-blue-100 rounded-lg p-2"
          >
            <Text style={{ color: '#333' }}>Elmer Fudd</Text>
          </ContextMenuRadioItem>
          <ContextMenuRadioItem
            value="colm"
            closeOnPress={false}
            className="hover:bg-blue-100 rounded-lg p-2"
          >
            <Text style={{ color: '#333' }}>Foghorn Leghorn</Text>
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export default Example;
