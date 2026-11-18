import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList ,TouchableOpacity} from 'react-native';

export default function App() {

    const datasource = [
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'e' },
        { key: 'f' },
        { key: 'g' },
        { key: 'h' },
        { key: 'i' },
        { key: 'j' },
        { key: 'k' },
        { key: 'l' },
        { key: 'm' },
        { key: 'n' },
        { key: 'o' },
        { key: 'p' },
        { key: 'q' },
        { key: 'r' },
        { key: 's' },
        { key: 't' },
        { key: 'u' },
        { key: 'v' },
        { key: 'w' },
        { key: 'x' },
        { key: 'y' },
        { key: 'z' },
    ];

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <FlatList data={datasource} renderItem={renderItem}/>
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
    }
});
