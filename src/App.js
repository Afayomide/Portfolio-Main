// import { useState, useRef } from "react";
// import { FaPlay, FaPause } from "react-icons/fa";
// import music from "./components/images/fav-song.mp3";
// import Header from "./components/header/header";
// import Projects from "./components/Projects/projects";
// import Preloader from "./components/preloader/preloader";
// import Contact from "./components/contact/contact";
// import Footer from "./components/footer/footer";
// import Skills from "./components/skills/skills";
// import CustomCursor from "./components/cursor/customCursor";
// import Experience from "./components/experience/experience";
// import Education from "./components/education/education";
// import { Toaster, toast } from "react-hot-toast";
// import SideBar from "./components/sidebar/sideBar";

// function AnimatedBackground() {
//   const canvasRef = useRef(null);

//   useRef(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let animationId;
//     let particles = [];
//     let time = 0;

//     for (let i = 0; i < 50; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         radius: Math.random() * 2 + 1,
//         opacity: Math.random() * 0.5 + 0.2,
//       });
//     }

//     const animate = () => {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       time += 0.005;

//       particles.forEach((p, i) => {
//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x < 0) p.x = canvas.width;
//         if (p.x > canvas.width) p.x = 0;
//         if (p.y < 0) p.y = canvas.height;
//         if (p.y > canvas.height) p.y = 0;

//         const glow = Math.sin(time * 2 + i) * 0.3 + 0.7;
//         ctx.fillStyle = `rgba(255, 215, 159, ${p.opacity * glow * 0.6})`;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fill();

//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j];
//           const dx = p.x - p2.x;
//           const dy = p.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             ctx.strokeStyle = `rgba(170, 170, 170, ${
//               0.2 * (1 - distance / 150)
//             })`;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         }
//       });

//       ctx.save();
//       ctx.globalAlpha = 0.1;

//       for (let i = 0; i < 3; i++) {
//         const angle = time + (i * Math.PI * 2) / 3;
//         const x = canvas.width / 2 + Math.cos(angle) * 200;
//         const y = canvas.height / 2 + Math.sin(angle) * 200;

//         ctx.strokeStyle = "#ffd79f";
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         ctx.arc(x, y, 50, 0, Math.PI * 2);
//         ctx.stroke();
//       }

//       ctx.restore();

//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 1,
//         pointerEvents: "none",
//       }}
//     />
//   );
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const togglePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//         toast("Paused!", { icon: "⏸️" });
//       } else {
//         audioRef.current.play();
//         toast("Playing Experience by Ludovico Einaudi", { icon: "▶️" });
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
//       <CustomCursor />

//       <AnimatedBackground />

//       <div
//         style={{
//           position: "relative",
//           zIndex: 10,
//           backgroundColor: "rgba(0, 0, 0, 0.85)",
//           backdropFilter: "blur(8px)",
//           color: "#fff",
//           fontFamily: '"Poppins", sans-serif',
//           overflowX: "hidden",
//           scrollBehavior: "smooth",
//         }}
//       >
//         <Toaster
//           position="top-center"
//           reverseOrder={false}
//           gutter={8}
//           toastOptions={{
//             duration: 5000,
//             style: {
//               background: "#ffd79f",
//               color: "#000",
//             },
//           }}
//         />

//         {/* Music Player */}
//         <div
//           style={{
//             position: "fixed",
//             bottom: "2vh",
//             left: "1rem",
//             zIndex: 100,
//             cursor: "pointer",
//             fontSize: "1.5rem",
//             color: "#ffd79f",
//             transition: "transform 0.2s",
//           }}
//           onClick={togglePlayPause}
//           onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
//           onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//         >
//           <audio ref={audioRef} src={music} />
//           {isPlaying ? <FaPause /> : <FaPlay />}
//         </div>

//         <Preloader />
//         <SideBar />
//         <Header />
//         <div className="contents">
//           <Skills />
//           <Experience />
//           <Education />
//           <Projects />
//           <Contact />
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";
import music from "./components/images/fav-song.mp3";
import Header from "./components/header/header";
import Projects from "./components/Projects/projects";
import Preloader from "./components/preloader/preloader";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Skills from "./components/skills/skills";
import CustomCursor from "./components/cursor/customCursor";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { Toaster, toast } from "react-hot-toast";
import SideBar from "./components/sidebar/sideBar";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        toast("Paused!", { icon: "⏸️" }); // Display toast on pause
      } else {
        audioRef.current.play();
        toast("Playing Experience by Ludovico Einaudi", { icon: "▶️" }); // Display toast on play
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="App">
      <div className="background-space">
        {/* Big glowing orbs */}
        <div className="glow-orb"></div>
        <div className="glow-orb"></div>
        <div className="glow-orb"></div>

        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
      <CustomCursor />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#ffd79f",
            color: "#00000",
          },
        }}
      />

      <div className="elements">
        <Preloader />
        <SideBar />
        <Header />
        <div className="contents">
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
        <div className="sound">
          <audio ref={audioRef} src={music} />
          <div className="playmusic" onClick={togglePlayPause}>
            {isPlaying ? (
              <FaPause className="playmusic" />
            ) : (
              <FaPlay className="playmusic" />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
