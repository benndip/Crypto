import { StyleSheet } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH, statusBarHeight } from "../../utils/sizes";
import { PRIMARY_GREY_COLOR, PRIMARY_WHITE_COLOR } from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0C20",
    paddingTop: statusBarHeight + 25,
  },
  topIconAndText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "center",
    backgroundColor: "#384680",
    opacity: 0.9,
    padding: 8,
    borderRadius: 20,
  },
  text: {
    color: "#FFFFFF",
  },
  curerntWalletTitleText: {
    opacity: 0.7,
    color: PRIMARY_GREY_COLOR,
    alignSelf: "center",
    marginTop: "5%",
    fontSize: 16,
  },
  amountText: {
    alignSelf: "center",
    fontSize: 30,
    color: PRIMARY_WHITE_COLOR,
    fontWeight: "bold",
    marginTop: 10,
  },
  trendArrowAndPercent: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 8,
    marginTop: 10,
  },
  percentageColor: {
    color: "#1BDD67",
  },
  sendButtonRecieve: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 3,
    borderColor: "white",
    marginTop: 40,
    justifyContent: "center",
    gap: DEVICE_WIDTH * 0.12,
  },
  sendText: {
    color: PRIMARY_GREY_COLOR,
    marginTop: 10,
  },
  iconAndText: {
    alignItems: "center",
  },
  iconContanier: {
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: PRIMARY_GREY_COLOR,
  },
  buyText: {
    color: PRIMARY_GREY_COLOR,
    marginTop: 10,
  },
  receiveText: {
    color: PRIMARY_GREY_COLOR,
    marginTop: 10,
  },
  trendingText: {
    color: PRIMARY_GREY_COLOR,
  },
  trendingFlatlist: {
    height: DEVICE_HEIGHT * 0.2,
    marginTop: 15
  },
});

export default styles