import * as React from "react";
import * as ReactDOM from "react-dom";

import {ListMovies} from "../application";

describe ("movies application", () => {
    it("shows movie list", () => {
        const element = document.createElement("div");
        ReactDOM.render(<ListMovies/>, element);
        expect(element.querySelector("h1").innerHTML)
            .toEqual("List Movies");
        expect(element.innerHTML).toMatchSnapshot();
    })
    })