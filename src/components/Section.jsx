import React from 'react';
import Entradas from './Entradas';
import Peixe from './Peixe';
import Carne from './Carne';
import Kids from './Kids';
import Vinhos from './Vinhos';
import Saladas from './Saladas';

function Section(props) {
    if (props.section == "Entradas") {
        return <Entradas />
    } else if (props.section == "Peixe") {
        return <Peixe />
    } else if (props.section == "Kids") {
        return <Kids />
    } else if (props.section == "Carne") {
        return <Carne />
    } else if (props.section == "Vinhos") {
        return <Vinhos />
    } else if (props.section == "Saladas") {
        return <Saladas />
    }
}

export default Section;