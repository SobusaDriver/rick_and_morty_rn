import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getCharacters } from "../services";
import CardItem from "../components/CardItem";
import Character from "../types/Character";
import { RootStackParamsList } from "../types/StackParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type props = NativeStackScreenProps<RootStackParamsList, "ListOfCharacters">;

function ListOfCharacters({ route, navigation }: props) {
	const [pageNumber, setPageNumber] = useState<number>(route.params.pageNumber);
	const [characters, setCharacters] = useState<Character[]>([]);
	const [totalPages, setTotalPages] = useState<number>(0);

	const fetchCharacters = async () => {
		const response = await getCharacters(pageNumber);
		setCharacters((prevCharacters) =>
			prevCharacters.concat(...response.results),
		);
		if (pageNumber === 1) {
			setTotalPages(response.info?.pages);
		}
	};

	const fetchMoreData = async () => {
		if (pageNumber < totalPages) {
			setPageNumber((prevPage) => prevPage + 1);
		}
	};

	useEffect(() => {
		fetchCharacters();
	}, [pageNumber]);

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
					onEndReachedThreshold={0.2}
					onEndReached={fetchMoreData}
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
