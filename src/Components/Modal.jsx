import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
export const CouponModal = props => {
    const onYesPress = () => {
        props.setModalVisible(!props.modalVisible)
        props.useCoupon()
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                s
                Alert.alert('Modal has been closed.')
                props.setModalVisible(!props.modalVisible)
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Do you want to redeem the coupon with your points?
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => onYesPress()}
                        >
                            <Text style={styles.textStyle}>Yes</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() =>
                                props.setModalVisible(!props.modalVisible)
                            }
                        >
                            <Text style={styles.textStyle}>No thanks</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
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
        width: 100,
        marginHorizontal: 8,
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
