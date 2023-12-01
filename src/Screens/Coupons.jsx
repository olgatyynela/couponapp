import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native'
import { useState, useEffect } from 'react'
import { Coupon } from '../Components/Coupon'
import { CouponColor } from '../Components/CouponColor'
import { database } from '../database'
import { ref, onValue, push } from 'firebase/database'

export default function CouponScreen() {
    const [coupon, setCoupon] = useState({
        desc: '',
        pointsNeeded: '',
        color: 'pink',
    })
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        const couponsRef = ref(database, 'coupons/')
        onValue(couponsRef, snapshot => {
            const data = snapshot.val()
            const couponsWithKeys = data
                ? Object.keys(data).map(key => ({ id: key, ...data[key] }))
                : []

            setCoupons(
                couponsWithKeys
                    .reverse()
                    .sort((a, b) =>
                        a.isUsed === b.isUsed ? 0 : a.isUsed ? 1 : -1
                    )
            )
        })
    }, [])

    const inputChanged = (name, value) => {
        if (name === 'desc' && value.length < 26) {
            setCoupon({ ...coupon, [name]: value })
        }
        if (name === 'pointsNeeded' && value.length < 4) {
            setCoupon({ ...coupon, [name]: value })
        }
    }

    const addCoupon = () => {
        if (coupon.desc !== '' && coupon.pointsNeeded !== '') {
            push(ref(database, 'coupons/'), {
                desc: coupon.desc,
                pointsNeeded: coupon.pointsNeeded,
                color: coupon.color,
                isUsed: false,
            })
            setCoupon({ desc: '', pointsNeeded: '', color: coupon.color })
        } else {
            Alert.alert('Empty coupon', 'Fill both fields', [{ text: 'OK' }])
        }
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
                    keyboardType="number-pad"
                    style={styles.inputStyle}
                    placeholder="Points needed"
                    value={coupon.pointsNeeded}
                    onChangeText={value => inputChanged('pointsNeeded', value)}
                />
                <View style={{ alignSelf: 'center' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            margin: 8,
                        }}
                    >
                        <CouponColor
                            color={'pink'}
                            coupon={coupon}
                            setCoupon={setCoupon}
                        />
                        <CouponColor
                            color={'purple'}
                            coupon={coupon}
                            setCoupon={setCoupon}
                        />
                        <CouponColor
                            color={'blue'}
                            coupon={coupon}
                            setCoupon={setCoupon}
                        />
                        <CouponColor
                            color={'orange'}
                            coupon={coupon}
                            setCoupon={setCoupon}
                        />
                        <CouponColor
                            color={'salmon'}
                            coupon={coupon}
                            setCoupon={setCoupon}
                        />
                        <CouponColor
                            color={'green'}
                            coupon={coupon}
                            setCoupon={setCoupon}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={addCoupon}>
                    <Text style={styles.buttonTextStyle}>Add coupon</Text>
                </TouchableOpacity>
                {coupons.map((coupon, index) => (
                    <Coupon coupon={coupon} key={index + coupon.desc} /> // mäppää kuponkilistan kupongit coupon komponenteiksi
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
        backgroundColor: 'white',
        borderRadius: 10,
    },
})
