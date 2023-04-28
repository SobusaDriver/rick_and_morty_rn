import { View, Text, Button, StyleSheet } from 'react-native'

function ListOfCharacters() {
  return (
    <View style={styles.viewContainer}>
      <Text>List Of Characters</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ListOfCharacters