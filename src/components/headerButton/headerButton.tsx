import "./headerButton.css"

type HeaderButtonProps = {
  label: string;
  onClick?: () => void;
};

function HeaderButton({ label, onClick }: HeaderButtonProps) {
  return (
    <button className="headerButton" onClick={onClick}>
      {label}
    </button>
  )
}

export default HeaderButton
