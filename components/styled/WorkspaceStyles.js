import styled from 'styled-components';
import { Text } from 'react-native-elements';
import { 
  View,
  ScrollView 
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
`;