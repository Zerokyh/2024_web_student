interface AccountOverlapButtonProps {
  onCheckedOverlap: () => void;
}

const AccountOverlapButton = ({onCheckedOverlap} : AccountOverlapButtonProps) => {
  const style = {
    backgroundColor : 'steelblue'
  }

    return (
      <button
        onClick={onCheckedOverlap}
        className="text-white text-sm border rounded p-1"
        style={style}>
        중복확인
      </button>
    );
  };
  
export default AccountOverlapButton;