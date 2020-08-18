import { useState } from 'react';

const useInput = inicialState => {
  const [value, updateValue] = useState(inicialState);

  const onChangeValue = event => {
    const { value } = event.target;

    updateValue(value);
  };

  return [value, onChangeValue];
};

export default useInput;
//Não utilizado, deixado aqui para referência