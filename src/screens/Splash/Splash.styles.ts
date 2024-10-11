import { PRIMARY_BLUE_COLOR } from "@utils/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "@utils/sizes";
import { StyleSheet } from "react-native";

const theme = "light";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  firstGradient: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    position: "absolute",
    top: 0,
  },
  poweredByText: {
    alignSelf: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: DEVICE_HEIGHT * 0.1,
    fontSize: 12
  },
  videoContainer: {
    width: DEVICE_WIDTH * 0.3,
    height: DEVICE_WIDTH * 0.3,
    borderRadius: (DEVICE_WIDTH * 0.3) / 2,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: DEVICE_HEIGHT * 0.45,
    borderWidth: 2,
    borderColor: PRIMARY_BLUE_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,
  },
  video: {
    width: DEVICE_WIDTH * 0.6,
    height: DEVICE_WIDTH * 0.6,
    marginTop: 10,
    marginLeft: 6,
  },
  GodInhabitsText: {
    position: "absolute",
    alignSelf: 'center',
    top: DEVICE_HEIGHT * 0.55,
    fontWeight: 'bold',
    fontFamily: "Helvetica"
  },
  ourPraise: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    position: "absolute",
    top: DEVICE_HEIGHT * 0.15,
    color: PRIMARY_BLUE_COLOR
  }
});

export default styles;
