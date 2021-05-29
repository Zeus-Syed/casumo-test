import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {View,Text,Pressable, SafeAreaView, StyleSheet, ScrollView, Modal, TextInput} from 'react-native'
import { height, width } from "../../Utils/device";
import ImageBack from "../../Assets/images/card-background-shape.svg";
import ImageBack2 from "../../Assets/images/card-background-shape2.svg";
import CardLogo from "../../Assets/images/mastercard-logo.svg";
import EditLogo from "../../Assets/images/edit-icon.svg";
import CloseIcon from "../../Assets/images/form-error.svg";



const ViewCard = (props) => {
const { card, cardEdit, logoColor } = props;

    return (
        <ScrollView style={
            [
                styles.container,
                {
                    backgroundColor: logoColor % 2 == 0 ? "#4C00C2" : "#b1b6bf", height: 200, marginLeft: '6%'
                }
            ]
        }>
            <CardLogo width={45} height={30} style={styles.cardLogoView} />
            {
                logoColor % 2 == 0 ?
                    <ImageBack width={270} height={199} style={styles.imageBack} />
                    :
                    <ImageBack2 width={270} height={199} style={styles.imageBack} />
            }
            <Pressable onPress={() => cardEdit(card)}>
                <EditLogo width={35} height={20} style={styles.editLogo} />
            </Pressable>
            <View style={styles.cvcView}>
                <Text style={styles.label}>
                    CVC
                </Text>
                <Text style={styles.sublabel}>
                    {card.cvc.value}
                </Text>
            </View>
            <View style={styles.expDateView}>
                <Text style={styles.label}>
                    EXPIRES
                </Text>
                <Text style={styles.sublabel}>
                    {card.expDate.value}
                </Text>
            </View>
            <View style={
                [
                    styles.nameView,
                    {
                        top: 135
                    }
                ]
            }>
                <Text style={styles.nameText}>
                    {card.name.value}
                </Text>

            </View>
            <View style={
                [
                    styles.nameView,
                    {
                        top: 160,
                        fontSize: 14
                    }
                ]
            }>
                <Text style={styles.numText}>
                    {card.cardNo.value}
                </Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   label: {
    fontSize: 10, 
    color: "#D3D8E1", 
    fontFamily: "Circular-Book", 
    alignSelf: "flex-end"
   },
   sublabel: {
    fontSize: 16, 
    color: "white", 
    fontWeight: "bold"
   },
   expDateView: {
    position: 'absolute',
    left: 270,
    top: 20,
   },
   cvcView: {
    position: 'absolute',
    left: 215,
    top: 20
   },
   editLogo: {
    position: 'absolute',
    left: 285,
    top: 155
   },
   imageBack: {
    position: 'absolute',
    left: 75,
   },
   cardLogoView: {
    top: 20,
    position: 'absolute',
    left: 25,
   },
   container: {
    marginRight: '6%', 
    borderRadius: 16, 
    marginTop: 20
   },
   nameView: {
    position: 'absolute',
    left: 25,
   },
   nameText: {
    fontSize: 16, 
    color: "white", 
    fontWeight: "bold"
   },
   numText:{
    fontSize: 14, 
    color: "#D3D8E1", 
    fontWeight: "bold"
   }
})

export default ViewCard;