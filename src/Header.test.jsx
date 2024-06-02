import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

const setScreenWidth = (width) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("Header", () => {
  test("should render burger button when screen width is equal or less than 360px", () => {
    setScreenWidth(360);

    render(<Header />);

    const burgerButton = screen.getByRole("button", { name: "Open menu" });
    expect(burgerButton).toBeVisible();
  });

  test("should render the menu when burger button is clicked", () => {
    setScreenWidth(360);

    render(<Header />);

    const burgerButton = screen.getByRole("button", { name: "Open menu" });
    expect(burgerButton).toBeVisible();

    userEvent.click(burgerButton);

    expect(screen.getByText("Contact us")).toBeVisible();
  });

  test("should close menu when close button is clicked", async () => {
    setScreenWidth(360);

    render(<Header />);

    const burgerButton = screen.getByRole("button", { name: "Open menu" });
    expect(burgerButton).toBeVisible();

    userEvent.click(burgerButton);

    const burgerMenu = document.getElementsByClassName(
      "header__burger-menu"
    )[0];

    expect(burgerMenu).toHaveClass("header__burger-menu--open");

    const closeButton = screen.getByRole("button", { name: "Close menu" });

    userEvent.click(closeButton);

    expect(burgerMenu).not.toHaveClass("header__burger-menu--open");
  });

  test("should not render burger button when screen width is greater than 360px", () => {
    setScreenWidth(361);

    render(<Header />);

    const burgerButton = screen.queryByRole("button", { name: "Open menu" });
    expect(burgerButton).not.toBeInTheDocument();
  });

  test("should render links when screen width is greater than 360px", () => {
    setScreenWidth(361);

    render(<Header />);

    const homeLink = screen.getByText("Home");
    const productsLink = screen.getByText("Products");
    const basketLink = screen.getByRole("link", { name: "Basket" });

    expect(homeLink).toBeVisible();
    expect(productsLink).toBeVisible();
    expect(basketLink).toBeVisible();
  });
});
