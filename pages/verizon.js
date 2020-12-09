import { useEffect, useRef } from "react";
import { Box, Text } from "rebass";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export const Verizon = ({ colors, sta, mouse }) => {

  useEffect(() => {
    document.getElementById('header').scrollIntoView({behavior: 'smooth'})
  },[])

  const router = useRouter();
  return (
    <Layout mouse={mouse} colors={colors} sta={sta}>
      <Text
            id="header"
        onClick={() => router.back()}
        sx={{
          color: "blue200",
          opacity: sta === "entered" ? 1 : 0,
          transition: "all 300ms ease",
          fontSize: 1,
          ":hover": {
            fontWeight: 700,
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
      >
        back to front page
      </Text>
      <Text

        sx={{
          fontSize: 8,
          lineHeight: "1em",
          fontWeight: "bold",
          letterSpacing: -4,
          my: 1,
          opacity: sta === "entered" ? 1 : 0,
          transform: sta === "entered" ? "translateY(0vh)" : "translateY(-5vh)",
          transition: "all 300ms ease",
        }}
      >
        Verizon Sales Consultant
      </Text>
      <Text sx={{
        borderLeft: '8px solid ' + colors.gray100,
        bg: 'gray900',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }} my={3} px={3}>
          Verizon taught me so many things that I would have never learned in college or even a coding job. I now know how to negotiate with people on sales, understand how to figure out what is best needed for them, and I have learned to listen and speak at proper times.
        </Text>
      <Box>
        <Text sx={{ fontSize: 2, fontWeight: 600 }}>
          Sales Record
        </Text>
        <Box as="ul">
          <Text as="li">
            {" "}
            finished top 10 in the district at all times
          </Text>
          <Text as="li">
            {" "}
            sold over $10,000 in profit monthly
          </Text>
          <Text as="li">
            {" "}
            ranked #1 three times in district (over 200 employees)
          </Text>
        </Box>
        <Text sx={{ fontSize: 2, fontWeight: 600 }}>Tech Service</Text>

        <Box as="ul">
          <Text as="li">
            {" "}
            able to troubleshoot all phone issues
          </Text>
          <Text as="li">
            {" "}
            was able to convert phone problems into potential phone sales
          </Text>
        </Box>
        <Text sx={{ fontSize: 2, fontWeight: 600 }}>
          Communication
        </Text>
        <Box as="ul">
          <Text as="li">
            always had customers leave my store with a happy smile
          </Text>
          <Text as="li"> never had a bad return</Text>
          <Text as="li">
            {" "}
          worked very well with other co-workers
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Verizon;
