import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList ,TouchableOpacity , SectionList} from 'react-native';

export default function App() {

  const datasource = [
    {data:[
        {key: 'a'},
        {key: 'e'},
      ],
      title:"Vowels"},
    {data:[
        {key: 'b'},
        {key: 'c'},
        {key: 'd'},
      ],
      title:"Consonants"}
  ];

  const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
          <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    )
  }

  const renderSection = ({section : {title}  }) => {
    return (
        <Text style={styles.headerText}>{title}</Text>
    )
  }


  return (
    <View style={styles.container}>
      <SectionList contentContainerStyle={{padding : 30,borderWidth : 5 ,borderColor : "red"}} sections={datasource} renderItem={renderItem} renderSectionHeader={renderSection} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  opacityStyle : {
    borderWidth : 1
  },
  textStyle : {
    fontSize : 20,
    margin : 10,
    textAlign : "left"
  },
  headerText : {
    fontSize : 20,
    margin : 10,
    textAlign : "center",
    fontWeight : "bold"
  }
});
