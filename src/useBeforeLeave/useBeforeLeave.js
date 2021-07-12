export const useBeforeLeave = (onBefore) => {
  const handle = (evnet) => {
    if (typeof onBefore !== "function") {
      return;
    }
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () =>
      document.removeEventListener("mouseleave", handle);
  }, []);
};
