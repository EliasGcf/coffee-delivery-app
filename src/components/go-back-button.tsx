import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

type GoBackButtonProps = {
  style?: StyleProp<ViewStyle>;
};

export function GoBackButton({ style }: GoBackButtonProps) {
  const navigation = useNavigation();

  return (
    <BorderlessButton style={[styles.container, style]} onPress={navigation.goBack}>
      <BlurView intensity={25} style={styles.blurContainer}>
        <AntDesign name="arrowleft" size={24} color="#D1D5CC" />
      </BlurView>
    </BorderlessButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },

  blurContainer: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
