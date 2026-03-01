import { Button, HStack, Text } from '@chakra-ui/react'
import SwitchTheme from './SwitchTheme';

const NavBar = () => {
  return (
    <HStack  justifyContent="space-between" padding={"2"}>  
        <Button>
            Logo
        </Button>
        <Text>GAME HUB</Text>
          <SwitchTheme/>

    </HStack>
  )
}

export default NavBar;
