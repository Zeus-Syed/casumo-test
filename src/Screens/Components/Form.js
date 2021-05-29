import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import CloseIconBlack from "../../Assets/images/form-close.svg";
import { addCard } from "../../Actions/cards.action";
import AddInput from "../../Screens/Components/addInput";

const Form = (props) => {
    const dispatch = useDispatch();
    const {
        modalClose,
    } = props;
    
    const [inputs, setInputs] = useState({
        name: {
            value: "",
            error: false
        },
        cardNo: {
            value: "",
            error: false
        },
        expDate: {
            value: "",
            error: false
        },
        cvc: {
            value: "",
            error: false
        }
    })

    const inputSubmit = () => {
        dispatch(addCard(inputs));
        modalClose(false);
    }

    return (
        <View style={{ flex: 1, marginLeft: "7%", marginRight: "7%" }}>
            <TouchableOpacity onPress={() => modalClose(false)} >
            <View style={{ alignItems: "flex-end", top: 30, left: 10 }}>
                
                    <CloseIconBlack width={45} height={15} fill="#000000" />
               
            </View>
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 24, top: 40, fontWeight: "bold" }}> Add your card details</Text>
            </View>
            <View style={{ top: 55 }}>
                <AddInput
                    label={"Name in card"}
                    item={inputs.name}
                    placeholder={"Syed Nadeem"}
                    errorMessage={"Please fill in your name"}
                    validLength={10}
                    setText={(text) => {
                        setInputs({
                            ...inputs,
                            name: {
                                value: text
                            }
                        })
                    }}
                />
                <AddInput
                    label={"Card number"}
                    item={inputs.cardNo}
                    placeholder={"0000  0000  0000  0000"}
                    errorMessage={"Please enter a valid credit card number"}
                    validLength={16}
                    setText={(text) => {
                        setInputs({
                            ...inputs,
                            cardNo: {
                                value: text
                            }
                        })
                    }}
                />
                <AddInput
                    label={"Expiracy date"}
                    item={inputs.expDate}
                    placeholder={"00/00"}
                    errorMessage={"Please enter a valid expiry date"}
                    validLength={5}
                    setText={(text) => {
                        setInputs({
                            ...inputs,
                            expDate: {
                                value: text
                            }
                        })
                    }}
                />
                <AddInput
                    label={"CVC (Security code)"}
                    item={inputs.cvc}
                    placeholder={"000"}
                    errorMessage={"Please enter a valid security code"}
                    validLength={3}
                    setText={(text) => {
                        setInputs({
                            ...inputs,
                            cvc: {
                                value: text
                            }
                        })
                    }}
                />
            </View>
            
            <View style={[styles.addCard, inputs.name.value.length > 1 && inputs.expDate.value.length > 1 && inputs.cardNo.value.length > 1 && inputs.cvc.value.length > 1 ? styles.buttonActive : styles.buttonDisabled]}>
                <TouchableOpacity onPress={() => inputSubmit()} disabled={!(inputs.name.value.length > 1 && inputs.expDate.value.length > 1 && inputs.cardNo.value.length > 1 && inputs.cvc.value.length > 1)}>
                    <Text style={styles.confirmButton}>Confirm</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around"
    },
    addCard: {
        marginLeft:'6%',
		marginRight:'6%',
        backgroundColor: "#4C00C2",
        height: 45,
        borderRadius: 32,
        marginTop: 90,
        alignItems: "center",
        justifyContent: "center"
      },
      input: {
        height: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: "#D3D8E1",
        color: "#19AC51"
      },
      buttonActive: {
        backgroundColor: "#4C00C2",
      },
      buttonDisabled: {
        backgroundColor: "#D3D8E1",
      },
      confirmButton: {
        color: "white", 
        fontWeight: "bold"
      }
})

export default Form;

