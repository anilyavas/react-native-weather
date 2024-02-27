import { View, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <EvilIcons name='location' size={30} color={'black'} />
      <Text style={styles.cityName}>Eskişehir,Turkey</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  cityName: {
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 10,
  },
});
