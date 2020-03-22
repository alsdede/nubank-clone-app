import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
  AnnotationText,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="attach-money" size={28} color="#999" />
              <Text>Conta</Text>
            </View>
            <Icon name="visibility-off" size={28} color="#999" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$500,00</Description>
          </CardContent>
          <CardFooter>
            <Icon name="monetization-on" size={28} color="#999" />
            <Annotation>
              <AnnotationText>
                Transferência de R$ 350,00 recebida de Adrisson C. Floriano 22
                mar
              </AnnotationText>
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
