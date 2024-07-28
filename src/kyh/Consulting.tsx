const Consulting = () => {
  return (
    <>
      <div className="max-w-screen-2xl w-svw h-full flex justify-center items-center gap-10 mx-auto">
        <div className="border w-80 h-studentMaxHight">
          <div className="w-full h-full flex flex-col list-none justify-center items-center">
            <div>학생을 선택하세요 😐</div>
            <div className="w-full flex justify-evenly text-xs">
              <li>수업</li>
              <li>강사</li>
              <li>수강기간</li>
              <li>수업시간</li>
              <li>상태</li>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-studentMaxWidthRight h-studentMaxHight">
          <div>
            Class :
            <select name="className" id="class">
              <option value="">햇님반</option>
              <option value="">별님반</option>
              <option value="">달님반</option>
            </select>
          </div>

          <div className="border h-studentMediumHight px-2 py-2">
            <span>학생 리스트</span>
            <div className="flex list-none justify-around">
              <li>학생ID</li>
              <li>이름</li>
              <li>나이</li>
              <li>연락처</li>
              <li>성적</li>
              <li>출석률</li>
              <li>상담정보</li>
            </div>
          </div>
          <div className="border h-studentLowHight px-2 py-2 flex flex-col gap-2">
            <div>담당 선생님 : 홍길동</div>
            <div>이 학생은 집중력이 몹시 떨어짐</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulting;
