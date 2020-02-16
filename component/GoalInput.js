import React, {useState} from 'react';
import {View,Text,Button,StyleSheet,TextInput, Modal} from 'react-native';
import GoalItem from './GoalItem';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
       }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }   

 
    return(
        <Modal style = {styles.screen} visible={props.visible} animationType="slide">
     <View style = {styles.inputContainer}>
        <TextInput 
           style={styles.input}
           placeholder="Course Goal" 
           onChangeText={goalInputHandler}
            value={enteredGoal}
           />
           <View style={styles.buttonContainer}>
                <Button title="CANCEL" color="red" onPress={props.onCancel} />
                <Button title="ADD" onPress={addGoalHandler} style={styles.button}></Button>
           </View> 
     </View>
     </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer : {
        flex:1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    input : {
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:10
    },
    screen:{
        padding:50
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
    },
    button:{
        width:'40%'
    }
    
});


export default GoalInput;