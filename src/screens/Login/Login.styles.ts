import {
  PRIMARY_BLUE_COLOR,
  PRIMARY_DARK_BLUE_COLOR,
  PRIMARY_GRAY_COLOR,
} from "@utils/colors";
import { DEVICE_WIDTH } from "@utils/sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountText: {
    color: PRIMARY_BLUE_COLOR,
  },
  continueText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 13,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: PRIMARY_DARK_BLUE_COLOR,
    marginBottom: 4
  },
  caption: {
    color: PRIMARY_GRAY_COLOR,
  },
  hairline: {},
  eyeIcon: {
  },
  bottomSection: {
    alignSelf: "center",
  },
  googleButton: {
    width: DEVICE_WIDTH * 0.11,
    height: DEVICE_WIDTH * 0.11,
    borderRadius: DEVICE_WIDTH * 0.11,
    alignSelf: "center",
    borderWidth: 0.7,
    borderColor: PRIMARY_GRAY_COLOR,
    padding: 10,
  },
});

export default styles;
