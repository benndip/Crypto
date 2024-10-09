import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './TrendingCryptoItem.style'
import { FontAwesome5 } from '@expo/vector-icons'
import ChangeItem from '../ChangeItem/ChangeItem.component'
import { CoinType } from '../../types'
import { MiniLineChart } from '..'

interface IProps {
  coin: CoinType
}

const TrendingCryptoItem: React.FC<IProps> = ({ coin }) => {
  const { name, symbol, small, data } = coin
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <View style={styles.iconAndTextsContainer}>
            <Image source={{ uri: small }} style={styles.coinIcon} />
            <View style={styles.textsContainer}>
                <Text style={styles.symbol}>{symbol}</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
        <View style={styles.priceAndChangeContainer}>
            <Text style={styles.currentPrice}>$12,490.02</Text>
            <ChangeItem value={data?.price_change_percentage_24h?.usd} showPercentage />
        </View>
      </View>

    </View>
  )
}

export default TrendingCryptoItem