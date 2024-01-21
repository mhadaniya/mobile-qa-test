import * as React from 'react'

import moment from 'moment'
import { FlatList } from 'react-native'

import { useDailyTemperature } from './DailyTemperature.controller'
import {
  Container,
  ContainerTitleCard,
  Content,
  MonthText,
  TextDate,
  TextTime,
  TodayText
} from './DailyTemperature.style'

export default function DailyTemperature(): React.ReactElement {
  const { setIcons, compareDate, forecast } = useDailyTemperature()

  return (
    <Container testID='dailyTemperature'>
      <ContainerTitleCard>
        <TodayText>Today</TodayText>
        <MonthText>{moment().format('MMMM, DD')}</MonthText>
      </ContainerTitleCard>

      <FlatList
        testID='flatList'
        data={forecast}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.date.toString()}
        horizontal
        renderItem={({ item }) => (
          <Content testID='contentFlatList' color={compareDate(item.date)}>
            <TextTime>{item.max}ºC</TextTime>
            {setIcons(item.description)}
            <TextDate>{item.date}</TextDate>
          </Content>
        )}
      />
    </Container>
  )
}
