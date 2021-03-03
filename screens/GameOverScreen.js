import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import BodyText from '../components/BodyText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <BodyText>
        It took {props.roundsNumber} rounds to guess {props.userNumber}!
      </BodyText>
      <Button title="Restart" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default GameOverScreen;
