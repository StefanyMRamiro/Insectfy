interface Props {
  label: string;
  onClick?: () => void;
}

function Button({ label, onClick }: Props) {
  return (
    <button
      className="bg-amber-900 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => onClick?.()}
    >
      {label}
    </button>
  );
}

export default Button;
