import { Box, Image, Text } from "rebass";
import { Suspense, useMemo, useState } from "react";
import { Canvas } from "react-three-fiber";
import styles from "../styles/Home.module.css";
import{ send } from 'emailjs-com';
import {
  FaGithubSquare,
  FaLinkedin,
  FaMailBulk,
  faSquareTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import Rasha, { Loading } from "./Rasha.js";
import ArWing from "./Model";
import RoRasha from "./robotRasha";
import { colors } from "../pages/_app";
function Plane({ props }) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry args={[500, 500, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  );
}
const inputer = (value, change) => (
  <Box
  id="leftModule"
    as="input"
    required
    sx={{
      background: "none",
      border: "none",
      backgroundColor: "gray900",
      px: 2,
      borderRadius: 3,
      boxShadow: "inset 0 -2px 0 #FFFFFF10,inset 2px 2px 0 #00000015",
      mb: 2,
      color: "gray200",
      minHeight: 30,
     ":focus":{
       outline: 'none',
       border: '1px solid ' + colors.gray100
     }
    }}
    value={value}
    onChange={(e) => change(e.target.value)}
  />
);
export const canv = (mouse, d = 4, scroll) => (
  <Canvas
    sx={{
      transform: "scale(1.1)",
    }}
    style={{
      width: "94%",
      margin: "0 auto",
    }}
    shadowMap
    pixelRatio={[1, 1.5]}
    camera={{ position: [-11, 24.2, 135] }}
  >
    <hemisphereLight
      skyColor={"blue"}
      groundColor={0xffffff}
      intensity={0.5}
      position={[0, 50, 0]}
    />
    <directionalLight
      position={[-8, 20, 10]}
      shadow-camera-left={d * -1}
      shadow-camera-bottom={d * -1}
      shadow-camera-right={d}
      shadow-camera-top={d}
      shadow-camera-near={0.1}
      shadow-camera-far={1500}
      castShadow
    />
    <Suspense fallback={<Loading />}>
      <Rasha mouse={mouse} scroll={scroll} />
    </Suspense>
  </Canvas>
);

export const LeftSquare = ({ colors, mouse, scroll, form, setForm }) => {
  const [name, setName] = useState("");
  const [email, setEMail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) =>{
    e.preventDefault();
    send('service_0x434w9', 'template_prlbetk', {name: name, email: email, msg: message})
    .then(function(response) {
       setName("");
       setEMail("");
       setMessage("Message Sent Succesfully.");
      setTimeout(() => setMessage(''), 2000)
      setTimeout(() => setForm(false), 2000)
      
    }, function(error) {
      alert('Something went wrong. Could not send.')
    });
    return true;
  }
  return (
    <Box
      className={styles.floater}
      sx={{
        width: 350,
        height: 500,
        margin: "0 auto",
        backgroundColor: colors.gray200,
        borderRadius: 51,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        boxShadow:
          "inset 0px 5px 0px " +
          colors.gray400 +
          ", 0px 5px 3px " +
          "#00000020, 0px 4px 6px #00000070, 0 5px 15px #00000010",
      }}
    >
      <Box
        className={styles.boxAnimated}
        sx={{
          width: "70%",
          height: "90%",
          background: `linear-gradient(45deg,#EDEDED,#2F5B85,#2D72AF)`,
          borderRadius: 51,
          position: "relative",
          backgroundSize: "300% 300%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 6px #00000070, 0 5px 15px #00000010",
        }}
      >
        <Box
          className={styles.boxAnimated}
          sx={{
            width: "98%",
            height: "98%",
            backgroundColor: colors.gray200,
            borderRadius: 51,
            backgroundSize: "300% 300%",
            position: "absolute",
            margin: "auto auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className={styles.boxAnimated}
            sx={{
              width: "97%",
              height: "98%",

              background: `linear-gradient(45deg,#EDEDED,#2F5B85,#2D72AF)`,
              borderRadius: 51,
              position: "relative",
              backgroundSize: "300% 300%",
              position: "absolute",
              margin: "auto auto",
            }}
          ></Box>
        </Box>
        {canv(mouse)}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          borderBottomRightRadius: 51,
          borderBottomLeftRadius: 51,
          background: colors.blue300,
          zIndex: 3,
          boxShadow:
            "0px 5px 0px " +
            colors.blue400 +
            ",inset 0px 30px 30px " +
            colors.gray200,
          p: 20,
          borderRadius: 51
        }}
      >
        <Text
          sx={{
            fontSize: 3,
            fontWeight: 600,
            color: colors.blue700,
            letterSpacing: 0,
            marginTop: 3,
          }}
        >
          Rasha Rahman (he/him)
        </Text>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "10px auto",
          }}
        >
          {[
            {
              link: "https://twitter.com/raaahhh_sha",
              text: "twitter",
              icon: <FaTwitterSquare />,
            },
            {
              link: "https://github.com/rasha-rahman123",
              text: "github",
              icon: <FaGithubSquare />,
            },
            {
              link: "https://www.linkedin.com/in/rasha-rahman-ab2624123/",
              text: "linkedln",
              icon: <FaLinkedin />,
            },
            {
              link: "mailto:rasha.r.rahman@gmail.com",
              text: "email",
              icon: <FaMailBulk />,
            },
          ].map((x, i) => (
            <Text
              as="a"
              href={i === 3 ? typeof form === 'undefined' && x.link : x.link}
              key={i}
              onClick={() => i === 3 && typeof form !== 'undefined' && setForm(!form)}
              sx={{
                fontSize: 7,
                color: form && i === 3 ? "blue900" : "blue600",
                mx: 2,
                ":hover": {
                  color: form && i === 3 ? "blue800" : "blue900",
                  cursor: "pointer",
                },
              }}
            >
              {x.icon}
            </Text>
          ))}
        </Box>
        {
          <Box
            as="form"
            onSubmit={(e) => submitForm(e)}
            sx={{
              display: form ? "flex" : "none",
              transition: "display 300ms ease 1s",
              flexDirection: "column",
              alignText: "left",
              justifyContent: "center",
            }}
          >
            <Text color="blue900" as="label">
              Name{" "}
            </Text>
            {inputer(name, setName)}
            <Text color="blue900" as="label">
              E-Mail{" "}
            </Text>
            {inputer(email, setEMail)}
            <Text color="blue900" as="label">
              Message{" "}
            </Text>
            {/* {inputer(message,setMessage)} */}
            <Box
              as="textarea"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                background: "none",
                border: "none",
                background: colors.gray900,
                p: 2,
                borderRadius: 3,
                boxShadow: "inset 0 -2px 0 #FFFFFF10,inset 2px 2px 0 #00000015",
                mb: 2,
                color: "gray300",
                minHeight: "124px",
                width: "100%",
                resize: 'none',
                fontFamily: 'Inter',
                position: 'relative',
                ":focus":{
                  outline: 'none',
                  border: '1px solid ' + colors.gray100
                }
              }}
            />
            <Box as="button" type="submit" sx={{
              width: 100,
              minHeight: 50,
              margin: '10px auto',            
              p: 2,
              borderRadius: 10,
              cursor: 'pointer',
              backgroundColor: 'blue400',
              border: 'none',color: 'blue900',
              boxShadow: 'inset 0 2px 0 ' + colors.blue800 + ', 0 2px 3px #00000025',
              ":hover": {
                color: "blue200",
                backgroundColor: 'blue800',
              },
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'center'
            }}><Text sx={{ fontSize: 3, fontWeight: 600}}>Send</Text></Box>
          </Box>
        }
      </Box>
    </Box>
  );
};

export default LeftSquare;
