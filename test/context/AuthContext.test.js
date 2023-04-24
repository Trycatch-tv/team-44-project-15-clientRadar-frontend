import { AuthReducer } from "../../src/context/AuthContext";
import types from "../../src/context/type";

describe("AuthReducer", () => {
  test("should return default state", () => {
    const state = AuthReducer({ auth: false, user: {}, role: {} }, {});
    expect(state).toEqual({ auth: false, user: {}, role: {} });
  });

  test("should return login state", () => {
    const action = {
      type: types.AUTH_LOGIN,
      payload: { user: { email: "admin@gmail.com" }, role: {} },
    };
    const state = AuthReducer({ auth: false, user: {}, role: {} }, action);
    expect(state).toEqual({
      auth: true,
      user: action.payload.user,
      role: action.payload.role,
    });
  });

  test("should return logout state", () => {
    const initialState = {
      auth: true,
      user: { email: "admin@gmail.com" },
      role: { id: 1 },
    };

    const action = { type: types.AUTH_LOGOUT };
    const state = AuthReducer(initialState, action);
    expect(state).toEqual({
      auth: false,
      user: {},
      role: {},
    });
  });
});
