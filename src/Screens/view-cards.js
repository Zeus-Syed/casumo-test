import React, { useState } from 'react'
import { useSelector } from "react-redux"
import {View,Text,Pressable, SafeAreaView, StyleSheet, ScrollView, Modal, TouchableOpacity} from 'react-native'
import ViewCard from "./Components/ViewCard";
import Form from "./Components/Form";
import EditForm from "./Components/EditForm";

const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [cardToEdit, setCardToEdit] = useState({});
    const [modalType, setModelType] = useState("ADD");
    const [indexColor, setIndexColor] = useState(0);
    const { cards } = useSelector(state => state.cards)


    const editCard = (item, index) => {
        setModelType("EDIT");
        setIndexColor(index);
        setCardToEdit(item);
        setModalVisible(true);
    }
    return (
       
        <View style={styles.container}>

            <SafeAreaView>

                <View style={styles.mainview}>
                    <Text style={styles.headerText}>Your cards</Text>
                    <Text style={styles.subHeaderText}>Add, edit or delete your cards any time</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    {
                        cards.map((item, index) => {
                            return (
                                <ViewCard card={item} cardEdit={(item) => editCard(item, index)} logoColor={index} key={`cards-${index}`} />
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.addCard}>
                    <TouchableOpacity onPress={() => { setModelType("ADD"); setModalVisible(true); }}>
                        <Text style={styles.textView}>Add new card</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBack}>
                            <Pressable
                                style={{ flex: 1 }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >

                            </Pressable>
                        </View>
                        <View style={styles.modalView}>
                            {
                                modalType == "EDIT" ?
                                    <EditForm
                                        card={cardToEdit}
                                        logoColor={indexColor}
                                        modalClose={(value) => setModalVisible(value)}
                                    />
                                    :
                                    <Form
                                        modalClose={(value) => setModalVisible(value)}
                                    />
                            }
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
        
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "#E5E5E5"
    },
    mainview: {
        marginLeft: '6%',
        marginRight: '6%'
    },
    cardview: {
        marginLeft: '6%',
        marginRight: '6%',
        backgroundColor: "yellow",
        height: 220,
        borderRadius: 16,
        flex: 1,
        flexWrap: "wrap"
    },
    headerText: {
        fontSize: 30,
        color: "#4C00C2",
        fontWeight: "bold",

    },
    subHeaderText: {
        fontSize: 14,
        fontFamily: "Circular-Book",
        color: "#798291"
    },
    imgBackground: {
        width: 80,
        height: 10
    },
    addCard: {
        marginLeft: '6%',
        marginRight: '6%',
        backgroundColor: "#4C00C2",
        height: 50,
        borderRadius: 32,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    input: {
        height: 40,
        borderBottomWidth: 0.5
    },
    scrollView: {
        height: 470,
        marginTop: 50
    },
    modalBack: {
        flex: 1,
        flexDirection: 'row'
    },
    modalView: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 32
    },
    textView: { 
        color: "white", 
        fontWeight: "bold" 
    }
})

export default Home;