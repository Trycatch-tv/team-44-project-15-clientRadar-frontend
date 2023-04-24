import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import AuthProvider from "../../src/context/AuthContext";
import LoginPage from "../../src/pages/LoginPage";

describe("test <LoginPage />", () => {
  test("should show the component", () => {
    const { getByTestId } = render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/auth/login"]}>
          <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/app" element={<p>App Page</p>} />
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    );

    expect(getByTestId("test-title").innerHTML).toContain("Inicio de sesión");
  });
});
