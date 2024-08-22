const hexagonsConfig = {
    autoPlay: true,
    background: {
        color: {
            value: "#000"
        },
    },
    fullScreen: {
        enable: true,
        zIndex: -1 // Garante que as partículas fiquem atrás dos outros elementos
    },
    fpsLimit: 120,
    detectRetina: true,
    particles: {
        number: {
            value: 0, // Inicia sem partículas, elas serão emitidas pelo emitter
            density: {
                enable: false
            }
        },
        color: {
            value: "#FF0000"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1
        },
        size: {
            value: 3
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "destroy"
            },
            trail: {
                enable: true,
                length: 15, // Controla o comprimento do rastro
                fill: {
                    color: {
                        value: "#00020b" // Faz o rastro desaparecer ao longo do tempo
                    }
                }
            },
            path: {
                enable: true,
                generator: "polygonPathGenerator",
                options: {
                    sides: 6, // Define o número de lados para formar hexágonos
                    turnSteps: 30,
                    angle: 30
                }
            }
        }
    },
    emitters: [
        {
            position: {
                x: 15,
                y: 50
            },
            rate: {
                quantity: 1, // Quantidade de partículas emitidas
                delay: 0.25 // Intervalo de tempo entre as emissões
            }
        },
        {
            position: {
                x: 90,
                y: 50
            },
            rate: {
                quantity: 1, // Quantidade de partículas emitidas
                delay: 0.25 // Intervalo de tempo entre as emissões
            }
        }
    ]
};

export default hexagonsConfig;
