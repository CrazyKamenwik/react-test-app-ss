import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OffersSection from "./OffersSection";
import userEvent from "@testing-library/user-event";

describe("OffersSections", () => {
  test("should render offers", () => {
    render(<OffersSection />);

    const firstOffer = screen.getByText("Move the borders of reality!");
    const secondOffer = screen.getByText("Space is not just stars and planets");
    const thirdOffer = screen.getByText("For those who dream of stars");
    const fourthOffer = screen.getByText("Fulfill your fantastic dreams");

    expect(firstOffer).toBeVisible();
    expect(secondOffer).toBeVisible();
    expect(thirdOffer).toBeVisible();
    expect(fourthOffer).toBeVisible();
  });

  test("should render company description", () => {
    render(<OffersSection />);
    const companyDescription = screen.getByText("Embark on a space journey");
    expect(companyDescription).toBeVisible();
  });

  test("should open modal when Read more button is clicked", () => {
    render(<OffersSection />);

    const readMore = screen.getByText("Read more");

    userEvent.click(readMore);

    const modal = screen.getByText("MAKING LIFE MULTIPLANETARY");
    expect(modal).toBeVisible();
  });

  test("should close modal when Got it! button is clicked", () => {
    render(<OffersSection />);

    const readMore = screen.getByText("Read more");

    userEvent.click(readMore);

    const modal = screen.getByText("MAKING LIFE MULTIPLANETARY");

    expect(modal).toBeVisible();

    const closeButton = screen.getByText("Got it!");

    userEvent.click(closeButton);

    expect(modal).not.toBeVisible();
  });

  test("should close modal when user clicks outside of the modal window", () => {
    render(<OffersSection />);

    const readMore = screen.getByText("Read more");

    userEvent.click(readMore);

    const modal = screen.getByText("MAKING LIFE MULTIPLANETARY");
    expect(modal).toBeVisible();

    const overlay = document.getElementsByClassName("modal__overlay")[0];

    userEvent.click(overlay);

    expect(modal).not.toBeVisible();
  });
});
