import React, { useState } from 'react';
import FormInput from '../../src/components/FormInput';
import FormButton from '../../src/components/FormButton';
import {
    ProfileContentWrap,
    ProfileWrapper,
    UpdateText,
    UpdateTouchable,
} from './ProfileStyle';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import NavigationStrings from '../../src/Constants/NavigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showSuccess } from '../ErrorHelperFunction/HelperFunction';


const Profile = props => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const navigation = useNavigation();

    const updateProfile = async (updatename, updateEmail) => {
        let userToken;
        userToken = null;
        try {
            userToken = await AsyncStorage.getItem('userToken')
        } catch (error) {
            console.log(error)
        }
        console.log(userToken, 'AUTHTOKEN FROM HOME PAGE IS BRINGS A MESSAGE');

        fetch('https://bigfoot.reddotapps.com.sg/api/app/update-profile',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({
                    name: updatename,
                    email: updateEmail,
                })
            }
        )
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.success === true){
                    showSuccess("Profile Updated Successfully")
                    navigation.navigate(NavigationStrings.SETTINGS_SCREEN)
                }
            })
            .catch(error => {
                showError(error);
                console.log('error', error);
            });

    };

    return (
        <>
            <ProfileWrapper>
                <HeaderComponent
                    goBack={() => props.navigation.goBack()}
                    text="My Profile"
                />
                <ProfileContentWrap>
                    <FormInput
                        // labelValue={email}
                        InputSubject="Name"
                        onChangeText={userName => setName(userName)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        // labelValue={email}
                        InputSubject="Email address"
                        onChangeText={userEmail => setEmail(userEmail)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <UpdateTouchable
                        onPress={() => {
                            navigation.navigate(NavigationStrings.UPDATE_PASSWORD);
                        }}>
                        <UpdateText>Update password</UpdateText>
                    </UpdateTouchable>

                    <FormButton
                        buttonTitle="Save"
                        onPress={() => {
                            updateProfile(name, email);
                        }}
                    />
                </ProfileContentWrap>
            </ProfileWrapper>
        </>
    );
};

export default Profile;
