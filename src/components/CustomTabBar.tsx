import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { COLORS } from '../styles';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const label = typeof options.tabBarLabel === 'function'
                    ? options.tabBarLabel({
                        focused: isFocused,
                        color: isFocused ? 'blue' : 'black',
                        position: 'below-icon',
                        children: '' })
                    : options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={[styles.tab, { borderColor: isFocused ? 'blue' : 'gray' }]}
                    >
                        <Text style={{ fontSize: 21, color: isFocused ? 'blue' : 'black' }}>
                            {typeof label === 'string' ? label : route.name}
                        </Text>
                        {index < state.routes.length - 1 && (
                            <View style={styles.separator} />
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: COLORS.gray,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        height: 70,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    separator: {
        position: 'absolute',
        right: 0,
        height: '100%',
        width: 1,
        backgroundColor: COLORS.gray,
    },
});

export default CustomTabBar;
