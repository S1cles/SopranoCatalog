
import '../App.scss';
import { Box, useMediaQuery } from '@chakra-ui/react'
// import logoPng from './img/logoPng.png'
import Drawwer from '../Components/Drawwer';


function App() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [smLogo] = useMediaQuery('(max-width: 756px)')


  return (
    <Box className="App">
      <Box className='bg_container'>
        <Box style={smLogo ? { fontSize: '4.5rem' } : { fontSize: '7rem' }}>Victoria Soprano</Box>
        {/* <Img src={logoPng} width={200} margin={'0 auto'}  alt="" /> */}
        <Drawwer />
      </Box>
    </Box>


  );
}

export default App;
