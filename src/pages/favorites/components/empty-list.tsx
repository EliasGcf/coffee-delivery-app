import React from 'react';
import { Text, View } from 'react-native';

export function EmptyList() {
  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#EFE3C8',
          fontFamily: 'Rosarivo_400Regular',
        }}
      >
        No favorites yet...
      </Text>
    </View>
  );
}
