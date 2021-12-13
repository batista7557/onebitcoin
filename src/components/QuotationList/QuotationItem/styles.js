import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContent:{
        width:'95%',
        height:'auto',
        backgroundColor:'#fff',
        marginLeft:'3%',
        marginRight:'3%',
        marginBottom:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        padding:10
    },
    contextLeft:{
        width:'36%',
        height:'100%',
        alignItems:'flex-start'
    },
    contextRight:{
        width:'60%',
        alignItems:'flex-end'
    },
    dayQuotation:{
        fontSize:15,
        paddingLeft:2,
        color:'#000',
        fontWeight:'bold'
    },
    logoBitcoin:{
        width:40,
        height:40,
        marginLeft:2,
    },
    boxLogo:{
        flexDirection:'row',
        alignItems:'center',
    },
    price:{
        fontSize:16,
        fontWeight:'bold'
    }
})

export default styles