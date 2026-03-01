import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grid, GridItem, HStack, Show, useBreakpointValue } from '@chakra-ui/react'
import NavBar from './components/NavBar';
// import SwitchTheme from './components/SwitchTheme'

function App() {
  // return <Button onClick={() => {}}>Click</Button>
  return (
    <Grid templateAreas={{
      base:`"nav" "aside"`,
      lg: `"nav nav" "menu aside"`
    }} >
      <GridItem area={"nav"}>
        {/* <HStack> */}
          <NavBar/>
        {/* </HStack> */}
      </GridItem>

      <GridItem area={"aside"}>Aside</GridItem>

      <Show above='lg'>  
            <GridItem area={"menu"}>Menu</GridItem>
      </Show>
  </Grid>)
}
export default App
