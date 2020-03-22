import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <SimpleLineIcons name="screen-smartphone" size={24} color="#fff" />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="monetization-on" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="monetization-on" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
