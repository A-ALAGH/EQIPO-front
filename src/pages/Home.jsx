import React, { Component } from 'react'
import Carousel from '../components/carousel/carousel'
import { SimpleGrid } from '@chakra-ui/react'
import LeisureEvent from '../components/cardEvent/leisurecard'
import SportEvent from '../components/cardEvent/sportcard'
import TeamworkEvent from '../components/cardEvent/teamworkcard'

// import SportEvent from '../../../EQIPO-FINAL-PROJECT/models/sportEventModel'

export default class Home extends Component {
  render() {
    return (
      <div>
    <Carousel/>

    {/* <SimpleGrid columns={3} minChildWidth="160px" spacing="10px" >
    <SportEvent/> <LeisureEvent/> <TeamworkEvent/>
    </SimpleGrid> */}

      </div>
    )
  }
}
