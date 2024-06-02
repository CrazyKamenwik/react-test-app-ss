import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Banner from "./Banner";

describe("Banner", () => {
  test("should render title, description and button", () => {
    const { container } = render(<Banner />);

    const title = screen.getByText(/Discover the vast expanses of/);
    const description = screen.getByText(/Where the possibilities are/);
    const button = within(container).getByText("Learn more");

    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(button).toBeVisible();
  });

  test("should open modal on Learn more button click", () => {
    const { container } = render(<Banner />);

    const button = within(container).getByText("Learn more");

    expect(button).toBeVisible();

    userEvent.click(button);

    const modalTitle = screen.getByText(
      "Discover the vast expanses of space WITH US!"
    );
    const modalDescription = screen.getByText(
      "Let's explore space together! Join our space mission to Mars, Venus and Neptune! 👨‍🚀 👩‍🚀 🚀 👾"
    );

    expect(modalTitle).toBeVisible();
    expect(modalDescription).toBeVisible();
  });

  test("should close modal when Got it! button is clicked", () => {
    const { container } = render(<Banner />);

    const button = within(container).getByText("Learn more");

    expect(button).toBeVisible();

    userEvent.click(button);

    const modal = within(container).getByText(
      "Discover the vast expanses of space WITH US!"
    );

    expect(modal).toBeVisible();

    const closeButton = screen.getByText("Got it!");

    userEvent.click(closeButton);

    expect(modal).not.toBeVisible();
  });

  test("should close modal when user clicks outside of the modal window", () => {
    const { container } = render(<Banner />);

    const button = within(container).getByText("Learn more");

    expect(button).toBeVisible();

    userEvent.click(button);

    const modalTitle = screen.getByText(
      "Discover the vast expanses of space WITH US!"
    );

    expect(modalTitle).toBeVisible();

    const overlay = document.querySelector(".modal__overlay");

    userEvent.click(overlay);

    expect(modalTitle).not.toBeVisible();
  });
});
