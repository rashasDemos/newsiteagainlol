import { memo } from 'react';
import { Box } from 'rebass';
import LeftSquare from './leftSquareModule';
import {getMousePos} from './utils'
import styles from "../styles/Home.module.css";

export const Layout = ({children,mouse,sta,colors,scroll,form,setForm,maxScroll}) => {
  const percentScroll = (scroll /maxScroll) * 100
    return <Box 
    width={"100vw"}
    minHeight={"100vh"}
    display="flex"
    overflowX="hidden"
    sx={{flexDirection: ['column','column','row']}}
    onMouseMove={(e) => (mouse.current = getMousePos(e))}
  >
    <Box
      width={["100vw","100vw",1/2]}
      minHeight={"50vh","50vh","100vh"}
      
      overflow="hidden"
      color="white"
      pt={6}
      pb={4}
      sx={{
        background: `linear-gradient(0deg,${colors.gray800},${colors.gray900})`,
        backgroundSize: '600% 600%',
        backgroundPositionX: '50%',
        backgroundPositionY: percentScroll + 10 + '%',
        transition: 'background-position-y 500ms linear 500ms',
        display: ["flex"],
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderBottom: ['','2px solid #00000060','','',''],
        position: ['relative','relative','fixed']
      }}
    >

  
      <Box
       className={!form && styles.floater}
        sx={{
          p: 10,

          transform:
            sta === "entered" ? "translateX(0px)" : "translateX(-50vw)",
          transition: "all 300ms ease 1300ms",
          "@keyframe float": {
            from: 'translateX(-10px)',
            to: "translateX(10px)"
          }
        }}
      >
        <LeftSquare colors={colors} mouse={mouse} scroll={scroll} form={form} setForm={setForm}/>
      </Box>
    </Box>
    <Box
      backgroundColor={colors.gray800}
      display= {["none","none", "flex"]}
      p={3}
      width={1/2}
      minHeight={["100vh","50vh"]}
      overflow="hidden"
      color="white"
    ></Box>
    <Box
      id="rightside"
      backgroundColor={colors.gray800}
      py={['10px',180]}
      px={['10px',80]}
      width={[1, 1,1/2]}
      minHeight={"100vh","auto"}
      overflow="auto"
      sx={{position: 'relative'}}
    >

     <Box>
     <Box mb={4}>
     {children}
     </Box>
    
    </Box>
    <Box as="footer" sx={{textAlign: 'left', fontSize: 0, m: '10px auto',mt: 4, position: "absolute", bottom: 10}}>rasha.world is owned and created by rasha rahman 2020 | los angeles <br /> no data is being collected :)</Box>
     </Box>
  </Box>
}

export default memo(Layout);