import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-bottom: 5px;
  background-color: white;
  border-bottom-width: ${StyleSheet.hairlineWidth},
  border-bottom-color: rgba(0,0,0,0.1);
`

export const RowIcon = styled.Image`
  width: 64px;
  height: 64px;
  margin-right: 20px;
  border-radius: 50%;
`

export const RowData = styled.View`
  flex: 1;
`

export const RowDataText = styled.Text`
  font-size: 15px;
  text-transform: capitalize;
  color: #4b4b4b;
`

export const RowDataSubText = styled.Text`
  font-size: 13px;
  opacity: 0.8;
  color: #a8a689;
  margin-top: 4px;
`
