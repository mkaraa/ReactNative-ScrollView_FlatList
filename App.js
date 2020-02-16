import React , {useState} from 'react';
import { StyleSheet, View , Button, ScrollView , FlatList} from 'react-native';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';

export default function App() {
 
  const [courseGoals,setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
   
    setCourseGoals(currentGoals => [...currentGoals,{id: Math.random().toString(),value : goalTitle}
    ]);
    setIsAddMode(false);
   }

   const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId); 
      });
   }

   const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);     
  }

  return (
    <ScrollView>
    
    <View style={styles.screen}>
      <Button title = "Add New Goal" onPress={ () => setIsAddMode(true)}/>
      <GoalInput 
        visible = {isAddMode} 
        onCancel = {cancelGoalAdditionHandler}
        onAddGoal = {addGoalHandler} />
      
         <FlatList 
     //  keyExtractor={(item,index) => item.id}
         data={courseGoals} 
         renderItem={itemData => 
            <GoalItem 
                onDelete={removeGoalHandler.bind(this,itemData.item.id)}
                title={itemData.item.value} />}>
         </FlatList>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }
  
});


 
