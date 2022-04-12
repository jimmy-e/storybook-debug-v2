import React from 'react';

export interface TitleProps {
  /** Title contents */
  label: string;
}

/** Primary UI component for user interaction */
export const Title = ({ label }: TitleProps) => <h1>{label}</h1>;
