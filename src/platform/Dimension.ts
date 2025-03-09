import { MutableRefObject, useEffect, useRef, useState } from 'react';

import throttle from 'lodash/throttle';
import ResizeObserver from 'resize-observer-polyfill';
import useMedia from 'use-media';

interface Bounds {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}

export function useMeasure(): [
  { ref: MutableRefObject<HTMLDivElement | null> },
  Bounds,
] {
  const ref = useRef<HTMLDivElement | null>(null);

  // Initialize bounds with default values for Bounds properties
  const [bounds, setBoundsState] = useState<Bounds>({
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    x: 0,
    y: 0,
  });

  const setBounds = useRef(
    throttle((params: DOMRectReadOnly) => setBoundsState(params), 500),
  ).current;

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) return;
        if (!entries.length) return;

        const entry = entries[0];
        setBounds(entry.contentRect);
      });

      resizeObserver.observe(element);

      return () => resizeObserver.unobserve(element);
    }

    return () => {};
  }, [setBounds]);

  return [{ ref }, bounds];
}

export function useDimensions(): {
  isMobile: boolean;
  isTablet: boolean;
} {
  const isMobile = useMedia({ maxWidth: 600 }, false);
  const isTablet = useMedia({ maxWidth: 960 }, false);
  return { isMobile, isTablet };
}
