import { ReactNode } from 'react';

export interface AuthLayoutProps {
  children: ReactNode | ReactNode[];
  title: string;
  caption: string
  heading: string
}
