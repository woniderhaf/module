import { StyleSheet } from "react-native";
const scale = 25
export const styles = StyleSheet.create({
  container: {
    width: scale,
    height: scale,
    borderRadius: scale / 2,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  isChecked: {
    width: scale,
    height: scale,
    borderRadius: scale / 2,
    backgroundColor: 'red',
  }
})