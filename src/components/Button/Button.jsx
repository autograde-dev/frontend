const Button = ({ label, onClick }) => {
  return (
    <button
      type="submit"
      className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded"
      onclick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
