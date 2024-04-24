export const scrollToBottom = (containerRef: React.RefObject<HTMLDivElement>): void => {
  const container = containerRef.current;

  if (container) {
    container.style.overflowY = 'hidden';
    container.scrollTop = container.scrollHeight;
    container.style.overflowY = 'auto';
  }
};
