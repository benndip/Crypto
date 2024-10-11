import { View, Text } from "react-native";
import React from "react";
import styles from "./ChangeItem.style";
import { PRIMARY_RED_COLOR, PRIMAry_GREEN_COLOR } from "@utils/colors";

interface IProps {
  value: number;
  showPercentage: boolean
}

const ChangeItem: React.FC<IProps> = ({ value, showPercentage }) => {

  const changeIndicator = +value > 0 ? "▲" : "▼";
  const textColor = value > 0 ? PRIMAry_GREEN_COLOR : PRIMARY_RED_COLOR

  return (
    <View style={styles.container}>
      {!showPercentage && <Text style={{ color: textColor }}>{changeIndicator}</Text>}
      <Text style={{ color: textColor }}>{Number(value)?.toFixed(2)}{showPercentage && ' %'}</Text>
    </View>
  );
};

export default ChangeItem;
