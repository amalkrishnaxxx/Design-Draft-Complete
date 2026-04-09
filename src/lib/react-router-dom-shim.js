import NextLink from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export function Link({ to, href, children, ...props }) {
  return (
    <NextLink href={to || href || "/"} {...props}>
      {children}
    </NextLink>
  );
}

export function useLocation() {
  const router = useRouter();
  return { pathname: router.pathname };
}

export function useParams() {
  const router = useRouter();
  return useMemo(() => router.query || {}, [router.query]);
}

export function useNavigate() {
  const router = useRouter();
  return (path) => router.push(path);
}

export function BrowserRouter({ children }) {
  return children;
}

export function Routes({ children }) {
  return children;
}

export function Route() {
  return null;
}
