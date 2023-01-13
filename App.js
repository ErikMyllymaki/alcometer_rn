import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(3);
  const [hours, setHours] = useState(1);
  const [result, setResult] = useState(0);
  const [checked, setChecked] = useState('first');




  function calculate() {

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = (weight / 10)
    let grams_left = ((grams - (burning * hours)))

    let alcohol_level = 0

    // if (male) {
    alcohol_level = (grams_left / (weight * 0.7))
    setResult(alcohol_level)
    // }

    // else if (female) {
    //   result = (grams_left / (weight * 0.6))
    //   setResult(result)
    // }

    // if (result < 0) {
    //   setResult(0)
    // }

  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Alcometer</Text>
        <Text>Weight:</Text>
        <TextInput
          style={styles.textInput}
          value={weight}
          keyboardType='numeric'
          onChangeText={w => setWeight(w)}
        />
        <Text>Bottles</Text>
        {/* <Text>Hours</Text> */}

        {/* <RadioButton
        value="first"
        status={ checked === 'male' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('male')}
      />

      <RadioButton
        value="second"
        status={ checked === 'female' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('female')}
      /> */}

        <Button title='calculate' color={'red'} onPress={calculate} />
        <Text style={styles.result}>{result.toFixed(2)}</Text>
        <StatusBar style="auto" />
      </View>


    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 10
  },
  label: {
    fontSize: 18,
    fontWeight: "bold"
  },
  result: {
    color: '#b00000',
    fontSize: 18,
    fontWeight: "bold"
  }
});
