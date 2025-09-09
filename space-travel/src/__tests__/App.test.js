import { render, screen } from "@testing-library/react";
import App from "../App";
import HomePage from "../Pages/HomePage";

test('renders nav bar', () =>{
    render(<HomePage />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
}
)