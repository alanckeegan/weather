import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const PrettyButton = styled(Button)`

  background: black;

`





export default function EnterButton() {
  return <PrettyButton>Get Weather</PrettyButton>;
}
