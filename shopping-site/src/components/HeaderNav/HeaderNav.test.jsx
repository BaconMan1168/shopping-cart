import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("HeaderNav component", () => {
    it("renders HeaderNav exists in the DOM", () => {
        render(<HeaderNav />);
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    })
})