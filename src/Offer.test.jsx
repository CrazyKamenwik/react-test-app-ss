import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Offer from "./Offer";

describe("Offer", () => {
  const offerTitle = "Offer title";
  const offerBody = "Offer body";

  test("should render title, description and button", () => {
    const { container } = render(
      <Offer
        backgroundImage={null}
        offerBody={offerBody}
        offerTitle={offerTitle}
      />
    );

    const title = screen.getByText("Offer body");
    const description = screen.getByText("Offer title");
    const button = within(container).getByText("Learn more");

    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(button).toBeVisible();
  });

  test("should open modal on Learn more button click", () => {
    const { container } = render(
      <Offer
        backgroundImage={null}
        offerBody={offerBody}
        offerTitle={offerTitle}
      />
    );

    const button = within(container).getByText("Learn more");

    expect(button).toBeVisible();

    userEvent.click(button);

    const modalTitle = screen.getAllByText(offerTitle)[1];
    const modalDescription = screen.getAllByText(offerBody)[1];
    const closeButton = screen.getByText("Got it!");

    expect(modalTitle).toBeVisible();
    expect(modalDescription).toBeVisible();
    expect(closeButton).toBeVisible();
  });

  test("should close modal when Got it! button is clicked", () => {
    const { container } = render(
      <Offer
        backgroundImage={null}
        offerBody={offerBody}
        offerTitle={offerTitle}
      />
    );

    const button = within(container).getByText("Learn more");

    expect(button).toBeVisible();

    userEvent.click(button);

    const modalTitle = screen.getAllByText(offerTitle)[1];
    const closeButton = screen.getByText("Got it!");

    expect(modalTitle).toBeVisible();
    expect(closeButton).toBeVisible();

    userEvent.click(closeButton);

    expect(modalTitle).not.toBeVisible();
  });

  test("should close modal when user clicks outside of the modal window", () => {
    const { container } = render(
      <Offer
        backgroundImage={null}
        offerBody={offerBody}
        offerTitle={offerTitle}
      />
    );

    const button = within(container).getByText("Learn more");

    expect(button).toBeVisible();

    userEvent.click(button);

    const modalTitle = screen.getAllByText(offerTitle)[1];

    expect(modalTitle).toBeVisible();

    const overlay = document.getElementsByClassName("modal__overlay")[0];

    userEvent.click(overlay);

    expect(modalTitle).not.toBeVisible();
  });
});
