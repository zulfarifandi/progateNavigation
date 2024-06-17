import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({Navigator}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
      title="Pergi ke Progate"
      onPress={()=> {
        navigator.navigator('Progate',{
          name:'Ninja ken',
          language:'React Nativ',
        })
        }}
      />
    </View>
  );
};
const progateScreen =()=>{
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate!</Text>
      <Button 
      title="Kembali"
      onPress={() =>
        Navigation.goBack()
      }
      />
    </View>
  )
}
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Progate" component={progateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;