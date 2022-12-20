import React, {useState} from ‘react’;
import {View, Text, TextInput, TouchableOpacity} from ‘react-native’;
import {addUser} from ‘../helpers/sqlHelper’

const Form = () => {
let formData = []
const [name, setName] = useState(‘’);
const [hobby, setHobby] = useState(‘’);

const onSubmit = () => {
fromData.push({name: name, hobby: hobby});
addHobbies(formData);
}
return (
<View>
<View>
<TextInput
placeholderTextColor={colors.grey}
placeholder={“Name”}
onChangeText={(val) => setName(val)}
/>
<TextInput
placeholderTextColor={colors.grey}
placeholder={“Hobby”}
onChangeText={(val) => setHobby(val)}
/>
</View>
</View>
);
};

export default Form;

