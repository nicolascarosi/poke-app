const Spinner = () => (
  <div
    className="spinner-container"
    id="loading-spinner"
    aria-live="polite"
    aria-busy="true"
  >
    <div className="spinner"></div>
  </div>
);

export { Spinner };
