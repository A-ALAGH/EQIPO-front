import React, { Component } from 'react'
import Carousel from '../components/carousel/carousel'
import { SimpleGrid } from '@chakra-ui/react'
import CardEvent from '../components/cardEvent/CardEvent'

export default class Home extends Component {
  render() {
    return (
      <div>
    <Carousel/>
    <SimpleGrid columns={3} minChildWidth="160px" spacing="10px" >
    <CardEvent/> <CardEvent/> <CardEvent/>
    </SimpleGrid>

      </div>
    )
  }
}
