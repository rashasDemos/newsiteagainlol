import { useEffect } from "react";
import { Box, Text } from "rebass";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export const Freelance = ({ colors, sta,mouse }) => {
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
        Freelance Web Dev
      </Text>
      <Text sx={{
        borderLeft: '8px solid ' + colors.gray100,
        bg: 'gray900',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }} my={3} px={3}>
          As a freelance developer, I have learned a lot about making and managing websites. As someone who focuses on front end development, I had to teach myself good UI/UX design techniques in order to create highly functioning and visually pleasing elements. I've learned how to negotiate with my clients, make it a smooth process to update, and offer lots of variety in my services. All my skills listed under technologies can be utilized for freelance work.
        </Text>
      <Box>
        <Text sx={{ fontSize: 2, fontWeight: 600 }}>
          AAA Authorized Agent Website
        </Text>
        <Box as="ul">
          <Text as="li">
            {" "}
            created a front page consisting of a slideshow, and cms integrated
            text ux components.
          </Text>
          <Text as="li">
            {" "}
            built a price modal page that showed different coverage costs
            averages with a tool that let the user pick between vehicle type and
            insurance type{" "}
          </Text>
          <Text as="li">
            {" "}
            lastly made a contact form that sends to a node server which then
            sends a nicely formatted email to the user and my client built with
            react
          </Text>
        </Box>
        <Text sx={{ fontSize: 2, fontWeight: 600 }}>Student VISA Website</Text>

        <Box as="ul">
          <Text as="li">
            {" "}
            created a front page with a slideshow and an email subscriber built
          </Text>
          <Text as="li">
            {" "}
            an about page with cms so that the client can change content even if
            im not present built with html/css/js
          </Text>
        </Box>
        <Text sx={{ fontSize: 2, fontWeight: 600 }}>
          MS Liquor Convenience Store Website
        </Text>
        <Box as="ul">
          <Text as="li">
            created a whole website with alcohol inventory with search bar{" "}
          </Text>
          <Text as="li"> used strapi cms to set the alcohol inventory</Text>
          <Text as="li">
            {" "}
            created page for people to request new craft beers worked on launch
            page for delivery service
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Freelance;
