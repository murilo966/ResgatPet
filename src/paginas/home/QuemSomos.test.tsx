import QuemSomos from './QuemSomos';
import {render, screen} from '@testing-library/react';


import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

it ('testar a existencia de h2',() => {

    const{container} = render(
        <MemoryRouter>
            <QuemSomos />
        </MemoryRouter>
    );


    let existeH2 = container.getElementsByTagName('h2')[2];
    expect(existeH2).toBeInTheDocument();
})
export{}