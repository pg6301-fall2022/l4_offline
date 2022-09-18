import * as React from "react";
import * as ReactDOM from "react-dom";

import { ListMovies, NewMovieForm } from "../application";
import { Simulate } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";

describe("movies application", () => {
  it("shows movie list", () => {
    const element = document.createElement("div");

    ReactDOM.render(<ListMovies movies={["Movie 1", "Movie 2"]} />, element);

    expect(element.querySelector("h1")?.innerHTML).toEqual("List Movies");
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows new movie form", () => {
    const element = document.createElement("div");
    const root = createRoot(element);
    root.render(<NewMovieForm onAddMovie={jest.fn()} />);
    //ReactDOM.render(<NewMovieForm onAddMovie={jest.fn()}/>, element);
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("submit new movie", () => {
    const onAddMovie = jest.fn(); // Mock function
    // onSubmit requires this function. It is normally passed when NewMovieForm is called.
    // For testing purposes, we need to know if that function was called
    // we shall do that with expect(onAddMovie).toHaveBeenCalled()

    const element = document.createElement("div");
    ReactDOM.render(<NewMovieForm onAddMovie={onAddMovie} />, element); // render the form

    Simulate.change(
      // find the element we wish to change, based on its data-testid
      // in this case data-testid = title
      element.querySelector("[data-testid=title]")!,
      { target: { value: "Movie 1" } } as any
    );

    Simulate.change(
      // find the element we wish to change, based on its data-testid
      // in this case data-testid = year
      element.querySelector("[data-testid=year]")!,
      { target: { value: "2022" } } as any
    );

    Simulate.submit(element.querySelector("form")!);

    expect(onAddMovie).toHaveBeenCalledWith({
      title: "Movie 1",
      year: "2022",
      plot: "",
    });
  });
});
