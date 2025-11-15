import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CursorGlow from "./CursorGlow";
import HeroParticles from "./HeroParticles";

export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#0a0f18] text-[#e2e8f0] flex items-center justify-center">

            {/* Cursor Glow Background */}
            <CursorGlow />
            <HeroParticles />
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="p-10 rounded-2xl backdrop-blur-lg bg-white/5 border border-[#00e5ff24] shadow-[0_0_30px_#00e5ff40]"
            >
                <div className="text-center max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold mb-4 text-[#00e5ff] drop-shadow-[0_0_10px_#00e5ff]"
                    >
                        Hi, I'm Billal
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-lg text-[#e2e8f0cd]"
                    >
                        Crafting Futuristic Web Experiences • Backend & AI Developer
                    </motion.p>
                </div>
            </Tilt>
        </div>
    );
}
