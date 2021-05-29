import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native'
import CloseIcon from "../../Assets/images/form-close.svg";
import EditCard from "../Components/EditCard";
import { removeCard, editCard } from "../../Actions/cards.action";

const EditForm = (props) => {
    const dispatch = useDispatch();
    const {
        modalClose,
        card,
        logoColor
      } = props;

      const [inputs, setInputs] = useState({
        name: {
            value: card.name.value,
            error: false
        },
        cardNo: {
            value: card.cardNo.value,
            error: false
        },
        expDate: {
            value: card.expDate.value,
            error: false
        },
        cvc: {
            value: card.cvc.value,
            error: false
        }
    })

    const deleteCard = () => {
        dispatch(removeCard(card.cvc.value));
        modalClose(false)
    }

    const editCardCall = () => {
        dispatch(editCard(inputs));
        modalClose(false)
    }


    return (
        <View style={styles.editContainer}>
            <View style={styles.closeButton}>
                <Pressable onPress={() => modalClose(false)} >
                    <CloseIcon width={45} height={15} />
                </Pressable>
            </View>
            <View>
                <Text style={styles.editLabel}> Edit your card </Text>
            </View>
            <EditCard card={card} logoColor={logoColor} />
            <View style={styles.formContainer}>
                <View style={styles.nameView}>
                    <Text style={ [styles.textLabel , {fontWeight: "bold"}] }>Name in card</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            setInputs({
                                ...inputs,
                                name: {
                                    value: text
                                }
                            })
                        }}
                        value={inputs.name.value}
                        placeholder="Syed Nadeem"
                        keyboardType="numeric"
                    />
                </View>
                <View style={ [styles.inputView, { top: 15 }] }>
                    <Text style={ [styles.textLabel , {fontWeight: "bold"}] }>Card number</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            setInputs({
                                ...inputs,
                                cardNo: {
                                    value: text
                                }
                            })
                        }}
                        value={inputs.cardNo.value}
                        placeholder="0000 0000 0000 0000"
                        keyboardType="numeric"
                    />
                </View>
                <View style={ [styles.inputView, { top: 25 } ]}>
                    <Text style={ [styles.textLabel , {fontWeight: "bold"}] }>Expiracy date</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            setInputs({
                                ...inputs,
                                expDate: {
                                    value: text
                                }
                            })
                        }}
                        value={inputs.expDate.value}
                        placeholder="00/00"
                        keyboardType="numeric"
                    />
                </View>
                <View style={ [styles.inputView, { top: 35 }] }>
                    <Text style={styles.textLabel}>CVC (Security code)</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            setInputs({
                                ...inputs,
                                cvc: {
                                    value: text
                                }
                            })
                        }}
                        value={inputs.cvc.value}
                        placeholder="000"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <View style={styles.addCard}>
                <Pressable onPress={() => { editCardCall() }}>
                    <Text style={styles.confirmButton}>Confirm</Text>
                </Pressable>
            </View>
            <Pressable onPress={() => { deleteCard(card.cvc.value) }}>
                <View style={styles.deleteButtonView}>
                    <Text style={styles.deleteButton}>Delete card</Text>
                </View>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    addCard: {
        marginLeft: '6%',
        marginRight: '6%',
        backgroundColor: "#4C00C2",
        height: 45,
        borderRadius: 32,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        bottom: 70
    },
    input: {
        height: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#D3D8E1"
    },
    editContainer: {
        flex: 1,
        marginLeft: "7%",
        marginRight: "7%"
    },
    deleteButton: {
        fontSize: 14,
        color: "#D3D8E1",
        fontWeight: "bold"
    },
    deleteButtonView: {
        bottom: 55,
        alignItems: "center"
    },
    confirmButton: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
    },
    closeButton: {
        alignItems: "flex-end",
        top: 30,
        left: 10
    },
    editLabel: {
        fontSize: 24,
        top: 40,
        fontWeight: "bold"
    },
    textLabel: {
        fontSize: 13
    },
    formContainer: {
        bottom: 125
    },
    inputView: {
        marginTop: 12,
    },
    nameView: {
        marginTop: 140
    }
})

export default EditForm;

