import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Modal, Image} from 'react-native';
import images from '../../../../assets/images';

type GOAL_INPUT_PROPS = {
  addGoal: (inputText: string) => void;
  cancelGoal: () => void;
  modalShow: boolean;
};

function GoalInput(props: GOAL_INPUT_PROPS) {
  const {addGoal, cancelGoal, modalShow} = props;
  const [inputText, setInputText] = useState<string>('');
  const goalInputHandler = (enteredText: any) => {
    setInputText(enteredText);
  };

  const addGoalHandler = () => {
    addGoal(inputText);
  };
  return (
    <Modal visible={modalShow} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={images.goalImg} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={'#5e0acc'}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelGoal} color={'#f31282'} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
