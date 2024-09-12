import React from 'react';
import {View, ScrollView, StyleSheet, ViewStyle} from 'react-native';
import {observer} from 'mobx-react';
import {COLORS} from '../styles';
import {useStores} from "../stores";
import DetailItem from "../components/DetailItem.tsx";

const ItemDetail: React.FC = () => {
    const {mainStore} = useStores();
    const user = mainStore.user;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {user && (
                <View style={styles.container}>
                    {/* User Details */}
                    <DetailItem title="Name" value={user.name} />
                    <DetailItem title="Email" value={user.email} />
                    <DetailItem title="Website" value={user.website} />
                    <DetailItem title="Phone" value={user.phone} />

                    {/* Address Details */}
                    <DetailItem title="Street" value={user.address?.street} />
                    <DetailItem title="Suite" value={user.address?.suite} />
                    <DetailItem title="City" value={user.address?.city} />
                    <DetailItem title="Zipcode" value={user.address?.zipcode} />

                    {/* Company Details */}
                    <DetailItem title="Company Name" value={user.company?.name} />
                    <DetailItem title="CatchPhrase" value={user.company?.catchPhrase} />
                    <DetailItem title="Business" value={user.company?.bs} />
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 20,
    } as ViewStyle,
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    } as ViewStyle,
});

export default observer(ItemDetail);
