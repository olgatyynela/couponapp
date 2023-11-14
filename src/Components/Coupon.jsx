import { TouchableOpacity, Image } from 'react-native'
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
        <TouchableOpacity onPress={pressCoupon}>
            <Image
                source={isUsed ? props.coupon.usedImage : props.coupon.image}
                style={{ resizeMode: 'contain', width: 300, height: 250 }}
            />

            <CouponModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                useCoupon={useCoupon}
            />
        </TouchableOpacity>
    )
}
