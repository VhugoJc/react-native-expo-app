import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Fab} from "../components/Fab" ///float acction button

const CounterScreen = () =>{
    const [count, setCount] = useState(10);
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Contador: {count} </Text>
            <StatusBar style="auto" />
            <Fab right={true} title="+1"  onPress={()=>setCount(count+1)}/>
            <Fab right={false} title="-1" onPress={()=>setCount(count-1)}/>
        </View>
    );
}

export default CounterScreen;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#000',
      flex: 1,
      justifyContent: 'center',
     
    },
    text: {
      color:'#fff',
      fontSize:32,
    },
    btn:{
      backgroundColor:"#fff",
      borderRadius:100,
      height: 60,
      width:60,
      justifyContent: 'center',
    },
    btnText:{
      alignSelf:"center",
      fontSize:25
    },
    btnLocationR:{
      position:"absolute",
      bottom:20,
      right:20
    },
    btnLocationL:{
      position:"absolute",
      bottom:20,
      left:20
    }
});