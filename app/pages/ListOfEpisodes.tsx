import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getEpisodes } from "../services";
import CardItem from "../components/CardItem";
import { RootStackParamsList } from "../types/StackParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Episode from "../types/Episode";

type props = NativeStackScreenProps<RootStackParamsList, "ListOfEpisodes">;

function ListOfEpisodes({ route, navigation }: props) {
	const [pageNumber, setPageNumber] = useState<number>(route.params.pageNumber);
	const [Episodes, setEpisodes] = useState<Episode[]>([]);
	const [totalPages, setTotalPages] = useState<number>(0);

	const fetchEpisodes = async () => {
		console.log(pageNumber, totalPages);

		const response = await getEpisodes(pageNumber);
		console.log(response);

		setEpisodes((prevEpisodes) => prevEpisodes.concat(...response.results));
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
		fetchEpisodes();
	}, [pageNumber]);

	return (
		<View style={styles.viewContainer}>
			{Episodes && (
				<FlatList
					style={{ width: "100%" }}
					data={Episodes}
					renderItem={({ item }) => {
						return (
							<CardItem
								title={item.name}
								body={`Episode: ${item.episode}\nAir Date: ${item.air_date}\nCreated: ${item.created}`}
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

export default ListOfEpisodes;
