import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>

      <Button
        title={'Ir página 3'}
        onPress={() => navigator.navigate('Pagina3')}
      />
    </View>
  );
};

export default Pagina2Screen;
