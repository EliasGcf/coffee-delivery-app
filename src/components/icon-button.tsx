import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

type IconButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

export function IconButton({ onPress, children }: IconButtonProps) {
  return (
    <BorderlessButton onPress={onPress} style={styles.container}>
      {children}
    </BorderlessButton>
  );
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
