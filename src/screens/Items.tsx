import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { observer } from 'mobx-react';
import { COLORS } from '../styles';
import NavigationService from '../navigation/NavigationService';
import { useStores } from '../stores';
import UserItem from '../components/UserItem';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import {Item} from '../utils/types.ts';

const Items: React.FC = () => {
    const { mainStore } = useStores(); // Access the store

    useEffect(() => {
        mainStore.getAllUsers();
    }, [mainStore]);

    const renderItems: ListRenderItem<Item> = useCallback(
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

    return (
        <View style={styles.container}>
            {!mainStore.loading && !mainStore.error && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()} // Use id directly as string
                    data={mainStore.allUsers}
                    renderItem={renderItems}
                />
            )}
            {mainStore.loading && <Loading />}
            {mainStore.error && <ErrorMessage message={mainStore.error} />}
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
