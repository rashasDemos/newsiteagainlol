import { memo } from 'react';
import { Box } from 'rebass';
import LeftSquare from './leftSquareModule';
import {getMousePos} from './utils'

export const Layout = ({children,mouse,sta,colors,scroll,form,setForm}) => {
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
        backgroundColor: "gray900",
        display: ["flex"],
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderBottom: ['','2px solid #00000060','','',''],
        position: ['relative','relative','fixed']
      }}
    >

  
      <Box
        sx={{
          p: 10,
          transform:
            sta === "entered" ? "translateX(0px)" : "translateX(-50vw)",
          transition: "all 300ms ease 1300ms",
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
      py={[180]}
      px={[80]}
      width={[1, 1,1/2]}
      minHeight={"100vh","auto"}
      overflow="auto"
    >

     <Box>
     {children}
     </Box>
    </Box>
  </Box>
}

export default memo(Layout);