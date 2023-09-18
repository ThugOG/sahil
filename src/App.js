import Main from "./components/Main";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import LiveComponent from "./components/LiveComponent";
import { motion, useScroll  } from "framer-motion";
const App = () => {
    const {scrollYProgress} = useScroll()
    return (
        <div>
            <motion.div className="progress-bar" style={{scaleX: scrollYProgress}}></motion.div>
            <Main />
            <Background />
            <Skills />
            <Projects />
            <LiveComponent />
            <Footer />
        </div>
    )
}
export default App;