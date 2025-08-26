import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/vitest'
import HeaderNav from "./HeaderNav.jsx"

describe("HeaderNav component", () => {
    it("renders HeaderNav exists in the DOM", () => {
        render(<HeaderNav />);
        expect(screen.getByRole("banner")).toBeInTheDocument();
    })
})