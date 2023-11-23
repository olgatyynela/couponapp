import { TouchableOpacity, Text } from 'react-native'
import { getColor, getSubColor } from '../utils'

export function CouponColor(props) {
    return (
        <TouchableOpacity
            onPress={() =>
                props.setCoupon({ ...props.coupon, color: props.color })
            }
            style={{
                backgroundColor: getColor(props.color),
                width: 40,
                height: 40,
                borderRadius: 20,
                margin: 6,
                marginLeft: 10,
                borderColor: getSubColor(props.color),
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {props.coupon.color === props.color ? (
                <Text style={{ fontSize: 20, color: 'white' }}>✓</Text>
            ) : null}
        </TouchableOpacity>
    )
}
