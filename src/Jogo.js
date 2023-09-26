import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Jogo(props) {
  const [b1, setB1] = useState(" ")

  const handleClick = () => {
    props.changeScreen("home")
  }

  const handleClickB1 = () => {
    setB1("O")
  }

  return (
    <View>
      <Text>
        Jogo
      </Text>
      <Button title="Voltar" onPress={handleClick} />

      <Button title={b1} onPress={handleClickB1} />
    </View>
  )
}

const styles = StyleSheet.create({
});