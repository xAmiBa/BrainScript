const PrimaryButton = ({ text, onClick, disabled = false, style = null }) => {
  return (
    <button
      className="bg-dark_bg neon-frame mt-10 disabled:disabled-neon-frame disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
