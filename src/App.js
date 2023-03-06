import Main from "./components/Main";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import LiveComponent from "./components/LiveComponent";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import land from "./utils/images/land.png"
const App = () => {
  return (
    <div>
      <Parallax pages={5.15}>
      <ParallaxLayer
          sticky={{ start: 0, end: 5.5 }}
          style={{ display:"flex", justifyContent: "end",textAlign: 'center', opacity:"0.6"}}
        >
          <img src="https://raw.githubusercontent.com/fireship-io/skydiving-cat-parallax/main/src/cat.gif" />
        </ParallaxLayer>
        {/* main */}
        <ParallaxLayer speed={1}>
          <Main />
        </ParallaxLayer>
        {/* background */}
        <ParallaxLayer offset={1} speed={0.5}>
          <Background />
        </ParallaxLayer >
        {/* skills */}
        <ParallaxLayer offset={2} speed={0.5}>
          <Skills />
        </ParallaxLayer>
        {/* projects */}
        <ParallaxLayer offset={3} speed={0.5}>
          <Projects />
        </ParallaxLayer>
        {/* live  */}
        <ParallaxLayer offset={4} >
          <LiveComponent />
        </ParallaxLayer>
        {/* footer */}
        <ParallaxLayer offset={5} >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default App;
