import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button, StatusBar} from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

function GoalAppHome() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [goalList, setGoalList] = useState<Array<any>>([]);

  const startAddGoalHandler = () => {
    setModalShow(true);
  };
  const endAddGoalHandler = () => {
    setModalShow(false);
  };

  const addGoalHandler = (inputText: string) => {
    setGoalList([
      ...goalList,
      {text: inputText, key: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (key: string) => {
    setGoalList(data => data.filter(item => item.key !== key));
  };
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#1e085a"
        barStyle={'light-content'}
        showHideTransition={'fade'}
      />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoal={addGoalHandler}
          cancelGoal={endAddGoalHandler}
          modalShow={modalShow}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            keyExtractor={item => item.key}
            renderItem={itemData => (
              <GoalItem itemData={itemData} deleteItem={deleteGoalHandler} />
            )}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {flex: 5},
});

export default GoalAppHome;
