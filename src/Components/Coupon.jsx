import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CouponModal } from './Modal'

export const Coupon = props => {
    const [modalVisible, setModalVisible] = useState(false)
    const [isUsed, setIsUsed] = useState(false)

    const pressCoupon = () => {
        if (!isUsed) {
            setModalVisible(true)
        }
    }

    const useCoupon = () => {
        setIsUsed(true)
    }

    return (
        <TouchableOpacity onPress={pressCoupon} style={{ width: '100%' }}>
            <View style={styles.coupon}>
                <View style={{ alignSelf: 'center', display: 'flex' }}>
                    <Text>This coupon</Text>
                    <Text>is good for</Text>
                </View>
                <Text style={{ fontSize: 16 }}>{props.coupon.desc}</Text>
                <Text style={{ fontSize: 16 }}>
                    {props.coupon.pointsNeeded} points
                </Text>
            </View>
            <CouponModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                useCoupon={useCoupon}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    coupon: {
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '97%',
        backgroundColor: 'rgba(255, 204, 234, 1)',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 1,
        padding: 10,
        height: 200,
    },
})
