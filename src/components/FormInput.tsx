import React from 'react';

import { Input } from './ui/input';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  helperText?: string;
  id: string;
  label?: string;
};

export function FormInput({
  errorMessage,
  helperText,
  id,
  label,
  onChange,
  value,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex flex-col" htmlFor={id}>
        {label && <span className="font-bold">{label}</span>}

        {helperText && (
          <span className="text-sm text-gray-600">{helperText}</span>
        )}

        <Input
          {...rest}
          className={errorMessage && 'border-red-600'}
          id={id}
          onChange={onChange}
          value={value}
        />
      </label>

      {errorMessage && (
        <span className="text-red-600 text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
