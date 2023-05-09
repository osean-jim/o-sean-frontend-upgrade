import { useCallback } from 'react';
import _ from 'lodash';

export const useInfiniteScroll = (setLoading, setPageStart, observer, data) => {
  const { size, loading } = data;

  const throttle = _.throttle(() => {
    setLoading(true);
    setPageStart(size + 1);
  }, 700);

  const fetchData = useCallback(() => {
    throttle();
  }, [throttle]);

  const lastDataRendered = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, fetchData, observer]
  );

  return { lastDataRendered };
};
