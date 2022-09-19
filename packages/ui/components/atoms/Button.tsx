import { Pressable, StyleSheet } from 'react-native'

const Button = ({ children }) => (
  <Pressable style={styles.container} onPress={() => alert('pressed')}>{children}</Pressable>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 12,
  }
})

export default Button;
