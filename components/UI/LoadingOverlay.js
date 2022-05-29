import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import {GlobleStyles} from '../../constants/styles';

const LoadingOverlay = () => {
  return (
    <View style={styles.conatainer}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobleStyles.colors.primary700,
  },
});
