import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/vitest'
import HeaderNav from "./HeaderNav.jsx"

describe("HeaderNav component", () => {
    it("HeaderNav exists in the DOM", () => {
        render(<HeaderNav />);
        expect(screen.getByRole("banner")).toBeInTheDocument();
    })

    it("HeaderNav contains a header with the shop name", () => {
        render(<HeaderNav />);
        
        const heading = screen.getByRole("heading", { level: 1 })

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Shopple");
    })
})