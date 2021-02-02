import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';



const Task = ({item, deleteTask}) => {

  const delMsg =  () => Alert.alert(
    //titre de l'alerte :
    "suppression tâche",
    //message de l'alerte :
    "Es-tu vraiment sûr de vouloir supprimer ?",
  //on fait un tableau avec des boutons en objets
    [
      {
        text: "oui",
        onPress: () => deleteTask(item.id)
  
      },

      {
        text: "non",
        onPress: () => console.log("Ok on annule rien!"),
        //style prédéfini
        style: "cancel"
      }
    ],
    // { cancelable: false }
//ajout de l'option supplémentaire pour qu'on puisse pas fermer la boîte de dialogue en touchant en dehors du champ (sur Android)
    )

    const check = () => {

    }

    // const selector = (target) => {
    //   if (target === 'selected') {
    //     return <MaterialIcons name="radio-button-checked" size={24} color="blue" />;
    //   } else {
    //     return <MaterialIcons name="radio-button-unchecked" size={24} color="black" />;
    //   }
    // }


    return (
        <View style={styles.task}>
            <TouchableOpacity onPress={check}>
                {item.completed 
                ? <MaterialIcons name="radio-button-checked" size={24} color="blue" onPress={() => <MaterialIcons name="radio-button-unchecked" size={24} color="black" />}/>
                : <MaterialIcons name="radio-button-unchecked" size={24} color="black" onPress={() => <MaterialIcons name="radio-button-checked" size={24} color="blue"/>} />}
            </TouchableOpacity>
            <Text >{item.title}</Text>
            <TouchableOpacity onPress={delMsg}>
                <MaterialCommunityIcons name="delete-variant" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    task: {
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'white',
        width: 300,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
      },
})

