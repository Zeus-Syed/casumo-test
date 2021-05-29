import React, { useState } from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import CloseIcon from "../../Assets/images/form-error.svg";
import SuccessIcon from "../../Assets/images/form-success.svg";

const InputCard = (props) => {

    const {
        label,
        item,
        setText,
        placeholder,
        errorMessage,
        validLength
    } = props;

    return (
        <View style={{ marginTop: item.value.length > 1 ? 12 : 35 }}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                style={[styles.input, item.error ? { color: "#FC484C" } : (item.value.length < validLength ? { color: "black" } : { color: "#19AC51" })]}
                onChangeText={(text) => {
                    setText(text);
                }}
                placeholder={placeholder}
                keyboardType="numeric"
                maxLength={validLength + 10}
            />
            {item.error ? <Text style={styles.errorMesge}>{errorMessage}</Text> : null}
            { item.value.length > 1 ? (item.value.length < validLength ?
                <CloseIcon width={45} height={15} style={styles.icon} /> :
                <SuccessIcon width={45} height={15} style={styles.icon} />) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: "#D3D8E1",
        color: "#19AC51"
      },
      icon: {
        bottom: 25, 
        left: 295
      },
      errorMesge: {
        top: 5, 
        color: "#FC484C"
      },
      labelStyle: {
        fontWeight: "bold"
      }
})

export default InputCard;