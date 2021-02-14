import styled from 'styled-components';
import { Text } from 'react-native-elements';
import {
  View,
  ScrollView ,
  TextInput,
} from 'react-native';

export const ViewContainer = styled(View)`
  margin-top: 10px;
`;

export const Title = styled(Text)`
  color: #f2ea0d;
  margin: 10px 0;
`;

export const TextAbout = styled(Text)`
  color: #fff;
  font-size: 14px;
`;

export const ContainerAbout = styled(View)`
  padding: 17px 25px;
  height: 107px;
  margin-bottom: 17px;
  align-items: flex-start;
`;

export const ViewContainerWorkspaces = styled(View)`
  background-color: #fff;
  margin-top: 17px;
  padding: 23px 0;
`;

export const ViewContainerWorkspace = styled(ScrollView)`
  background-color: white;
  padding: 9px 37px;
`;

export const ViewContainerSprint = styled(View)`
  flex: 1;
  flex-direction: row;
  padding: 9px 0 15px 0;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
`;

export const CustomInput = styled(TextInput)`
  font-size: 18px;
  padding: 10px 0;
  margin: 8px 0;
`;

export const TextSprint = styled(Text)`
  font-size: 14px;
  margin-right: 8px;
  width: 120px;
  line-height: 24px;
`;

export const TextDescription = styled(TextInput)`
  font-size: 14px;
  line-height: 24px;
  padding: 9px 0 15px 0;
  margin-bottom: 6px;
`;

export const TextWeeks = styled(Text)`
  font-size: 14px;
  padding: 9px 0;
  margin-bottom: 5px;
`;

export const CustomInputWeeks = styled(TextInput)`
  border-radius: 10px;
  padding: 5px 10px;
  border: 1px solid gray;
  text-align: center;
  width: 50%;
  margin-bottom: 23px;
`;

export const ContainerRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const CustomInputTeammates = styled(TextInput)`
  padding: 9px 0;
  margin-bottom: 9px;
`;

export const ContainerBacklog = styled(ContainerRow)`
  margin: 40px 0 15px 0;
  justify-content: flex-start;
`;
