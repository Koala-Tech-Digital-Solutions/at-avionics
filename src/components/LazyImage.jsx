import React from "react";

export default function LazyImage({
  src,
  alt,
  className,
  placeholderSrc,
  loading = "lazy",
}) {
  const ref = React.useRef(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setReady(true);
        obs.disconnect();
      },
      { rootMargin: "300px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={ready ? src : placeholderSrc || src}
      alt={alt}
      loading={loading}
      className={className}
      onError={(e) => {
        // Debug helper: makes broken image paths obvious
        e.currentTarget.style.opacity = "0.2";
        e.currentTarget.style.background = "#e5e7eb";
      }}
    />
  );
}
