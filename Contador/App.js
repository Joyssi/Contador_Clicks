import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native'; 
import Counter from './Componentes/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Contenedor del logo */}
      <View style={styles.logoContainer}>
        <Image style={styles.logoFree} source={require('./Imagenes/logo.png')} />
      </View>
      <Counter />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0a0a23",
  },
  logoContainer: {
    justifyContent: 'center',  
    alignItems: 'center',
    marginTop: 40,  // Espacio para el logo 
  },
  logoFree: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
});
