import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Switch } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [hours, setHours] = useState(1);
  const [result, setResult] = useState(0);
  const [selectedGender, setSelectedGender] = useState('female');
  const [theme, setTheme] = useState("light");

  function calculateAlcoholLevel() {

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = (weight / 10)
    let grams_left = ((grams - (burning * hours)))
    let alcohol_level = 0

    if (selectedGender === 'male') {
      alcohol_level = (grams_left / (weight * 0.7))
      setResult(alcohol_level)
    }

    else if (selectedGender === 'female') {
      alcohol_level = (grams_left / (weight * 0.6))
      setResult(alcohol_level)
    }

    if (alcohol_level < 0) {
      setResult(0)
    }

    if (!weight) {
      Alert.alert('Please enter a value for weight.');
    } else if (weight < 0) {
      Alert.alert('Weight cannot be a negative number!');
    }

  }

  return (
    <ScrollView style={theme === "dark" ? Styles.dark : Styles.light}>

      <View style={[Styles.container, theme === "dark" ? Styles.dark : Styles.light]}>

        <Text style={Styles.heading}>Alcometer</Text>


        <Switch
          value={theme === "dark"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />

        <Text>Weight:</Text>
        <TextInput
          style={Styles.textInput}
          value={weight}
          keyboardType='numeric'
          onChangeText={w => setWeight(w)}
        />
        <Text>Bottles:</Text>

        <View style={[Styles.wrapper, Styles.border]}>
          <TouchableOpacity onPress={() => bottles > 1 && setBottles(bottles - 1)}>
            <Text style={{ fontSize: 20, padding: 10 }}>-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>{bottles}</Text>
          <TouchableOpacity onPress={() => setBottles(bottles + 1)}>
            <Text style={{ fontSize: 20, padding: 10 }}>+</Text>
          </TouchableOpacity>
        </View>

        <Text>Hours:</Text>

        <View style={[Styles.wrapper, Styles.border]}>
          <TouchableOpacity onPress={() => hours > 1 && setHours(hours - 1)}>
            <Text style={{ fontSize: 20, padding: 10 }}>-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, paddingHorizontal: 15 }}>{hours}</Text>
          <TouchableOpacity onPress={() => setHours(hours + 1)}>
            <Text style={{ fontSize: 20, padding: 10 }}>+</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={() => setSelectedGender('female')} style={[Styles.wrapper, {padding: 15}]}>
        <View style={[Styles.radio]}>
            {selectedGender === 'female' && (
              <View style={Styles.circle} />
            )}
          </View>
          <Text>Female</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedGender('male')} style={[Styles.wrapper, {padding: 15}]}>
          <View style={[Styles.radio]}>
            {selectedGender === 'male' && (
              <View style={Styles.circle} />
            )}
          </View>
          <Text style={{marginRight: 14}}>Male</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.button} title='calculate' onPress={calculateAlcoholLevel}>
              <Text>Calculate</Text>
        </TouchableOpacity>
        <Text style={[Styles.result, result >= 0 && result < 0.05 ? Styles.low : result >= 0.05 && result < 0.08 
          ? Styles.medium : Styles.high, {marginTop: 20}]}>Blood alcohol level: {result.toFixed(2)}
        </Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>



  );
}

