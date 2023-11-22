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
    const [coupon, setCoupon] = useState({
        desc: '',
        pointsNeeded: '',
        color: 'pink',
    })
    const [coupons, setCoupons] = useState([])

    const inputChanged = (name, value) => {
        if (name === 'desc' && value.length < 26) {
            setCoupon({ ...coupon, [name]: value })
        }
        if (name === 'pointsNeeded' && value.length < 4) {
            setCoupon({ ...coupon, [name]: value })
        }
    }

    const addCoupon = () => {
        setCoupons([coupon, ...coupons])
        setCoupon({ desc: '', pointsNeeded: '', color: coupon.color })
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
                <View style={{ alignSelf: 'flex-start' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            margin: 8,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() =>
                                setCoupon({ ...coupon, color: 'pink' })
                            }
                            style={{
                                backgroundColor: '#FFCCEA',
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                margin: 6,
                                marginLeft: 10,
                                borderColor: '#FE85CC',
                                borderWidth: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {coupon.color === 'pink' ? (
                                <Text style={{ fontSize: 20, color: 'white' }}>
                                    ✓
                                </Text>
                            ) : null}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                setCoupon({ ...coupon, color: 'purple' })
                            }
                            style={{
                                backgroundColor: '#C6ADFF',
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                margin: 6,
                                borderColor: '#A077FF',
                                borderWidth: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {coupon.color === 'purple' ? (
                                <Text style={{ fontSize: 20, color: 'white' }}>
                                    ✓
                                </Text>
                            ) : null}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                setCoupon({ ...coupon, color: 'blue' })
                            }
                            style={{
                                backgroundColor: '#B1DAFF',
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                margin: 6,
                                borderColor: '#6DBAFF',
                                borderWidth: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {coupon.color === 'blue' ? (
                                <Text style={{ fontSize: 20, color: 'white' }}>
                                    ✓
                                </Text>
                            ) : null}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                setCoupon({ ...coupon, color: 'orange' })
                            }
                            style={{
                                backgroundColor: '#FFB77E',
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                margin: 6,
                                borderColor: '#FF923C',
                                borderWidth: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {coupon.color === 'orange' ? (
                                <Text style={{ fontSize: 20, color: 'white' }}>
                                    ✓
                                </Text>
                            ) : null}
                        </TouchableOpacity>
                    </View>
                </View>
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
        backgroundColor: 'white',
        borderRadius: 10,
    },
})
