import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Img from './assets/fig3.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Text style={styles.outro}>Outro conteudo</Text>
      <Image source={{ uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-45yXdYNicDo%2FTlVLVE6jqqI%2FAAAAAAAADX8%2FjWWUTjEp34Y%2Fs1600%2Fpaisagem-montanhosa-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg" }} style={styles.img} />
      <Text>Texto abaixo da imagem</Text>
      <Image source={Img} style={styles.gnd} />
      <Text style={styles.texto}>A Lua é o satélite natural do <Text style={styles.destaque}>planeta Terra</Text>, distanciados por aproximadamente 384.405 km.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  x: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2
  },
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },
  outro: {
    marginTop: 30,
    backgroundColor: '#ce58ef',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    letterSpacing: 16
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'red'
  },
  gnd: {
    width: 300,
    height: 300
  },
  texto: {
    color: '#fff',
    textAlign: 'center'
  },
  destaque: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});
