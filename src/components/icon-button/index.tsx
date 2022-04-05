import { StyleSheet, View } from 'react-native';

type IconButtonProps = {
  children: React.ReactNode;
};

export function IconButton({ children }: IconButtonProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 8,
    backgroundColor: '#EFE3C8',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
