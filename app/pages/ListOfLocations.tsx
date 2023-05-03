import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getLocations } from "../services";
import CardItem from "../components/CardItem";
import { RootStackParamsList } from "../types/StackParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Location from "../types/Location";

type props = NativeStackScreenProps<RootStackParamsList, "ListOfLocations">;

function ListOfLocations({ route, navigation }: props) {
	const [pageNumber, setPageNumber] = useState<number>(route.params.pageNumber);
	const [Locations, setLocations] = useState<Location[]>([]);
	const [totalPages, setTotalPages] = useState<number>(0);

	const fetchLocations = async () => {
		const response = await getLocations(pageNumber);
		setLocations((prevLocations) => prevLocations.concat(...response.results));
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
		fetchLocations();
	}, [pageNumber]);

	return (
		<View style={styles.viewContainer}>
			{Locations && (
				<FlatList
					style={{ width: "100%" }}
					data={Locations}
					renderItem={({ item }) => {
						return (
							<CardItem
								title={item.name}
								body={`Type: ${item.type}\nDimension: ${item.dimension}\nCreated: ${item.created}`}
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

export default ListOfLocations;
