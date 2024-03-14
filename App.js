import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './components/Header';
import InformationContainer from './components/InformationContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <InformationContainer />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22a2ae',
  },
});
