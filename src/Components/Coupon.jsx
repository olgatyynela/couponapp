import { TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { CouponModal } from './Modal'
import { getColor, getSubColor } from '../utils'
import { PointContext } from '../Context/PointContext'
import { update, ref } from 'firebase/database'
import { database } from '../database'

export const Coupon = props => {
    const { points, setPoints } = useContext(PointContext)
    const [modalVisible, setModalVisible] = useState(false)

    const pressCoupon = () => {
        if (!props.coupon.isUsed && props.coupon.pointsNeeded <= points) {
            setModalVisible(true)
        }
        if (props.coupon.pointsNeeded > points) {
            Alert.alert(
                'Not enough points',
                'Do some more tasks to earn points',
                [{ text: 'OK' }]
            )
        }
    }

    const useCoupon = () => {
        setPoints(parseInt(points) - parseInt(props.coupon.pointsNeeded))
        update(ref(database, `/coupons/${props.coupon.id}`), {
            isUsed: true,
        })
    }

    return (
        <TouchableOpacity
            onPress={pressCoupon}
            style={{ width: '100%', opacity: props.coupon.isUsed ? 0.2 : 1 }}
        >
            <View
                style={[
                    styles.coupon,
                    {
                        backgroundColor: getColor(props.coupon.color),
                        borderColor: getSubColor(props.coupon.color),
                    },
                ]}
            >
                <View
                    style={[
                        styles.ball,
                        { backgroundColor: getSubColor(props.coupon.color) },
                    ]}
                >
                    <Text style={styles.ballText}>
                        {`${props.coupon.pointsNeeded} \n points`}
                    </Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text
                        style={[
                            styles.textStyle,
                            {
                                textShadowColor: getSubColor(
                                    props.coupon.color
                                ),
                            },
                        ]}
                    >
                        This coupon
                    </Text>
                    <Text
                        style={[
                            styles.textStyle,
                            {
                                fontSize: 18,
                                textShadowColor: getSubColor(
                                    props.coupon.color
                                ),
                            },
                        ]}
                    >
                        is good for
                    </Text>
                    <View
                        style={[
                            styles.descStyle,
                            { borderColor: getSubColor(props.coupon.color) },
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
