import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { RootStackParamsList } from "../types/StackParams";
import { BACKGROUND_IMAGE } from "../../CONSTANTS";
import BackgroundImage from "../../assets/rick-and-morty-background.jpg";

type props = NativeStackScreenProps<RootStackParamsList, "Home">;

function HomePage({ navigation, route }: props) {
	return (
		<View style={styles.viewContainer}>
			<ImageBackground
				source={BackgroundImage}
				resizeMode="cover"
				style={styles.backgroundImage}
			>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Welcome to The Rick And Morty Wiki!!!
					</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonsStyled}>
						<Button
							title="Go To Characters"
							color="#002439"
							onPress={() =>
								navigation.push("ListOfCharacters", {
									pageNumber: 1,
									isLastPage: false,
								})
							}
						/>
					</View>
					<View style={styles.buttonsStyled}>
						<Button
							title="Go To Episodes"
							color="#002439"
							onPress={() =>
								navigation.push("ListOfEpisodes", {
									pageNumber: 1,
									isLastPage: false,
								})
							}
						/>
					</View>
					<View style={styles.buttonsStyled}>
						<Button
							title="Go To Locations"
							color="#002439"
							onPress={() =>
								navigation.push("ListOfLocations", {
									pageNumber: 1,
									isLastPage: false,
								})
							}
						/>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	backgroundImage: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	titleContainer: {
		flex: 3,
		margin: 10,
		alignItems: "center",
		justifyContent: "flex-end",
		height: "50%",
	},
	titleText: {
		fontSize: 40,
		color: "#ffffff",
	},
	buttonsContainer: {
		flex: 4,
		justifyContent: "flex-start",
		width: "100%",
		alignItems: "center",
	},
	buttonsStyled: {
		width: "80%",
		margin: 8,
		color: "#002439",
	},
});

export default HomePage;
