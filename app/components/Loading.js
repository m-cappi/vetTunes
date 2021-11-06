import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Overlay} from 'react-native-elements';
import colors from '../styles/palette';

const Loading = ({isVisible, text}) => {

  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0, 0, 0, 0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color={colors.light1} />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
};

export default Loading;

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: '#fff',
    borderColor: colors.dark2,
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.light1,
    textTransform: 'uppercase',
    marginTop: 10,
  },
});
