// Button.stories.js

import React from 'react';

import TestButton from './TestButton';

export default {
  title: 'Components/Button',
  component: TestButton
}

export const Primary = () => <TestButton primary label="Button"/>;

Primary.storyName = 'I am the primary';