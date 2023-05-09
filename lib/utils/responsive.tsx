import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 1920 });
  return isDesktop ? <>{children}</> : null;
};

export const Tablet = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useMediaQuery({ maxWidth: 1919 });
  return isTablet ? <>{children}</> : null;
};
