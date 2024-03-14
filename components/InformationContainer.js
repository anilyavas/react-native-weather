import { View, Text, Image, StyleSheet } from 'react-native';
import sunny from '../assets/images/sunny-icon-17.png';

const InformationContainer = () => {
  return (
    <View style={styles.container}>
      <Image source={sunny} />
      <Text style={styles.degree}>30°</Text>
    </View>
  );
};

export default InformationContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  degree: {
    fontSize: 50,
    color: 'snow',
  },
});
