import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './CustomTab.style';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = options.title

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = () => {
            return route.name == "HomeStackNavigator" ? (
              <AntDesign name="home" size={24} color={ isFocused ? '#ffffff' : '#ccc' } />
            ) : route.name == "PorfolioStackNavigator" ? (
              <AntDesign name="save" size={24} color={ isFocused ? '#ffffff' : '#bdc3c7' } />
            ) : (
              <AntDesign name="user" size={24} color={ isFocused ? '#ffffff' : '#bdc3c7' } />
            );
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.iconAndText}
          >
            {Icon()}
            <Text style={[styles.label, { color: isFocused ? '#ecf0f1' : '#ccc', fontWeight: isFocused ? '700' : '400' }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTab