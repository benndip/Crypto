import { PRIMARY_GRAY_COLOR } from "@utils/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dropdownContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  item: {
    padding: 15,
    marginTop: 2,
    // backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 5,
    marginTop: 10
  },
  textInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: PRIMARY_GRAY_COLOR,
    borderRadius: 5,
    color: "white",
  },
  ticker: {
    color: "grey",
    fontWeight: "700",
    fontSize: 20,
    marginTop: 25,
    marginLeft: 5,
  },
  boughtContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  buttonContainer: {
    marginVertical: 30,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "600",
  },
  pricePerCoin: {
    color: "grey",
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.6,
  },
});

export default styles;
