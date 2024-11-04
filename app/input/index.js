import React from 'react';
import { Input } from '~/component/ui/input';
import { Text } from '~/component/ui/text';


export default function Example() {
  const [value, setValue] = React.useState('');

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
      <Input
        placeholder='Write some stuff...'
        value={value}
        onChangeText={onChangeText}
        aria-labelledby='inputLabel'
        aria-errormessage='inputError'
      />
  );
}