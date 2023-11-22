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

    const getColor = () => {
        switch (props.coupon.color) {
            case 'pink':
                return '#FFCCEA'
            case 'purple':
                return '#C6ADFF'
            case 'blue':
                return '#B1DAFF'
            case 'orange':
                return '#FFB77E'
        }
    }

    const getSubColor = () => {
        switch (props.coupon.color) {
            case 'pink':
                return '#FE85CC'
            case 'purple':
                return '#A077FF'
            case 'blue':
                return '#6DBAFF'
            case 'orange':
                return '#FF923C'
        }
    }

    return (
        <TouchableOpacity
            onPress={pressCoupon}
            style={{ width: '100%', opacity: isUsed ? 0.2 : 1 }}
        >
            <View
                style={[
                    styles.coupon,
                    { backgroundColor: getColor(), borderColor: getSubColor() },
                ]}
            >
                <View style={[styles.ball, { backgroundColor: getSubColor() }]}>
                    <Text style={styles.ballText}>
                        {`${props.coupon.pointsNeeded} \n points`}
                    </Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text
                        style={[
                            styles.textStyle,
                            { textShadowColor: getSubColor() },
                        ]}
                    >
                        This coupon
                    </Text>
                    <Text
                        style={[
                            styles.textStyle,
                            { fontSize: 18, textShadowColor: getSubColor() },
                        ]}
                    >
                        is good for
                    </Text>
                    <View
                        style={[
                            styles.descStyle,
                            { borderColor: getSubColor() },
                        ]}
                    >
                        <Text style={styles.descTextStyle}>
                            {props.coupon.desc}
                        </Text>
                    </View>
                </View>
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
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 1,
        padding: 10,
        height: 200,
        borderWidth: 1.4,
    },

    ball: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
    },

    ballText: {
        fontFamily: 'Notable_400Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        paddingBottom: 10,
        paddingRight: 5,
    },

    viewStyle: {
        alignself: 'center',
        display: 'flex',
        alignItems: 'center',
        marginRight: 20,
        paddingBottom: 10,
    },

    textStyle: {
        fontFamily: 'Notable_400Regular',
        textAlign: 'center',
        color: 'white',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        fontSize: 25,
    },

    descStyle: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        width: 200,
        borderRadius: 6,
        borderWidth: 1.4,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    descTextStyle: {
        fontFamily: 'NothingYouCouldDo_400Regular',
        fontSize: 15,
    },
})
