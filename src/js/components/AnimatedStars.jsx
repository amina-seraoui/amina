import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const AnimatedStars = () => {
    const particlesInit = async (main) => {
        // console.log(main)
        await loadFull(main)
    }
    const particlesLoaded = (container) => {
        container.canvas.element.style.position = 'absolute'
        // console.log(container)
    }

    return <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        className="animated-stars"
        options={{
            "position": "absolute",
            "fullScreen": {
                "zIndex": 1
            },
            "interactivity": {
                "events": {
                    "onHover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onClick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 200,
                        "duration": 2,
                        "opacity": 0,
                        "size": 10,
                        "divs": {
                            "distance": 150,
                            "duration": 0.4,
                            "mix": false,
                            "selectors": [],
                            speed: 50
                        }
                    },
                    "grab": {
                        "distance": 400
                    },
                    "repulse": {
                        "distance": 200,
                        "divs": {
                            "distance": 200,
                            "duration": 0.4,
                            "factor": 100,
                            "speed": 1,
                            "maxSpeed": 50,
                            "easing": "ease-out-quad",
                            "selectors": []
                        }
                    }
                }
            },
            "particles": {
                "color": {
                    "value": "#ffffff"
                },
                "links": {
                    "color": {
                        "value": "#ffffff"
                    },
                    "distance": 150,
                    "opacity": 0.4
                },
                "move": {
                    "attract": {
                        "rotate": {
                            "x": 600,
                            "y": 600
                        }
                    },
                    "enable": true,
                    "outModes": {
                        "bottom": "out",
                        "left": "out",
                        "right": "out",
                        "top": "out"
                    },
                    "random": true,
                    "speed": 4
                },
                "number": {
                    "density": {
                        "enable": true
                    },
                    "value": 30
                },
                "opacity": {
                    "random": {
                        "enable": true
                    },
                    "value": {
                        "min": 0,
                        "max": 1
                    },
                    "animation": {
                        "enable": true,
                        "speed": 1,
                        "minimumValue": 0
                    }
                },
                "size": {
                    "random": {
                        "enable": true
                    },
                    "value": {
                        "min": 1,
                        "max": 3
                    },
                    "animation": {
                        "speed": 4,
                        "minimumValue": 0.3
                    }
                }
            }
        }}
    />
}

export default AnimatedStars
