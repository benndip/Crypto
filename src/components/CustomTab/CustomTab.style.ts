import { StyleSheet } from "react-native";
import { DEVICE_HEIGHT } from "../../utils/sizes";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    borderWidth: 1,
    flexDirection: "row",
    width: "100%",
    height: DEVICE_HEIGHT * 0.1,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: "space-around",
    backgroundColor: '#15182E'
  },
  iconAndText: {
    alignItems: "center",
  },
  label: {
    marginTop: 5
  }
});

export default styles