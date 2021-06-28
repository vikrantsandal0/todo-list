import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');
  console.log('value======', value);

  return {
    value,
    onChange: event => {
      setValue(event.target.value);
    },
    reset: () => setValue('')
  };
};
