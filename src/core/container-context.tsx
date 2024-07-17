import React from 'react';
import { Container } from 'inversify';

export const ContainerContext = React.createContext<Container | null>(null);