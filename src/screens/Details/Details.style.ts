import { Platform, StyleSheet } from "react-native";
import { PRIMARY_BLUE_COLOR } from "../../utils/colors";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  statusBarHeight,
} from "../../utils/sizes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0C20",
    paddingTop: Platform.OS === "ios" ? statusBarHeight + 25 : 0,
    padding: 22,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencyView: {
    backgroundColor: PRIMARY_BLUE_COLOR,
    width: DEVICE_WIDTH * 0.09,
    height: DEVICE_WIDTH * 0.09,
    borderRadius: DEVICE_WIDTH * 0.09,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  chartView: {
    backgroundColor: "#Fff",
    height: DEVICE_HEIGHT * 0.27,
    borderRadius: 10,
    padding: 7,
    marginVertical: 8,
  },
  intervalButton: {
    padding: 4,
    paddingHorizontal: DEVICE_WIDTH * 0.04,
    borderRadius: 7,
  },
  timeIntervals: {
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  coinStatusesView: {
    gap: 10,
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 25
  },
  labelValueView: {
    justifyContent:'space-between',
    flexDirection: 'row'
  }
});

export default styles;
