import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setResults(data.results);
  };

  return (
    <View>
      <Text>{results[1]?.name}</Text>
      {results.map((item) => (
        <Text key={item.name}>{item.name}</Text>
      ))}
    </View>
  );
}
