import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Coupon } from '../Components/Coupon'
import { couponlist } from '../../coupons'

export default function CouponScreen() {
    return (
        <ScrollView>
            <View style={styles.centeredView}>
                <Text style={{ alignSelf: 'center', paddingBottom: 20 }}>
                    Redeem coupons with earned points.
                </Text>
                {couponlist.map((coupon, index) => (
                    <Coupon coupon={coupon} key={index} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 100,
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 5,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})