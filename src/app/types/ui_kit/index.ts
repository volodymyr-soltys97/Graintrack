import React from 'react'

export interface ITextField {
  label: string,
  id: string,
  type: string,
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required: boolean,
}

export type Button = 'submit' | 'reset' | 'button';

export interface IButton {
  type: Button,
  children: React.ReactNode,
  onClick?: () => void,
}