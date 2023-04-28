import { View, StyleSheet, Image, Text } from "react-native";

type CardItemProps = {
	imageUrl: string;
	title: string;
	body: string;
};
function CardItem({ title, body, imageUrl }: CardItemProps) {
	return (
		<View style={styles.cardContainer}>
			<Image style={styles.image} source={{ uri: imageUrl }} />
			<View style={styles.details}>
				<Text>{title}</Text>
				<Text>{body}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		flexDirection: "row",
		padding: 20,
	},
	image: {
		flex: 1,
		resizeMode: "contain",
	},
	details: {
		flex: 3,
	},
	bottomPaginator: {
		flex: 1,
		flexDirection: "row",
	},
	paginatorButton: {
		flex: 1,
	},
});

export default CardItem;
