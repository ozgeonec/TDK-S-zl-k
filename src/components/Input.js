import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  size,
  compose,
  space,
  typography
} from 'styled-system';

const Input = styled(TextInput)(
  compose(
    color,
    size,
    space,
    typography
  )
);

export default Input;
