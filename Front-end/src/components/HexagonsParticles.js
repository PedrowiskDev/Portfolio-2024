import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadPolygonPath } from "@tsparticles/path-polygon";
import hexagonsConfig from "./config/hexagons-config";


const HexagonsParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      await loadPolygonPath(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Particles id="tsparticles" options={hexagonsConfig} />
  );
};

export default HexagonsParticles;
