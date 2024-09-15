import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { COLORS } from '../styles';
import { useStores } from '../stores';
import DetailItem from '../components/DetailItem';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const ItemDetail: React.FC = () => {
    const { mainStore } = useStores();
    const { user, loading, error } = mainStore;

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <DetailItem title="Name" value={user.name} />
                <DetailItem title="Email" value={user.email} />
                <DetailItem title="Website" value={user.website} />
                <DetailItem title="Phone" value={user.phone} />
                <DetailItem title="Street" value={user.address?.street} />
                <DetailItem title="Suite" value={user.address?.suite} />
                <DetailItem title="City" value={user.address?.city} />
                <DetailItem title="Zipcode" value={user.address?.zipcode} />
                <DetailItem title="Company Name" value={user.company?.name} />
                <DetailItem title="CatchPhrase" value={user.company?.catchPhrase} />
                <DetailItem title="Business" value={user.company?.bs} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 20,
    },
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default observer(ItemDetail);
