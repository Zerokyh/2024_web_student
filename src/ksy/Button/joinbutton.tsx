const JoinButton = () => {
  const style = {
    backgroundColor : 'steelblue'
  }
// Main에서 __Data로 스토리지 저장했으므로 생략가능한지 확인
  const SaveDataStorege = async () => {
    sessionStorage.getItem("id_data");
    sessionStorage.getItem("account_data");
    sessionStorage.getItem("pw_data");
    sessionStorage.getItem("name_data");
    sessionStorage.getItem("phone_data");
    sessionStorage.getItem("age_data");
    sessionStorage.getItem("address_data");
    sessionStorage.getItem("email_data");

    alert("가입을 축하드립니다!");
  };

    return (
      <button
        onClick={SaveDataStorege}
        // 취소, 가입 버튼 클릭 시 홈으로 돌아가도록 설정하기(합친 페이지)
        className="py-3 px-8 mx-3 rounded-3xl text-white font-bold text-small"
        style={style}
      >
        가입하기
      </button>
    );
  };
  
export default JoinButton;