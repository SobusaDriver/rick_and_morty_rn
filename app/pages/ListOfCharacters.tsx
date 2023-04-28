import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getCharacters } from "../services";
import CardItem from "../components/CardItem";
import Character from "../types/Character";

function ListOfCharacters() {
	const [characters, setCharacters] = useState<Character[]>();
	useEffect(() => {
		(async () => {
			const response = await getCharacters();
			setCharacters(response.results);
		})();
	}, []);
	return (
		<View style={styles.viewContainer}>
			{characters && (
				<FlatList
					style={{ width: "100%" }}
					data={characters}
					renderItem={({ item }) => {
						return (
							<CardItem
								imageUrl={item.image}
								title={item.name}
								body={`Status: ${item.status}\nGender:${item.gender}\nSpecie: ${item.species}\nOrigin: ${item.origin.name}`}
							/>
						);
					}}
					keyExtractor={(item) => item.url}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#4e7988",
	},
});

export default ListOfCharacters;
