import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function QuotationItem(props) {
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                    style={styles.logoBitcoin}
                    source={require('../../../img/bitcoinlogo2.png')}
                    />
                    <Text style={styles.dayQuotation}>{props.data}</Text>
                </View>
            </View>
                <View style={styles.contextRight}>
                    <Text style={styles.price}>{props.valor}</Text>
                </View>
        </View>
    )
}