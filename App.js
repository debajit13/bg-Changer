import React, {useState} from 'react';
import {
  Text, // it is like p
  StyleSheet, // it is like style
  View, // it is like a div
  TouchableOpacity, // it is like a button
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBackground = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  const resetBackground = () => {
    setRandomColor('#000000');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBackground}>
          <Text style={styles.text}>Change Color</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBackground}>
          <Text style={styles.text}>Reset Color</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(32, 0, 126)',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});
