"use client"
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        background: {
          color: {
            value: "transparent"
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100
            }
          }
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: 3
          },
          move: {
            enable: true,
            speed: 1,
            parallax: {
              enable: true,
              force: 60,
              smooth: 10
            }
          }
        }
      }}
    />
  );
}
