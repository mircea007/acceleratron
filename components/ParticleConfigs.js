const bgcol = "#111"
const fgcol_hero = "#999"
const fgcol_download = "#00f0dd"

const networkParticleConfig = {
  "background": {
    "color": { "value": bgcol },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "enable": false,
    "zIndex": -1
  },
  "particles": {
    "links": {
      "distance": 150,
      "enable": true,
      "color": { "value": fgcol_hero }
    },
    "move": {
      "enable": true
    },
    "size": {
      "value": 1
    },
    "color": { "value": fgcol_hero }
  }
}
const snowParticleConfig = {
  "background": {
    "color": { "value": bgcol },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "enable": false,
    "zIndex": -1
  },
  "particles": {
    "color": { "value": fgcol_download },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "direction": "top",
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 400
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.1
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 1,
        "max": 4
      },
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    }
  }
}
const hexagonParticleConfig = {
  "fpsLimit": 60,
  "fullScreen": {
    "enable": false,
    "zIndex": -1
  },
  "particles": {
    "color": {
      "value": "#FF0000",
      "animation": {
        "enable": true,
        "speed": 10
      }
    },
    "move": {
      "attract": {
        "enable": true,
        "rotate": {
          "distance": 100,
          "x": 2000,
          "y": 2000
        }
      },
      "direction": "none",
      "enable": true,
      "outModes": {
        "default": "destroy"
      },
      "path": {
        "clamp": false,
        "enable": true,
        "delay": {
          "value": 0
        },
        "generator": "polygonPathGenerator",
        "options": {
          "sides": 6,
          "turnSteps": 30,
          "angle": 30
        }
      },
      "random": false,
      "speed": 1,
      "straight": false,
      "trail": {
        "fillColor": "#000",
        "length": 20,
        "enable": true
      }
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800
      },
      "value": 0
    },
    "opacity": {
      "value": 1
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "value": 2
    }
  },
  "background": {
    "color": "#000"
  },
  "detectRetina": true,
  "emitters": {
    "direction": "none",
    "rate": {
      "quantity": 1,
      "delay": 0.25
    },
    "size": {
      "width": 0,
      "height": 0
    },
    "position": {
      "x": 50,
      "y": 50
    }
  }
}

export { networkParticleConfig, snowParticleConfig, hexagonParticleConfig }
