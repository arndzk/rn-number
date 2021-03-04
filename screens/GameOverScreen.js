import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View>
        <BodyText style={styles.resultText}>The game is over!</BodyText>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/images/baseline_stars_black_48.png')}
        color={Colors.primary}
      />
      <View>
        <BodyText style={styles.resultText}>
          It took <Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
          rounds to guess
          <Text style={styles.highlight}> {props.userNumber}</Text>!
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>
        <MaterialCommunityIcons name="reload" size={24} />
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    width: '80%',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  button: {
    marginTop: 20,
    width: '40%',
  },
});

export default GameOverScreen;
