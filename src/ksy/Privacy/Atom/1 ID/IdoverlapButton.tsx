interface IdOverlapButtonProps {
  onCheckedOverlap: () => void;
}

const IdOverlapButton = ({onCheckedOverlap} : IdOverlapButtonProps) => {
  const style = {
    backgroundColor : 'steelblue'
  }

    return (
      <button
        onClick={onCheckedOverlap}
        className="text-white text-sm border rounded p-1"
        style={style}
      >
        중복확인
      </button>
    );
  };
  
export default IdOverlapButton;