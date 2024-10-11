import { StyleSheet } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../utils/sizes";
import { PRIMARY_GREY_COLOR, PRIMAry_GREEN_COLOR } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        height: DEVICE_HEIGHT * 0.2,
        paddingTop: 20,
        borderRadius: 10,
        backgroundColor: '#15182E',
        marginRight: DEVICE_WIDTH * 0.02,
        width: DEVICE_WIDTH * 0.7,
        paddingHorizontal: 15,
        marginLeft: 5
    },
    topContent: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    iconAndTextsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textsContainer: {
        marginLeft: 12,
        gap: 5
    },
    percentageGrowthText: {
        color: PRIMAry_GREEN_COLOR
    },
    currentPrice: {
        fontWeight: '600',
        color: PRIMARY_GREY_COLOR
    },
    coinIcon: {
        width: 34,
        height: 34,
    },
    symbol: {
        color: PRIMARY_GREY_COLOR,
        fontWeight: 'bold'
    },
    name: {
        color: PRIMARY_GREY_COLOR
    },
    priceAndChangeContainer: {
        gap: 5,
        alignItems: 'flex-end'
    }
});

export default styles;