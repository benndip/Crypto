import { SECONDARY_BLUE_COLOR } from "@utils/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_BLUE_COLOR,
    padding: 18,
    borderRadius: 16,
    justifyContent: "center",
    gap: 10,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

export default styles;
