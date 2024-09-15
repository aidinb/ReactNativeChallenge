import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { observer } from 'mobx-react';
import { COLORS } from '../styles';
import NavigationService from '../navigation/NavigationService';
import { useStores } from '../stores';
import UserItem from '../components/UserItem';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { Item } from '../utils/types';

const Items: React.FC = () => {
    const { mainStore } = useStores(); // Access the store

    useEffect(() => {
        mainStore.getAllUsers();
    }, [mainStore]);

    const renderItem: ListRenderItem<Item> = useCallback(
        ({ item }) => (
            <UserItem
                item={item}
                onPress={() => {
                    mainStore.setActiveUser(item);
                    NavigationService.navigate('ItemDetail');
                }}
            />
        ),
        [mainStore]
    );

    if (mainStore.loading) {
        return <Loading />;
    }

    if (mainStore.error) {
        return <ErrorMessage message={mainStore.error} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                data={mainStore.allUsers}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
});

export default observer(Items);
