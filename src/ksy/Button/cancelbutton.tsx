const CancleButton = () => {

  const clearDataStorege = () => {
    sessionStorage.removeItem("id_data");
    sessionStorage.removeItem("account_data");
    sessionStorage.removeItem("pw_data");
    sessionStorage.removeItem("name_data");
    sessionStorage.removeItem("phone_data");
    sessionStorage.removeItem("age_data");
    sessionStorage.removeItem("address_data");
    sessionStorage.removeItem("email_data");

    alert("취소하여 데이터가 저장되지 않은 채 돌아갑니다");
  };

    return (
      <button
        onClick={clearDataStorege}
        // 취소, 가입 버튼 클릭 시 홈으로 돌아가도록 설정하기(합친 페이지)
        className="py-3 px-8 mx-3 rounded-3xl border font-bold text-small">
        취소
      </button>
    );
  };
  
export default CancleButton;