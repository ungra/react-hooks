export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (
      typeof duration !== "number" ||
      typeof delay !== "number"
    ) {
      console.log("return");
      return;
    }
    if (element.current) {
      console.log(element.current.style);
      const { current } = element;
      current.style.opacity = 1;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
