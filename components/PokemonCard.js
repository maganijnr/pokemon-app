import { StyleSheet, Text, View, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
	switch (type.toLowerCase()) {
		case "electric":
			return { borderColor: "#FFD700", emoji: "⚡️" };
		case "water":
			return { borderColor: "#6493EA", emoji: "💧" };
		case "fire":
			return { borderColor: "#FF5733", emoji: "🔥" };
		case "grass":
			return { borderColor: "#66CC66", emoji: "🌿" };
		default:
			return { borderColor: "#A0A0A0", emoji: "❓" };
	}
};

export default function PokemonCard({
	name,
	image,
	type,
	hp,
	moves,
	weaknesses,
}) {
	const { borderColor, emoji } = getTypeDetails(type);
	return (
		<View style={styles.cardContainer}>
			<View style={styles.cardHeader}>
				<Text style={styles.cardName}>{name}</Text>
				<Text style={styles.hP}>❤️HP: {hp}</Text>
			</View>
			<Image
				source={image}
				accessibilityLabel={`${name} Pokemon`}
				style={styles.image}
				resizeMode="contain"
			/>
			<View
				style={{
					widt: "100%",
					alignItems: "center",
					justifyContent: "center",
					marginVertical: 20,
				}}
			>
				<View
					style={{
						borderWidth: 2,
						borderColor: borderColor,
						borderRadius: 5,
						padding: 5,
					}}
				>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						{emoji} {type}
					</Text>
				</View>
			</View>
			<View style={styles.abilityContainer}>
				<Text style={styles.moveTxt}>
					<Text style={styles.boldTxt}>Moves: </Text>

					{moves.join(", ")}
				</Text>
			</View>
			<View style={styles.abilityContainer}>
				<Text style={styles.moveTxt}>
					<Text style={styles.boldTxt}>Weaknesses: </Text>
					{weaknesses.join(", ")}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		width: "100%",
		borderColor: "black",
		borderWidth: 2,
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		marginVertical: 16,
		...Platform.select({
			ios: {
				shadowOffset: { width: 2, height: 2 },
				shadowColor: "#333",
				shadowOpacity: 0.3,
				shadowRadius: 4,
			},
			android: { elevation: 5 },
		}),
	},
	cardHeader: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	cardName: {
		fontSize: 24,
		fontWeight: "bold",
	},
	hP: {
		fontSize: 24,
		fontWeight: "bold",
	},
	image: {
		width: "100%",
		height: 200,
		marginBottom: 16,
	},
	abilityContainer: {
		width: "100%",
		marginVertical: 10

	},
	moveTxt: {
		fontSize: 24
	},
	boldTxt: {
		fontWeight: "bold",
	}
});
