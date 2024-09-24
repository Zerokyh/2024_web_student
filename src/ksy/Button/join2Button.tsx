const JoinButton2 = () => {
  const style = {
    backgroundColor: 'steelblue'
  };

const SaveDataStorege = async () => {
    // 세션 스토리지에서 데이터 불러오기
    const data = {
      id: sessionStorage.getItem('id_data'),
      account: sessionStorage.getItem('account_data'),
      password: sessionStorage.getItem('pw_data'),
      name: sessionStorage.getItem('name_data'),
      phone: sessionStorage.getItem('phone_data'),
      age: sessionStorage.getItem('age_data'),
      address: sessionStorage.getItem('address_data'),
      email: sessionStorage.getItem('email_data'),
    };

    try {
      const response = await fetch('https://your-server-endpoint.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      // 서버에서 응답을 받은 후 알림 표시
      alert('가입을 축하드립니다!');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <button
      onClick={SaveDataStorege}
      className="py-3 px-8 mx-3 rounded-3xl text-white font-bold text-small"
      style={style}
    >
      가입하기
    </button>
  );
};
  
export default JoinButton2;