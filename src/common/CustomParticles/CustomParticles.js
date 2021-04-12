import React from 'react'
import { Particles } from 'react-particles-js';

import Params from './particles.json';

export default function CustomParticles({modificator}) {
    return (
        <Particles params={Params} className={"particles particles--" + modificator} />
    )
}
