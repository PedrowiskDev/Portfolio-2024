const particlesConfig = {
    "background": {
      "color": ""
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "push": {
          "quantity": 4
        },
        "repulse": {
          "distance": 150,
          "duration": 0.4
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff"
      },
      "links": {
        "color": "#ffffff",
        "distance": 150,
        "enable": true,
        "opacity": 0.5,
        "width": 1
      },
      "collisions": {
        "enable": true
      },
      "move": {
        "direction": "none",
        "enable": true,
        "outModes": {
          "default": "bounce"
        },
        "random": false,
        "speed": 2, // define a velocidade
        "straight": false
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 80
      },
      "opacity": {
        "value": 0.5
      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "random": true,
        "value": 2 // define o tamanho
      }
    }
  }
  

export default particlesConfig;
