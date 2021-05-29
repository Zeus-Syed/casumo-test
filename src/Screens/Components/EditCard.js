import React from 'react'
import {View,Text, StyleSheet, ScrollView} from 'react-native'
import ImageBack from "../../Assets/images/card-background-shape.svg";
import ImageBack2 from "../../Assets/images/card-background-shape2.svg";
import CardLogo from "../../Assets/images/mastercard-logo.svg";


const EditCard = (props) => {

    const {
        card,
        logoColor
      } = props;

    return (
        <ScrollView style={
            [
                styles.container,
                {
                    backgroundColor: logoColor % 2 == 0 ? "#4C00C2" : "#b1b6bf",
                }
            ]
        }>
            <CardLogo width={35} height={30} style={styles.cardLogoView} />
            {
                logoColor % 2 == 0 ?
                    <ImageBack width={270} height={170} style={styles.imageBack} />
                    :
                    <ImageBack2 width={270} height={170} style={styles.imageBack} />
            }
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
            <View style={[
                styles.nameView,
                {
                    top: 105
                }
            ]}>
                <Text style={[styles.nameText, { color: "white" }]}>
                    {card.name.value}
                </Text>

            </View>
            <View style={[
                styles.nameView,
                {
                    top: 135,
                    fontSize: 14
                }
            ]}>
                <Text style={[styles.nameText, { color: "#D3D8E1" }]}>
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
        borderRadius: 16, 
        marginBottom: 80, 
        top: 50
    },
    nameView: {
     position: 'absolute',
     left: 25,
    },
    nameText: {
     fontSize: 16,  
     fontWeight: "bold"
    },
    numText:{
     fontSize: 14, 
     color: "#D3D8E1", 
     fontWeight: "bold"
    }
 })

export default EditCard;