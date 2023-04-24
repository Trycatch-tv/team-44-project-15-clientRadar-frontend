import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import NotFoundPage from "../../src/pages/NotFoundPage";

describe("test <NotFoundPage />", () => {
  test("should show the component", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/404"]}>
        <Routes>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/app" element={<p>Load page app</p>} />
        </Routes>
      </MemoryRouter>
    );
    expect(getByTestId("test-title").innerHTML).toContain("404");
    // screen.debug();
  });
  test("should redirect to /app", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/404"]}>
        <Routes>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/app" element={<p>Load page app</p>} />
        </Routes>
      </MemoryRouter>
    );
    const button = getByTestId("test-go-home");
    fireEvent.click(button);
    // screen.debug();
    expect(screen.getByText("Load page app")).toBeTruthy();
  });
});
