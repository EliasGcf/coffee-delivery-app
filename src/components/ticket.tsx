import { StyleSheet, View } from 'react-native';

type TicketProps = {
  children: React.ReactNode;
};

export function Ticket({ children }: TicketProps) {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />

      <View style={styles.main}>{children}</View>

      <View style={styles.dot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38232A',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dot: {
    height: 19,
    width: 19,
    backgroundColor: '#201520',
    borderRadius: 19 / 2,
    margin: -19 / 2,
  },

  main: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
