import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 18,
    paddingVertical: 20,
    //this background has to be the same of background app because swipeable-view-list
    backgroundColor: "#121212",
  },
  coinName: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  coinCode: {
    color: "grey",
    fontWeight: "600",
  },
  quantityContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
});

export default styles;
