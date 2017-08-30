/**
* @author Dmitry Malakhov
*/

'use strict';

/* eslint-disable  import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './';

const onClickAction = action('onClick');

storiesOf('Input', module)
  .add('default props', () => <Input onClick={onClickAction} />);
