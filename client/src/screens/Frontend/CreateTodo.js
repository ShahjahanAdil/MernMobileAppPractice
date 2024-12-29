import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import { useAuthContext } from '../../contexts/AuthContext';
import { APP_HOST } from '@env';
import axios from 'axios';

const initialState = { title: '', description: '', imageUri: '' };

export default function CreateTodo() {
    const { user } = useAuthContext();
    const userID = user.userID;

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleOnChangeText = (name, val) => setState(s => ({ ...s, [name]: val }));

    const handlePickImage = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo', quality: 0.8 }, response => {
            if (!response.didCancel && !response.error) {
                setState(s => ({
                    ...s,
                    imageUri: response.assets[0]?.uri || '',
                }));
            }
        });
    };

    const handleCreateTodo = async () => {
        setLoading(true);
        const { title, description, imageUri } = state;

        if (!title || !description || !imageUri) {
            setLoading(false);
            return;
        }

        try {
            const imageFormData = new FormData();
            imageFormData.append('file', {
                uri: imageUri,
                name: `todo-image-${Date.now()}.jpg`,
                type: 'image/jpeg',
            });
            imageFormData.append('upload_preset', 'ml_default');

            const imageResponse = await axios.post(
                'https://api.cloudinary.com/v1_1/dcve37vei/image/upload',
                imageFormData
            );

            const imageURL = imageResponse.data.secure_url;

            await axios.post(`${APP_HOST}todos/create`, {
                userID,
                title,
                description,
                status: 'pending',
                imageURL,
            });

            setState(initialState);
            setLoading(false);
        } catch (err) {
            console.error('Todo create error frontend', err);
            setLoading(false);
        }
    };

    return (
        <View style={styles.pageHeight}>
            <View style={styles.createTodoContainer}>
                <Text style={styles.heading}>Create Todo</Text>
                <View style={{ gap: 10 }}>
                    <View>
                        <Text style={styles.label}>Title:</Text>
                        <TextInput
                            style={styles.createTodoInput}
                            placeholder="Enter title"
                            placeholderTextColor="#e7e7e7"
                            cursorColor="#0C82BD"
                            value={state.title}
                            onChangeText={val => handleOnChangeText('title', val)}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Description:</Text>
                        <TextInput
                            style={styles.createTodoInput}
                            placeholder="Enter description"
                            placeholderTextColor="#e7e7e7"
                            cursorColor="#0C82BD"
                            value={state.description}
                            onChangeText={val => handleOnChangeText('description', val)}
                        />
                    </View>
                    <TouchableOpacity style={styles.imagePicker} onPress={handlePickImage}>
                        <Text style={{ color: '#0c82bd' }}>Pick an Image</Text>
                    </TouchableOpacity>
                    {state.imageUri && (
                        <Image source={{ uri: state.imageUri }} style={styles.imagePreview} />
                    )}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.createBtn}
                        onPress={handleCreateTodo}
                        disabled={loading}>
                        {!loading ? (
                            <Text style={{ color: '#fff' }}>
                                Create <EntypoIcon name="plus" size={16} color="#fff" />
                            </Text>
                        ) : (
                            <Text style={{ color: '#fff' }}>Adding...</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageHeight: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    createTodoContainer: {
        width: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e7e7e7',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
    },
    createTodoInput: {
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderWidth: 1,
        color: '#666',
        borderRadius: 8,
        borderColor: '#e7e7e7',
    },
    createBtn: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        backgroundColor: '#0c82bd',
        marginTop: 15,
        borderRadius: 8,
        elevation: 4,
    },
    heading: {
        color: '#0c82bd',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    label: {
        color: '#666',
        marginBottom: 5,
    },
    imagePicker: {
        padding: 10,
        backgroundColor: '#e7f4fc',
        borderRadius: 8,
        alignItems: 'center',
    },
    imagePreview: {
        width: 100,
        height: 100,
        marginTop: 10,
        alignSelf: 'center',
    },
});