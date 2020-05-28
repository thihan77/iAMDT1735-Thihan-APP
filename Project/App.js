import * as React from 'react';
import { StatusBar,View,TextInput, Text, FlatList, TouchableOpacity, Image, Button,CheckBox,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state= {
    inputValue:'',
    todos:[]
    
  };

  clearAll(){
    this.setState({
      todos:[],
      
  })
  }

  changeText= value=> {
    this.setState({
      inputValue: value
      
    });
  };
  

  addItem = () => {
if (this.state.inputValue !== ''){
  this.setState(prevState => {
    const newToDo = {
      title: this.state.inputValue,
      createdAt: Date.now(),
    };

    var todos = this.state.todos.concat(newToDo);

    this.setState({
      todos: todos,
    });
  });

 }

  };


  render() {
    const todos = this.state.todos.reverse().map((todo, key) =>
    <View style={{ flexDirection:'row', marginTop: 20 }}>
    <Image
          style= {styles.img}
          source={{uri: 'https://img.pngio.com/todo-png-8-png-image-to-do-png-580_514.png'}}
        />
    <TouchableOpacity style={{
      width: 20,
      height: 20,
      borderRadius: 15,
      borderWidth: 3,
      borderColor:'blue',
      margin: 15
      
    }}>
    <CheckBox
  center
  title='Click Here to Remove This Item'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
/>

  
  </TouchableOpacity>
  <Text style={styles.New}> {todo.title}
    
</Text>
  
  </View>
    );

  return (
      <LinearGradient colors={['#00E8FF', '#000']} style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />

     <View>
        <TextInput
  style={styles.input}
  onSubmitEditing={this.addItem}
  onChangeText={this.changeText}
  placeholder="Enter To Do Here.. "
  value={this.state.inputValue}
  placeholderTextColor={'#FFF'}
  multiline={true}      
  autoCapitalize="sentences"
  underlineColorAndroid="transparent"
  selectionColor={'white'}
  maxLength={30}
  returnKeyType="done"
  autoCorrect={false}
  blurOnSubmit={true}
  />
  </View>
  <View>
  {todos}
  </View>
  <Button
  title="delete all"
  onPress={(e) => this.clearAll()}
  />
  
  
</LinearGradient>

    );
  }
}

const styles ={
input:{
  marginTop: 30,
  paddingTop: 10,
  paddingRight: 15,
  paddingLeft: 15,
  fontSize: 34,
  color: 'white',
  fontWeight:'500'
    },
    
img:{
  width: 50, 
  height: 50
},

  New:{
    paddingLeft: 5, 
    marginTop: 10, 
    fontSize:28, 
    color:'blue',
    fontWeight:'bold',
    
  
},
}