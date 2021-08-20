export function useSession() {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER)
    if (localStorage.user) return JSON.parse(localStorage.user);
    else return false;
}
