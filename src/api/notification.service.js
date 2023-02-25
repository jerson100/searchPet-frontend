import { AUTH_TOKEN } from "../configs/localstorage";
import { FRONTEND_API_URL } from "../consts/api";

const API_SEEN = `${FRONTEND_API_URL}/notifications`;

const seen = async ({ idNotification }) => {
  const response = await fetch(`${API_SEEN}/${idNotification}/seen`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${AUTH_TOKEN.get()}`,
    },
  });
  return response;
};

export default { seen, API_SEEN };
