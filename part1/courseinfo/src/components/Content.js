import React from 'react';
import { Part } from './Part';

export const Content = ({name, exercises}) => (
    <Part part={name} exercises={exercises}/>
);

