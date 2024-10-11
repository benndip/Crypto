import { PRIMARY_BLUE_COLOR, PRIMARY_DARK_BLUE_COLOR, PRIMARY_GRAY_COLOR } from "@utils/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "@utils/sizes";
import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? 0 : DEVICE_HEIGHT * 0.02,
  },
  priceConverterContainer: {
    marginTop: 0,
  },
  priceConverterTitle: {
    marginTop: 10,
    paddingHorizontal: 10,
    color: "white",
    // fontFamily: "DroidSans",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    flex: 1,
    width: 130,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_GRAY_COLOR,
    color: '#fff',
    padding: 10,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
    // borderRadius: 5,
    // marginHorizontal: 5,
    marginVertical: 10,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencyView: {
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
    // backgroundColor: "#Fff",
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
    marginBottom: 25,
  },
  labelValueView: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
export default styles;
