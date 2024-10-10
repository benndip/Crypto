import { coinStatuses, timeIntervals } from "@assets/data";
import { CustomButton, LabelValueCard } from "@components/index";
import { AntDesign } from "@expo/vector-icons";
import {
  PRIMARY_GRAY_COLOR,
  PRIMAry_GREEN_COLOR,
  PRIMARY_RED_COLOR,
  SECONDARY_BLUE_COLOR,
} from "@utils/colors";
import { DEVICE_HEIGHT } from "@utils/sizes";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Details.style";
import { LineChart } from "react-native-wagmi-charts";

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];

const customHeader = (navigation: any) => {
  return {
    title: "",
    headerShown: true,
    headerTitleStyle: {
      color: "#fff",
    },
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: "#0E0C20",
    },
    headerLeft: () => (
      <View style={[styles.flexRow, { gap: 14 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.currencyView}>
          <Text style={styles.text}>$</Text>
        </View>
        <View style={{ gap: 2 }}>
          <Text style={styles.text}>STA/USD</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                color: PRIMARY_GRAY_COLOR,
              },
            ]}
          >
            12,4335
          </Text>
        </View>
      </View>
    ),
    headerRight: () => (
      <View style={[styles.flexRow, { gap: 20 }]}>
        <View style={{ gap: 2 }}>
          <Text style={styles.text}> $12,490.20</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                color: PRIMAry_GREEN_COLOR,
                textAlign: "right",
              },
            ]}
          >
            +8.40%
          </Text>
        </View>
        <View
          style={[
            styles.currencyView,
            {
              backgroundColor: SECONDARY_BLUE_COLOR,
            },
          ]}
        >
          <AntDesign name="star" size={16} color="#fff" />
        </View>
      </View>
    ),
  };
};

const Details = ({ navigation }: any) => {
  React.useEffect(() => {
    navigation.setOptions(customHeader(navigation));
  }, [navigation]);

  const [currentInterval, setCurrentInterval] = useState(
    timeIntervals[0]?.hours
  );

  const [isTrading, setIsTrading] = useState(false);
  const [descriptionLines, setDescriptionLines] = useState<number | undefined>(
    3
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: DEVICE_HEIGHT * 0.09,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.flexRow, styles.timeIntervals]}>
          {timeIntervals.map((item) => (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.intervalButton,
                {
                  backgroundColor:
                    item.hours === currentInterval
                      ? "rgba(255,255,255,0.16)"
                      : "transparent",
                },
              ]}
              onPress={() => setCurrentInterval(item.hours)}
              key={item.label}
            >
              <Text style={styles.text}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* <View style={styles.chartView}> */}
          <LineChart.Provider data={data}>
            <LineChart>
              <LineChart.Path />
              <LineChart.CursorCrosshair />
            </LineChart>
            <LineChart.PriceText />
            <LineChart.DatetimeText />
          </LineChart.Provider>
        {/* </View> */}
        <View style={[styles.flexRow, styles.coinStatusesView]}>
          <LabelValueCard data={coinStatuses.openClose} width="48%" />
          <LabelValueCard data={coinStatuses.highLow} width="48%" />
        </View>
        <View style={{ gap: 18, marginBottom: 30 }}>
          <View style={(styles.flexRow, styles.labelValueView)}>
            <Text style={{ color: PRIMARY_GRAY_COLOR }}>Daily Change:</Text>
            <Text style={{ color: PRIMAry_GREEN_COLOR }}>5,09%</Text>
          </View>
          <View style={(styles.flexRow, styles.labelValueView)}>
            <Text style={{ color: PRIMARY_GRAY_COLOR }}>Market Capital</Text>
            <Text style={{ color: "#fff" }}>$8,600B</Text>
          </View>
          <View style={(styles.flexRow, styles.labelValueView)}>
            <Text style={{ color: PRIMARY_GRAY_COLOR }}>3D Drawdown</Text>
            <Text style={{ color: PRIMARY_RED_COLOR }}>-67.8%</Text>
          </View>
          <View style={(styles.flexRow, styles.labelValueView)}>
            <Text style={{ color: PRIMARY_GRAY_COLOR }}>3Enterprise Value</Text>
            <Text style={{ color: "#fff" }}>$2.4BT</Text>
          </View>
          <View style={(styles.flexRow, styles.labelValueView)}>
            <Text style={{ color: PRIMARY_GRAY_COLOR }}>3Enterprise Value</Text>
            <Text style={{ color: "#fff" }}>$2.4BT</Text>
          </View>
          <View style={(styles.flexRow, styles.labelValueView)}>
            <Text style={{ color: PRIMARY_GRAY_COLOR }}>3Enterprise Value</Text>
            <Text style={{ color: "#fff" }}>$2.4BT</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              setDescriptionLines(descriptionLines === 3 ? undefined : 3)
            }
          >
            <Text
              numberOfLines={descriptionLines}
              style={{ color: PRIMARY_GRAY_COLOR }}
            >
              .What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Text>
          </TouchableOpacity>
        </View>
        {isTrading ? (
          <View
            style={[
              styles.flexRow,
              {
                gap: 16,
              },
            ]}
          >
            <CustomButton
              title="Sell"
              style={{
                width: "30%",
                backgroundColor: PRIMARY_RED_COLOR,
              }}
              onPress={() => null}
            />
            <CustomButton
              title="Buy"
              style={{
                width: "65%",
              }}
              onPress={() => setIsTrading(false)}
            />
          </View>
        ) : (
          <CustomButton title="Trade" onPress={() => setIsTrading(true)} />
        )}
      </ScrollView>
    </View>
  );
};

export default Details;
