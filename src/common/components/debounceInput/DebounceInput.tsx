import React, { useEffect, useState } from 'react';
import { InputStyles } from './DebounceInput.styles';

import { DebounceInputTypes } from './DebounceInput.types';

export const DebounceInputComponent: React.FC<DebounceInputTypes> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <InputStyles {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}

