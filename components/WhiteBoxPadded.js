import { Box } from "rebass"


export const WhiteBoxPadded = ({children,colors}) => {
    return <Box sx={{
        width: ['21.5rem','32rem', '26rem'],
        display: 'grid',
        gridTemplateColumns: ['50% 50%','50% 50%','25% 25% 25% 25%'],
        alignItems: 'center',
        backgroundColor: colors.gray900 + '90',
        p: 10,
        py: 20,
        borderRadius: 10,
        boxShadow: 'inset 0 -2px 0px ' + colors.gray900 + ', inset 0 4px 2px #0000015' ,
        fontSize: [0,1,2],
        margin: '0 auto'
    }}>
        {children}
    </Box>
}

export default WhiteBoxPadded;