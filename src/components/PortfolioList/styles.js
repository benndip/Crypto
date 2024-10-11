import { PRIMARY_GRAY_COLOR, PRIMARY_RED_COLOR } from "@utils/colors";
import { DEVICE_WIDTH } from "@utils/sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  detailText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  currentBalance: {
    color: PRIMARY_GRAY_COLOR,
  },
  currentBalanceValue: {
    color: "white",
    fontWeight: "700",
    fontSize: 40,
    letterSpacing: 1,
    marginTop: 6
  },
  percentageChange: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
  },
  priceChangePercentageContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  assetsTitle: {
    color: PRIMARY_GRAY_COLOR,
    fontWeight: "700",
    fontSize: 17,
    paddingBottom: 20,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  buttonContainer: {
    backgroundColor: "#4169E1",
    padding: 10,
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  deleteButtonContainer: {
    flex: 1,
    backgroundColor: PRIMARY_RED_COLOR,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 25,
    marginLeft: 20,
  },
  profileImage: {
    width: DEVICE_WIDTH * 0.1,
    height: DEVICE_WIDTH * 0.1,
    borderRadius: DEVICE_WIDTH * 0.1,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
