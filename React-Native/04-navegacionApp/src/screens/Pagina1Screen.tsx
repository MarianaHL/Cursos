import React, {useEffect} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title={'Menú'}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>

      <Button
        title={'Ir a página 2'}
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Text style={{marginVertical: 20}}>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856d6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#ff9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Mariana',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Mariana</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
