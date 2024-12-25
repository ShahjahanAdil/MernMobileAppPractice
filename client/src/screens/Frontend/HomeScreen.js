import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import ADIcon from 'react-native-vector-icons/dist/AntDesign';
import Animated, { SlideInDown, SlideOutLeft } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {

    const [isVisible, setIsVisible] = useState(false)

    useFocusEffect(
        useCallback(() => {
            setIsVisible(true)
            return () => setIsVisible(false)
        }, [])
    );

    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {isVisible &&
                    <Animated.View
                        entering={SlideInDown}
                        exiting={SlideOutLeft}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.pageHeight}>
                            <View style={styles.homeTop}>
                                <Text style={styles.homeText}>Create Todos with us and manage your work smartly</Text>
                                <FeatherIcon name='check-square' size={60} color={'#fff'} />
                            </View>

                            <View>
                                <View style={styles.createManageContainer}>
                                    <View style={styles.createBox}>
                                        <Text style={styles.todoBoxText}>Create</Text>
                                        <View style={styles.todoBoxViewFlex}>
                                            <Text style={{ color: '#fff', flex: 1 }}>Create your todo work and save it</Text>
                                            <FAIcon name='plus-square-o' size={30} color={'#efefef'} />
                                        </View>
                                    </View>
                                    <View style={styles.manageBox}>
                                        <Text style={styles.todoBoxText}>Manage</Text>
                                        <View style={styles.todoBoxViewFlex}>
                                            <Text style={{ color: '#fff', flex: 1 }}>Update the todo according to your progress</Text>
                                            <FeatherIcon name='edit' size={30} color={'#efefef'} />
                                        </View>
                                    </View>
                                </View>

                                <View>
                                    <View style={styles.deleteBox}>
                                        <Text style={styles.todoBoxText}>Delete</Text>
                                        <View style={styles.todoBoxViewFlex}>
                                            <Text style={{ color: '#fff', flex: 1 }}>Remove todo that you have done</Text>
                                            <ADIcon name='delete' size={30} color={'#efefef'} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    pageHeight: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    homeTop: {
        width: '100%',
        backgroundColor: '#0c82bd',
        padding: 10,
        borderRadius: 8,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    homeText: {
        color: '#fff',
        flex: 1,
        fontWeight: 600
    },
    createManageContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    createBox: {
        flex: 1,
        minHeight: 120,
        backgroundColor: '#09de81',
        padding: 10,
        borderRadius: 8,
        elevation: 5
    },
    manageBox: {
        flex: 1,
        minHeight: 120,
        backgroundColor: '#00b1de',
        padding: 10,
        borderRadius: 8,
        elevation: 5
    },
    deleteBox: {
        width: '100%',
        minHeight: 120,
        backgroundColor: '#ff5454',
        padding: 10,
        borderRadius: 8,
        elevation: 5
    },
    todoBoxText: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 16,
        marginBottom: 4
    },
    todoBoxViewFlex: {
        flexDirection: 'row'
    }
})