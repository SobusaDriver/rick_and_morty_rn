import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./app/pages/HomePage";
import ListOfCharacters from "./app/pages/ListOfCharacters";
import ListOfEpisodes from "./app/pages/ListOfEpisodes";
import { RootStackParamsList } from "./app/types/StackParams";
import ListOfLocations from "./app/pages/ListOfLocations";

const Stack = createNativeStackNavigator<RootStackParamsList>();
const initParams = { pageNumber: 1, isLastPage: false };
export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name="Home"
					component={HomePage}
					options={{ title: "Rick And Morty Wiki" }}
				/>
				<Stack.Screen
					name="ListOfCharacters"
					options={{ title: "List Of All Characters" }}
					component={ListOfCharacters}
					initialParams={initParams}
				/>
				<Stack.Screen
					name="ListOfEpisodes"
					options={{ title: "List of All Episodes" }}
					component={ListOfEpisodes}
					initialParams={initParams}
				/>
				<Stack.Screen
					name="ListOfLocations"
					options={{ title: "List Of All Locations" }}
					component={ListOfLocations}
					initialParams={initParams}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
