import {
	SafeAreaView,
	StyleSheet,
	Text,
	Platform,
	StatusBar,
	ScrollView,
} from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
	const cardData = [
		{
			name: "Charmander",
			image: require("./assets/charmander.png"),
			type: "Fire",
			hp: 39,
			moves: ["Scratch", "Ember", "Growl", "Leer"],
			weaknesses: ["Water", "Rock"],
		},
		{
			name: "Squirtle",
			image: require("./assets/squirtle.png"), // Replace with the actual image path
			type: "Water",
			hp: 44,
			moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
			weaknesses: ["Electric", "Grass"],
		},
		{
			name: "Bulbasaur",
			image: require("./assets/bulbasaur.png"), // Replace with the actual image path
			type: "Grass",
			hp: 45,
			moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
			weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
		},
		{
			name: "Pikachu",
			image: require("./assets/pikachu.png"), // Replace with the actual image path
			type: "Electric",
			hp: 35,
			moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
			weaknesses: ["Ground"],
		},
	];
	return (
		<SafeAreaView
			style={{ flex: 1, paddingTop: Platform.OS === "android" ? 25 : 0 }}
		>
			<StatusBar animated={true} barStyle="default" />
			<ScrollView style={{paddingHorizontal: 10}}>
				{cardData?.map((card) => (
					<PokemonCard key={card.name} {...card} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
}
