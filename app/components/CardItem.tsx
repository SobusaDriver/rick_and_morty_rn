import { View, StyleSheet, Image, Text } from "react-native";

type CardItemProps = {
	imageUrl?: string;
	title: string;
	body: string;
};
function CardItem({ title, body, imageUrl }: CardItemProps) {
	return (
		<View style={styles.cardContainer}>
			{imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
			<View style={styles.details}>
				<Text style={styles.text}>{title}</Text>
				<Text>{body}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		// flex: 1,
		flexDirection: "row",
		flexShrink: 1,
		height: 140,
		padding: 20,
		margin: 20,
		borderRadius: 6,
		backgroundColor: "#78cce2",
	},
	image: {
		flex: 1,
		resizeMode: "stretch",
		height: 100,
		borderRadius: 6,
	},
	details: {
		flex: 2,
		paddingLeft: 16,
		height: 100,
	},
	text: {
		color: "#ffffff",
		fontWeight: "bold",
		fontSize: 16,
	},
});

export default CardItem;
