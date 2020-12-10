import Head from "next/head";
import { useState, useRef, useEffect, useMemo } from "react";
import { Box, Text } from "rebass";
import { canv } from "../components/leftSquareModule";
import RightModule from "../components/RightModule";
import WhiteBoxPadded from "../components/WhiteBoxPadded";

import { getMousePos } from "../components/utils";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { init } from "emailjs-com";

export default function Home({ colors, scroll, sta, mouse, maxScroll }) {
  const [hovState, setHovState] = useState({
    current: "",
    hovered: null,
    timeout: null,
  });

  const router = useRouter();

  const [rasha, setRasha] = useState("Rasha");

  useEffect(() => {
    init("user_4HqGyhsZnZWWjtA4ueQAG");
  }, []);

  function hover(x, url, bool) {
    clearTimeout(hovState.timeout);
    if (bool) {
      setHovState({
        current: x,
        hovered: true,
        timeout: setTimeout(() => window.location.assign(url), 5000),
      });
    } else {
      setHovState({
        current: "",
        hovered: false,
        timeout: null,
      });
    }
    hovState.timeout;
  }
  async function openMessage() {
    await setForm(true);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }
  const rightmd = (main, sub, link,i) =>
    useMemo(() => {
      return (
        <Link key={i} href={link}>
          <a>
            <RightModule
              router={router}
              mainText={main}
              subText={sub}
              colors={colors}
            />
          </a>
        </Link>
      );
    }, [router, main, sub]);

  const righturl = (main, sub, link) =>
    useMemo(() => {
      return link.length > 1 ? (
        <Box as="a" href={link}>
          <RightModule
            router={router}
            mainText={main}
            subText={sub}
            colors={colors}
          />
        </Box>
      ) : (
        <Box>
          <RightModule
            router={router}
            mainText={main}
            subText={sub}
            colors={colors}
          />
        </Box>
      );
    }, [router, main, sub]);

  function hov(bool) {
    if (bool) {
      setRasha("raw - shuh");
    } else {
      setRasha("Rasha");
    }
  }
  const thumbnailSize = 55;
  const [form, setForm] = useState(false);
  return (
    <Layout
      mouse={mouse}
      sta={sta}
      colors={colors}
      scroll={scroll}
      form={form}
      setForm={setForm}
      maxScroll={maxScroll}
    >
      {
        <Box
          onClick={() =>
            document
              .getElementById("header")
              .scrollIntoView({ behavior: "smooth" })
          }
          sx={{
            width: thumbnailSize,
            height: thumbnailSize,
            p: 1,
            transition: "all 300ms ease-in-out",
            opacity: 0.6,
            background: `linear-gradient(180deg,${colors.blue400},${colors.blue800})`,
            borderRadius: thumbnailSize / 2,
            position: "fixed",
            cursor: "pointer",
            zIndex: 20,
            bottom: 10,
            right: 10,
            border: `2px solid ${colors.blue800}`,
            ":hover": {
              border: `2px solid ${colors.blue400}`,
              opacity: 1,
            },
          }}
        >
          {canv(mouse, scroll)}
        </Box>
      }
 
      <Text
        id="header"
        sx={{
          fontSize: 8,
          lineHeight: "1em",
          fontWeight: "bold",
          letterSpacing: -4,
          my: 1,
          pt: 5,
          opacity: sta === "entered" ? 1 : 0,
          transform: sta === "entered" ? "translateY(0vh)" : "translateY(-5vh)",
          transition: "all 300ms ease 1300ms",
        }}
      >
        Hello, I am{" "}
        <Box
          sx={{
            display: "inline",

            letterSpacing: rasha === "Rasha" ? 1 : "40%",

            alignItems: "center",

            width: ["20em", "40em", "30em"],
          }}
        >
          <Text
            onMouseEnter={() => hov(true)}
            onMouseLeave={() => hov(false)}
            sx={{
              opacity: rasha === "Rasha" ? 1 : 0.4,
              fontSize: rasha === "Rasha" ? "inherit" : 7,
              mb: rasha === "Rasha" ? "inherit" : -20,
              display: "inline",
              ":hover": { cursor: "crosshair" },
            }}
          >
            {rasha}
          </Text>
        </Box>
      </Text>
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 400,
          color: colors.gray400,
          my: 1,
          opacity: sta === "entered" ? 1 : 0,
          transform: sta === "entered" ? "translateX(0vh)" : "translateX(-5vh)",
          transition: "all 300ms ease 1400ms",
        }}
      >
        software engineer (front end development)
      </Text>
      <Text
        maxWidth={["30em", "40em", "30em"]}
        sx={{
          fontSize: 1,
          my: 2,
          opacity: sta === "entered" ? 1 : 0,
          transform: sta === "entered" ? "translateY(0vh)" : "translateY(5vh)",
          transition: "all 300ms ease 1500ms",
        }}
      >
        I build web apps from the ground up. I explore the beauties of design
        and how to transfer them into reality. You can see all my{" "}
        <Text
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          sx={{
            color: "blue400",
            display: "inline",
            ":hover": {
              cursor: "pointer",
              color: "blue200",
              borderBottom: "1px solid black",
              fontWeight: 600,
            },
          }}
        >
          projects
        </Text>{" "}
        here and those bits recruiters wanna know about. My current tech stack
        includes
      </Text>
      <Box
        sx={{
          opacity: sta === "entered" ? 1 : 0,
          transition: "all 300ms ease 1500ms",
        }}
      >
        <WhiteBoxPadded colors={colors}>
          {[
            { text: "Next.js", link: "https://nextjs.org/" },
            { text: "Rebass", link: "https://rebassjs.org/" },
            { text: "Netlify", link: "https://www.netlify.com/" },
            { text: "Vercel", link: "https://vercel.com/" },
          ].map((x, i) => (
            <Box
              as="a"
              href={x.link}
              key={x.text}
              sx={{
                display: "inline-block",
                color: "white",
                bg: "blue200",
                px: 3,
                py: 1,
                width: ["90px"],
                textAlign: "center",
                margin: "10px auto",
                borderRadius: 9999,
                opacity: sta === "entered" ? 1 : 0,
                transform:
                  sta === "entered" ? "translateY(0vh)" : "translateY(-5vh)",
                transition: "all 300ms ease " + (i * 100 + 1500) + "ms",
                ":hover": {
                  bg: "blue400",
                },
              }}
            >
              {x.text}
            </Box>
          ))}
        </WhiteBoxPadded>
      </Box>
      <Text
        onClick={() =>
          document
            .getElementById("techscroll")
            .scrollIntoView({ behavior: "smooth" })
        }
        sx={{
          fontSize: 0,
          my: 2,
          textAlign: "right",
          opacity: sta === "entered" ? 1 : 0,
          transform: sta === "entered" ? "translateX(0vw)" : "translateX(5vw)",
          transition: "all 300ms ease 1900ms",
          ":hover": {
            fontWeight: 600,
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
      >
        Explore my full techonology list here
      </Text>
      <Text
        maxWidth={"30em"}
        sx={{
          fontSize: 1,
          my: 2,
          opacity: sta === "entered" ? 1 : 0,
          transform: sta === "entered" ? "translateX(0vw)" : "translateX(5vw)",
          transition: "all 300ms ease 2000ms",
        }}
      >
        I am currently looking for a company to fill a junior front end
        engineering role. I am also taking freelance work, so if that interests
        you,{" "}
        <Text
          onClick={() => {
            openMessage();
          }}
          sx={{
            display: "inline",
            color: colors.blue400,
            fontWeight: 600,
            cursor: "pointer",
            ":hover": { borderBottom: "1px solid black" },
          }}
        >
          you can message me here
        </Text>
      </Text>
      <Box
        sx={{
          opacity: sta === "entered" ? 1 : 0,
          transition: "all 300ms ease 2100ms",
        }}
      >
        <Text
          as="h2"
          sx={{
            mt: 4,
            mb: -1,
          }}
        >
          Experience
        </Text>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["50% 50%"],
          }}
        >
          {rightmd("freelance web dev", "2016-present", "/freelance")}
          {rightmd("verizon sales consultant", "2017-2018", "/verizon")}
        </Box>
      </Box>
      <Box>
        <Text
          as="h2"
          sx={{
            mt: 4,
            mb: -1,
          }}
        >
          Education
        </Text>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["50% 50%"],
          }}
        >
          {righturl(
            "university of california, ucla",
            "2018-2020",
            "https://www.psych.ucla.edu/undergraduate"
          )}
          {righturl(
            "long beach city college",
            "2016-2018",
            "https://www.lbcc.edu/honors-program"
          )}
        </Box>
      </Box>
      <Box>
        <Text
          id={"projects"}
          as="h2"
          sx={{
            mt: 4,
            mb: -1,
          }}
        >
          Projects
        </Text>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["50% 50%"],
          }}
        >
          {[
            {
              main: "Spotify Random New Music Finder",
              sub: "spotify-random.vercel.app",
            },
            {
              main: "3D Visualized Keyboard Chord Progression Utility",
              sub: "orbmusic.club",
            },
            {
              main: "Decision Maker - Randomized Algorithm",
              sub: "choices.vercel.app",
            },
            {
              main: "Online Gaming Mouse Accuracy Practice Tool",
              sub: "practice-point.vercel.app",
            },
            { main: "My Sophomore EP Release Website", sub: "20byrasha.xyz" },
            {
              main: "Javascript Event Key Finder",
              sub: "js-keys.vercel.app",
            },
          ].map((x, i) =>
            i !== 4 ? (
              righturl(x.main, x.sub, `https://www.${x.sub}`)
            ) : (
              <Box>{righturl(x.main, x.sub, `https://www.${x.sub}`)}</Box>
            )
          )}
        </Box>
      </Box>
      <Box sx={{}}>
        <Box>
          <Box>
            <Text
              id="techscroll"
              as="h2"
              sx={{
                mt: 4,
                mb: -1,
              }}
            >
              Technologies
            </Text>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: ["50% 50%"],
              }}
            >
              {[
                {
                  main: "Next.js, Rebass, Theme-UI, Three.JS, Axios",
                  sub: "Javascript",
                },
                { main: "Bukkit", sub: "Java" },
                {
                  main:
                    "Photoshop, Illustrator, Pixelmator, After Effects, Adobe Premiere Pro",
                  sub: "Media Processing",
                },
                {
                  main: "Figma, Adobe XD, Pencil, & Paper",
                  sub: "Design/Prototype",
                },
                {
                  main: "Ableton, FL Studio, Logic, Waves, Arturia Analog Lab",
                  sub: "Audio",
                },
              ].map((x, i) => rightmd(x.main, x.sub, `/`,i))}
            </Box>
          </Box>
          <Text
            sx={{
              fontSize: 3,
              fontWeight: 700,
              mt: 4,
            }}
          >
            Cannot find what you are looking for?
          </Text>
          <Text
            sx={{
              width: ["22rem"],
              color: "blue200",
              fontStyle: "italic",
            }}
          >
            Shoot, well here are some more resources of mine including an
            updated version of my resume as a pdf on top!
          </Text>
          <Box as="ul">
            {[
              {
                text: "Resume (does not include Verizon for space reasons)",
                url:
                  "https://github.com/rasha-rahman123/Portfolio-Website-Rasha/blob/master/rasha%20rahman%20resume%20freelance.pdf",
              },
              {
                text: "Spotify Music Page",
                url:
                  "https://artists.spotify.com/c/artist/6hfIPrPqolRFv5rVAGkyQp/home",
              },
              {
                text: "Body Image Case Study Article",
                url:
                  "https://medium.com/@kinghumorgame/body-satisfaction-through-the-lens-of-perceived-realism-education-artistic-exhibition-d911522869d9",
              },
              {
                text: "Black Lives Matter Donation",
                url: "https://secure.actblue.com/donate/ms_blm_homepage_2019",
              },
              {
                text: "Center for Humane Technology",
                url: "https://www.humanetech.com/",
              },
            ].map((x, i) => (
              <Text
                key={i}
                onMouseEnter={() => hover(x.text, x.url, true)}
                onMouseLeave={() => hover(x.text, x.url, false)}
                onClick={() => window.location.assign(x.url)}
                as="li"
                sx={{
                  fontSize: 1,
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {x.text}
                <Box
                  sx={{
                    position: "absolute",
                    width:
                      hovState.hovered && hovState.current === x.text
                        ? "100%"
                        : "0%",
                    height: "100%",
                    backgroundColor: "blue900",
                    left: 0,
                    top: 0,
                    opacity: 0.8,
                    transition:
                      hovState.hovered &&
                      hovState.current === x.text &&
                      "all 5000ms linear",
                  }}
                ></Box>
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
