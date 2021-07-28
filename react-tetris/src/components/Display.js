import React from 'react';

import { StyledDisplay } from './styles/StyledDisplay.js';

const Display = ({ gameOver, text }) => (
  <StyledDisplay>{text}</StyledDisplay>
)

export default Display;