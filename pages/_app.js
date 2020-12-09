import '../styles/globals.css'
import theme from '../styles/theme'
import {ThemeProvider} from 'theme-ui';
import { Box, Text } from 'rebass';
import { Transition } from 'react-transition-group';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';


export const colors = {
  gray900: '#EDEDED',
  gray800: '#E0E0E0',
  gray700: '#C5C5C5',
  gray600: '#B5B5B5',
  gray500: '#A1A1A1',
  gray400: '#7E7E7E',
  gray300: '#676767',
  gray200: '#505050',
  gray100: '#393939',
  blue900: '#CDE0F2',
  blue800: '#A8D2F9',
  blue700: '#7CB8EF',
  blue600: '#5EA4E5',
  blue500: '#307EC6',
  blue400: '#2E71AF',
  blue300: '#2E5B85',
  blue200: '#2B465F',
  blue100: '#1C3144',

}





const topWave =  <div style={{height: 150, overflow: 'hidden'}} ><svg viewBox="0 0 1440 320" preserveAspectRatio="none"  style={{height: '100%', width: '100%'}}><path  d="M0,160L21.8,154.7C43.6,149,87,139,131,154.7C174.5,171,218,213,262,202.7C305.5,192,349,128,393,96C436.4,64,480,64,524,90.7C567.3,117,611,171,655,186.7C698.2,203,742,181,785,176C829.1,171,873,181,916,165.3C960,149,1004,107,1047,85.3C1090.9,64,1135,64,1178,53.3C1221.8,43,1265,21,1309,58.7C1352.7,96,1396,192,1418,240L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z" style={{stroke: 'none', fill: colors.blue300}}></path></svg></div>

const bottomWave =   <div style={{height: 150, overflow: 'hidden'}} ><svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0,64L21.8,90.7C43.6,117,87,171,131,170.7C174.5,171,218,117,262,122.7C305.5,128,349,192,393,192C436.4,192,480,128,524,96C567.3,64,611,64,655,106.7C698.2,149,742,235,785,234.7C829.1,235,873,149,916,144C960,139,1004,213,1047,218.7C1090.9,224,1135,160,1178,144C1221.8,128,1265,160,1309,165.3C1352.7,171,1396,149,1418,138.7L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z" style={{stroke: 'none', fill: colors.blue300}}></path></svg></div>
function MyApp({ Component, pageProps }) {

  const [scroll, setScroll] = useState(0)
  const [maxScroll, setMaxScroll] = useState()

useEffect(() => {
  document.onscroll = checkScroll
})

function checkScroll(e) {
  e = e || window.event
  clearTimeout(timer);
  !maxScroll && setMaxScroll(e.target.scrollingElement.scrollHeight)
  setScroll(e.target.scrollingElement.scrollTop)
}

const [timer, setTimer] = useState(null)
const mouse = useRef({ x: 0, y: 0 });

useEffect(() => {
  setTimer( setTimeout(() => {
    document.getElementById('header').scrollIntoView({behavior: 'smooth'});
  }, 2000))

  timer;
},[])

  return <ThemeProvider theme={theme}>
     <Transition timeout={0} in={true} appear >
       {(sta) => (
         <>
          <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      minWidth: '100vw',
      transform: sta === 'entered' ? scroll < 100 ? 'translateY(0vh)' : 'translateY(-20vh)' : 'translateY(-20vh)',
      transition: 'all 300ms ease',
      zIndex: 4
    }}>
   {topWave}


   
    </Box>
    <Box sx={{
      opacity: sta === 'entered' ? 1 : 0,
      transition: 'all 300ms ease 1s'
    }}>

    <Component {...pageProps} colors={colors} sta={sta} scroll={scroll} mouse={mouse} maxScroll={maxScroll}/>
    </Box>
  
         </>
       )}
     </Transition>
  </ThemeProvider>
}

export default MyApp
