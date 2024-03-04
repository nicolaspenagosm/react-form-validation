import { ITicket } from "../hooks/form-hook/types";

const baseUrl = "http://localhost:3000/tickets";

export const crudClient = {
  postTicket: async (ticket: ITicket) => {
    // const response
    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(ticket),
    });
    verifyRequestSuccess(response);

    return (await response.json()) as Promise<ITicket>;
  },
  getTickets: async () => {
    const response = await fetch(baseUrl);
    verifyRequestSuccess(response);
    return (await response.json()) as Promise<ITicket[]>;
  },
};

const verifyRequestSuccess = (response: Response) => {
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
};
