import { PRIMARY_DARK_BLUE_COLOR, PRIMARY_GRAY_COLOR, SECONDARY_BLUE_COLOR } from "@utils/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "@utils/sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: SECONDARY_BLUE_COLOR,
    // justifyContent:'flex-end'
  },

  content: {
    backgroundColor: PRIMARY_DARK_BLUE_COLOR,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 26,
    height: DEVICE_HEIGHT * 0.8,
  },
  bottomSection: {
    marginTop: DEVICE_HEIGHT * 0.08,
  },
  continueText: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#fff",
    bottom: -4,
    zIndex: 2,
    fontSize: 12,
    paddingHorizontal: 4,
    color: PRIMARY_GRAY_COLOR,
  },
  hairline: {
    borderTopWidth: 1,
    borderColor: PRIMARY_GRAY_COLOR,
    height: 1,
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 7,
    fontWeight: "bold",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountText: {
    lineHeight: 19,
  },
});

export default styles;
