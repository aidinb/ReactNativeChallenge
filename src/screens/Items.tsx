import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions, TouchableOpacity, FlatList, ListRenderItem,
} from 'react-native';
import {observer} from 'mobx-react';
import {COLORS} from '../styles';
import NavigationService from '../navigation/NavigationService.ts';
import {useStores} from "../stores";
import UserItem from "../components/UserItem.tsx";

const {width} = Dimensions.get('window');

const Items = () => {
const {mainStore} = useStores();

  useEffect(() => {
    mainStore.getAllUsers();
  }, [mainStore]);

  const renderItems: ListRenderItem<any> = useCallback(
      ({item}) => (
          <UserItem
              item={item}
              onPress={(item) => {
                  mainStore.setActiveUser(item)
                NavigationService.navigate("ItemDetail")
              }}
          />
      ),
      [],
  );

  return (
    <View style={styles.container}>
      <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + '_cat'}
          data={mainStore.allUsers}
          renderItem={renderItems}
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
