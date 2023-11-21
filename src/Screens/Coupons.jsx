import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { Coupon } from '../Components/Coupon'

export default function CouponScreen() {
    const [coupon, setCoupon] = useState({ desc: '', pointsNeeded: '' })
    const [coupons, setCoupons] = useState([])

    const inputChanged = (name, value) => {
        setCoupon({ ...coupon, [name]: value })
    }

    const addCoupon = () => {
        setCoupons([coupon, ...coupons])
        setCoupon({ desc: '', pointsNeeded: '' })
    }
    return (
        <ScrollView>
            <View style={styles.centeredView}>
                <Text style={{ alignSelf: 'center', paddingBottom: 20 }}>
                    Redeem coupons with earned points.
                </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Description"
                    value={coupon.desc}
                    onChangeText={value => inputChanged('desc', value)}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Points needed"
                    value={coupon.pointsNeeded}
                    onChangeText={value => inputChanged('pointsNeeded', value)}
                />

                <TouchableOpacity style={styles.button} onPress={addCoupon}>
                    <Text style={styles.buttonTextStyle}>Add coupon</Text>
                </TouchableOpacity>
                {coupons.map((coupon, index) => (
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

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        borderRadius: 10,
        padding: 15,
        elevation: 2,
        marginVertical: 10,
        backgroundColor: '#2196F3',
        width: '97%',
        alignSelf: 'center',
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputStyle: {
        width: '97%',
        padding: 15,
        margin: 5,
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRadius: 10,
    },
})
