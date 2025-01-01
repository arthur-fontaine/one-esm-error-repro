import { Redirect, Stack } from "one";

export default function AuthLayout() {
  const isAuthenticated = true as boolean; // Replace with your authentication logic
  if (isAuthenticated === false) {
    return <Redirect href="/home" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
