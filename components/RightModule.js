import { memo, useMemo } from "react";
import { Box, Text } from "rebass"



export const RightModule = ({mainText,subText,link,icon,description,colors,router}) => {

    var j = ( Math.random() * 2); 
 

    return <Box  sx={{
        width: 160,
        height: 176,
        background: j > 1 ? colors.blue400 :colors.blue300,
        borderRadius: 20,
        boxShadow:
        "inset 0px 3px 0px " +
        colors.blue600 +
        ", 0px 3px 3px " +
        "#00000020",
        mr: 3,
        mt: 1,
        my: 3,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: colors.blue600,
        
        ":hover": {
            border: '2px solid ' + colors.blue400,
            cursor: 'pointer',
            background: colors.blue500,
            boxShadow: '#00000020, 0px 4px 6px #00000070, 0 5px 15px #00000010'
        }
    }}>
        {icon && <Box>icon</Box>}
     <Text color="blue800" sx={{
         fontSize: 1,
         width: '10em',
         margin: '0 auto'
     }}>{mainText}</Text>
     <Text>{subText}</Text>
    </Box>
}

export default memo(RightModule);