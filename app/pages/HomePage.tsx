import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, StyleSheet } from "react-native";
import { RootStackParamsList } from "../types/StackParams";

type props = NativeStackScreenProps<RootStackParamsList, 'Home'>

function HomePage({ navigation, route }: props) {
  return (
    <View style={styles.viewContainer}>
      <Text>Welcome to The Rick And Morty Wiki!!!</Text>
      <Button title="Go To Characters" onPress={() => navigation.push('ListOfCharacters', { pageNumber: 1, isLastPage: false })} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
