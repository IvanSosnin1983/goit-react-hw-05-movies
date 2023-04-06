import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Wrap = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const FormSearch = styled(Form)`
  display: flex;
  align-items: center;
  height: 30px
  border-radius: 3px;
  overflow: hidden;
`;

export const FieldSearch = styled(Field)`
  width: 200px;
  font: inherit;
  font-size: 15px;
  padding: 4px;
`;

export const ButtonSearch = styled.button`
  margin-left: 30px;
  width: 100px;
  height: 30px;
  cursor: pointer;
`;
