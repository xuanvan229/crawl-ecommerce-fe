import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Provider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
