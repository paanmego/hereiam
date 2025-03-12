import React, { useState } from 'react';
import { MapPin, Calendar, Users, Car, UserPlus, Star, CreditCard, Settings, ChevronRight, LogIn, UserCircle, Map, Clock, DollarSign, BarChart } from 'lucide-react';
import './index.css';
 
// 앱 메인 컴포넌트
const HereIAmApp = () => {
  const [userType, setUserType] = useState('user'); // 'user' 또는 'business'
  const [currentView, setCurrentView] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 뷰 변경 핸들러
  const changeView = (view) => {
    setCurrentView(view);
  };

  // 로그인 상태 변경 핸들러
  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView(userType === 'user' ? 'profile' : 'businessProfile');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">약속 상점</h1>
          {isLoggedIn && (
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setCurrentView('login');
              }}
              className="text-sm text-gray-600"
            >
              로그아웃
            </button>
          )}
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 p-6">
        {!isLoggedIn ? (
          <LoginView 
            userType={userType} 
            setUserType={setUserType} 
            onLogin={handleLogin} 
          />
        ) : (
          userType === 'user' ? (
            <UserApp currentView={currentView} changeView={changeView} />
          ) : (
            <BusinessApp currentView={currentView} changeView={changeView} />
          )
        )}
      </main>

      {/* 푸터 */}
      <footer className="bg-white py-4 px-6 text-center text-sm text-gray-500">
        © 2025 약속상점. All rights reserved.
      </footer>
    </div>
  );
};

// 로그인 컴포넌트
const LoginView = ({ userType, setUserType, onLogin }) => {
  const [activeTab, setActiveTab] = useState(userType);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <div className="grid w-full grid-cols-2 mb-4">
          <button 
            onClick={() => {
              setActiveTab('user');
              setUserType('user');
            }}
            className={`py-2 ${activeTab === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100'}`}
          >
            사용자
          </button>
          <button 
            onClick={() => {
              setActiveTab('business');
              setUserType('business');
            }}
            className={`py-2 ${activeTab === 'business' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100'}`}
          >
            사업자
          </button>
        </div>

        {activeTab === 'user' ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center">사용자 로그인</h2>
            <div className="space-y-4">
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2">
                카카오톡으로 로그인
              </button>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2">
                네이버로 로그인
              </button>
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2">
                전화번호로 로그인
              </button>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">약관에 동의합니다</label>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4" onClick={onLogin}>
              로그인
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center">사업자 로그인</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">사업자 등록번호</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="사업자 등록번호를 입력하세요" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="비밀번호를 입력하세요" />
              </div>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4" onClick={onLogin}>
              로그인
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              계정이 없으신가요? <span className="text-blue-500 cursor-pointer">회원가입</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// 사용자 앱 컴포넌트
const UserApp = ({ currentView, changeView }) => {
  const views = {
    profile: <ProfileSetupView onComplete={() => changeView('dashboard')} />,
    dashboard: <UserDashboardView changeView={changeView} />,
    createPromise: <CreatePromiseView onComplete={() => changeView('dashboard')} />,
    ads: <AdsView changeView={changeView} />,
    points: <PointsView changeView={changeView} />,
  };

  return views[currentView] || views.dashboard;
};

// 프로필 설정 컴포넌트
const ProfileSetupView = ({ onComplete }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-center">프로필 설정</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">닉네임</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="닉네임을 입력하세요" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">연령대</label>
          <select className="w-full p-2 border rounded">
            <option>선택하세요</option>
            <option>10대</option>
            <option>20대</option>
            <option>30대</option>
            <option>40대</option>
            <option>50대 이상</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">성별</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-2" />
              <span>남성</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-2" />
              <span>여성</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-2" />
              <span>선택 안함</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">차량 보유 여부</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="vehicle" className="mr-2" />
              <span>있음</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="vehicle" className="mr-2" />
              <span>없음</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">관심사/취미 (다중 선택)</label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>음식</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>술집</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>카페</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>노래방</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>골프</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>쇼핑</span>
            </label>
          </div>
        </div>
        
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4"
          onClick={onComplete}
        >
          완료
        </button>
      </div>
    </div>
  );
};

// 사용자 대시보드 컴포넌트
const UserDashboardView = ({ changeView }) => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6">마이 페이지</h2>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <UserCircle className="text-indigo-600 w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium">홍길동</h3>
              <p className="text-sm text-gray-600">30대 · 남성</p>
            </div>
          </div>
          <button onClick={() => changeView('profile')} className="text-sm text-indigo-600">
            수정
          </button>
        </div>
        <div className="flex justify-between items-center mt-4 bg-indigo-50 p-3 rounded">
          <span className="text-sm">보유 포인트</span>
          <span className="font-bold text-indigo-600" onClick={() => changeView('points')}>
            2,500 P
          </span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-4 border-b">
          <h3 className="font-medium">나의 약속</h3>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-sm font-medium text-gray-700">다가오는 약속</h4>
            <button 
              className="flex items-center text-sm text-indigo-600"
              onClick={() => changeView('createPromise')}
            >
              <span>약속 추가</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <h5 className="font-medium">주간 회식</h5>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">오늘</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>서울 강남구 역삼동 봉은사로 123</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>오후 7:00</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-400" />
                  <span>6명</span>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <h5 className="font-medium">친구 생일</h5>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">다음주</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>서울 마포구 홍대입구역 근처</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>오후 6:30</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-400" />
                  <span>4명</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div 
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => changeView('ads')}
        >
          <Star className="text-yellow-500 w-8 h-8 mb-2" />
          <h3 className="font-medium">광고 보기</h3>
          <p className="text-xs text-gray-600 text-center mt-1">포인트 적립하기</p>
        </div>
        
        <div 
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => changeView('points')}
        >
          <CreditCard className="text-green-500 w-8 h-8 mb-2" />
          <h3 className="font-medium">포인트 관리</h3>
          <p className="text-xs text-gray-600 text-center mt-1">현금 전환 및 쿠폰</p>
        </div>
      </div>
    </div>
  );
};

// 약속 생성 컴포넌트
const CreatePromiseView = ({ onComplete }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-center">약속 등록</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">약속 제목</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="약속 제목을 입력하세요" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">장소 검색</label>
          <div className="relative">
            <input type="text" className="w-full p-2 border rounded pr-10" placeholder="장소를 검색하세요" />
            <MapPin className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <div className="mt-2 bg-gray-100 h-32 rounded flex items-center justify-center">
            <Map className="w-8 h-8 text-gray-400" />
            <span className="ml-2 text-sm text-gray-500">지도 영역</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">날짜 및 시간</label>
          <div className="flex space-x-2">
            <input type="date" className="flex-1 p-2 border rounded" />
            <input type="time" className="w-1/3 p-2 border rounded" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">예상 인원</label>
          <select className="w-full p-2 border rounded">
            <option>선택하세요</option>
            <option>2명</option>
            <option>3-4명</option>
            <option>5-6명</option>
            <option>7-10명</option>
            <option>10명 이상</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">교통수단</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="transport" className="mr-2" />
              <span>자차</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="transport" className="mr-2" />
              <span>대중교통</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="transport" className="mr-2" />
              <span>도보</span>
            </label>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 flex justify-center items-center">
            <UserPlus className="w-4 h-4 mr-2" />
            친구 초대
          </button>
          
          <button 
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2"
            onClick={onComplete}
          >
            약속 등록
          </button>
        </div>
      </div>
    </div>
  );
};

// 광고 보기 컴포넌트
const AdsView = ({ changeView }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">추천 광고</h2>
        <button onClick={() => changeView('dashboard')} className="text-sm text-gray-600">
          돌아가기
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">광고 이미지</span>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">강남 파스타 레스토랑</h3>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">300m</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              4인 이상 방문 시 디저트 무료 제공! 약속 장소 근처에 있는 인기 파스타 맛집입니다.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-indigo-600 font-medium">+100 포인트</span>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 text-sm rounded">
                광고 보기
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">광고 이미지</span>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">역삼 와인바</h3>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">150m</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              약속상점 앱 사용자 한정 첫 방문 시 웰컴 드링크 제공. 분위기 좋은 와인바입니다.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-indigo-600 font-medium">+150 포인트</span>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 text-sm rounded">
                광고 보기
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">광고 이미지</span>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">신사 카페</h3>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">500m</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              신메뉴 출시 기념! 아메리카노 1+1 이벤트 진행 중. 약속 전후로 들리기 좋은 카페입니다.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-indigo-600 font-medium">+80 포인트</span>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 text-sm rounded">
                광고 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 포인트 관리 컴포넌트
const PointsView = ({ changeView }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">포인트 관리</h2>
        <button onClick={() => changeView('dashboard')} className="text-sm text-gray-600">
          돌아가기
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-sm text-gray-600 mb-1">현재 보유 포인트</h3>
        <div className="flex items-end">
          <span className="text-3xl font-bold text-indigo-600">2,500</span>
          <span className="ml-1 text-lg text-indigo-600">P</span>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-2">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 text-sm flex items-center justify-center">
            <DollarSign className="w-4 h-4 mr-1" />
            출금 신청
          </button>
          <button className="bg-white border border-indigo-500 text-indigo-500 hover:bg-indigo-50 py-2 text-sm flex items-center justify-center">
            <Settings className="w-4 h-4 mr-1" />
            포인트 내역
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b">
          <h3 className="font-medium">포인트 적립 내역</h3>
        </div>
        
        <div className="divide-y">
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">강남 파스타 레스토랑</h4>
              <p className="text-xs text-gray-600">2025.03.10</p>
            </div>
            <span className="text-green-600 font-medium">+100P</span>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">역삼 와인바</h4>
              <p className="text-xs text-gray-600">2025.03.08</p>
            </div>
            <span className="text-green-600 font-medium">+150P</span>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">신사 카페</h4>
              <p className="text-xs text-gray-600">2025.03.05</p>
            </div>
            <span className="text-green-600 font-medium">+80P</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-medium">포인트 사용하기</h3>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="border rounded-lg p-3 flex justify-between items-center">
            <div>
              <h4 className="font-medium">스타벅스 아메리카노</h4>
              <p className="text-xs text-gray-600">모바일 쿠폰</p>
            </div>
            <span className="text-indigo-600 font-medium">4,300 P</span>
          </div>
          
          <div className="border rounded-lg p-3 flex justify-between items-center">
            <div>
              <h4 className="font-medium">편의점 5천원 상품권</h4>
              <p className="text-xs text-gray-600">모바일 쿠폰</p>
            </div>
            <span className="text-indigo-600 font-medium">5,000 P</span>
          </div>
          
          <div className="border rounded-lg p-3 flex justify-between items-center">
            <div>
              <h4 className="font-medium">CGV 영화 예매권</h4>
              <p className="text-xs text-gray-600">모바일 쿠폰</p>
            </div>
            <span className="text-indigo-600 font-medium">11,000 P</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 사업자 앱 컴포넌트
const BusinessApp = ({ currentView, changeView }) => {
  const views = {
    businessProfile: <BusinessProfileView onComplete={() => changeView('businessDashboard')} />,
    businessDashboard: <BusinessDashboardView changeView={changeView} />,
    createAd: <CreateAdView onComplete={() => changeView('businessDashboard')} />,
    adPerformance: <AdPerformanceView changeView={changeView} />,
    paymentManagement: <PaymentManagementView changeView={changeView} />,
  };

  return views[currentView] || views.businessDashboard;
};

// 사업자 프로필 컴포넌트
const BusinessProfileView = ({ onComplete }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-center">사업자 정보 등록</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">사업자 등록번호</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="사업자 등록번호를 입력하세요" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">상호명</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="상호명을 입력하세요" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">주소</label>
          <input type="text" className="w-full p-2 border rounded mb-2" placeholder="주소를 입력하세요" />
          <input type="text" className="w-full p-2 border rounded" placeholder="상세 주소를 입력하세요" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">업종</label>
          <select className="w-full p-2 border rounded">
            <option>선택하세요</option>
            <option>음식점</option>
            <option>카페</option>
            <option>주점</option>
            <option>뷰티/미용</option>
            <option>쇼핑</option>
            <option>기타</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
          <input type="tel" className="w-full p-2 border rounded" placeholder="연락처를 입력하세요" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">사업자 등록증 업로드</label>
          <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded">
            <p className="text-sm text-gray-500">클릭하여 파일을 업로드하세요</p>
            <p className="text-xs text-gray-400 mt-1">JPG, PNG, PDF 형식 (10MB 이하)</p>
          </div>
        </div>
        
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4"
          onClick={onComplete}
        >
          등록 완료
        </button>
      </div>
    </div>
  );
};

// 사업자 대시보드 컴포넌트
const BusinessDashboardView = ({ changeView }) => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6">사업자 대시보드</h2>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <LogIn className="text-blue-600 w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium">강남 파스타 레스토랑</h3>
              <p className="text-sm text-gray-600">음식점 · 서울 강남구</p>
            </div>
          </div>
          <button onClick={() => changeView('businessProfile')} className="text-sm text-blue-600">
            수정
          </button>
        </div>
        <div className="flex justify-between items-center mt-4 bg-blue-50 p-3 rounded">
          <span className="text-sm">광고 예산 잔액</span>
          <span className="font-bold text-blue-600" onClick={() => changeView('paymentManagement')}>
            ₩ 250,000
          </span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-4 border-b">
          <h3 className="font-medium">현재 진행 중인 광고</h3>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-sm font-medium text-gray-700">활성 캠페인</h4>
            <button 
              className="flex items-center text-sm text-blue-600"
              onClick={() => changeView('createAd')}
            >
              <span>광고 추가</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <h5 className="font-medium">봄 신메뉴 프로모션</h5>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">활성</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>4인 이상 방문 시 디저트 무료 제공!</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span>2025.03.01 ~ 2025.03.31</span>
                  <button 
                    className="text-blue-600" 
                    onClick={() => changeView('adPerformance')}
                  >
                    성과 확인
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <h5 className="font-medium">점심 특가 프로모션</h5>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">활성</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>평일 점심 파스타 세트 15% 할인!</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span>2025.03.01 ~ 2025.03.31</span>
                  <button 
                    className="text-blue-600" 
                    onClick={() => changeView('adPerformance')}
                  >
                    성과 확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div 
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => changeView('adPerformance')}
        >
          <BarChart className="text-blue-500 w-8 h-8 mb-2" />
          <h3 className="font-medium">광고 성과</h3>
          <p className="text-xs text-gray-600 text-center mt-1">광고 분석 확인</p>
        </div>
        
        <div 
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => changeView('paymentManagement')}
        >
          <DollarSign className="text-green-500 w-8 h-8 mb-2" />
          <h3 className="font-medium">결제 관리</h3>
          <p className="text-xs text-gray-600 text-center mt-1">광고비 충전/정산</p>
        </div>
      </div>
    </div>
  );
};

// 광고 등록 컴포넌트
const CreateAdView = ({ onComplete }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-center">광고 등록</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">광고 제목</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="광고 제목을 입력하세요" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">광고 내용</label>
          <textarea className="w-full p-2 border rounded h-24" placeholder="광고 내용을 입력하세요"></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">광고 이미지 업로드</label>
          <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded">
            <p className="text-sm text-gray-500">클릭하여 이미지를 업로드하세요</p>
            <p className="text-xs text-gray-400 mt-1">JPG, PNG 형식 (5MB 이하)</p>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">광고 대상</label>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">연령대 (다중 선택)</label>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">10대</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">20대</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">30대</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">40대</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">50대 이상</span>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-gray-600 mb-1 block">성별 (다중 선택)</label>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">남성</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">여성</span>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-gray-600 mb-1 block">관심사 (다중 선택)</label>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">음식</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">카페</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">술집</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">노래방</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">골프</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">광고 반경 설정</label>
          <select className="w-full p-2 border rounded">
            <option>선택하세요</option>
            <option>100m 이내</option>
            <option>300m 이내</option>
            <option>500m 이내</option>
            <option>1km 이내</option>
            <option>3km 이내</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">광고 기간</label>
          <div className="flex space-x-2">
            <input type="date" className="flex-1 p-2 border rounded" />
            <span className="flex items-center">~</span>
            <input type="date" className="flex-1 p-2 border rounded" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">광고 예산</label>
          <div className="relative">
            <input type="number" className="w-full p-2 border rounded pl-8" placeholder="예산을 입력하세요" />
            <span className="absolute left-3 top-2.5 text-gray-600">₩</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">최소 예산: ₩50,000</p>
        </div>
        
        <div className="bg-blue-50 p-3 rounded">
          <h4 className="text-sm font-medium text-blue-800 mb-1">예상 효과</h4>
          <div className="flex justify-between text-xs text-blue-700">
            <span>예상 노출수: ~1,200회</span>
            <span>예상 클릭수: ~240회</span>
          </div>
        </div>
        
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4"
          onClick={onComplete}
        >
          광고 등록
        </button>
      </div>
    </div>
  );
};

// 광고 성과 컴포넌트
const AdPerformanceView = ({ changeView }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">광고 성과</h2>
        <button onClick={() => changeView('businessDashboard')} className="text-sm text-gray-600">
          돌아가기
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">봄 신메뉴 프로모션</h3>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">활성</span>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <p className="text-xs text-gray-600">노출수</p>
            <p className="text-xl font-bold text-blue-600">1,254</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-600">클릭수</p>
            <p className="text-xl font-bold text-blue-600">243</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-600">CTR</p>
            <p className="text-xl font-bold text-blue-600">19.4%</p>
          </div>
        </div>
        
        <div className="bg-gray-100 h-40 rounded flex items-center justify-center mb-4">
          <BarChart className="w-6 h-6 text-gray-400" />
          <span className="ml-2 text-sm text-gray-500">그래프 영역</span>
        </div>
        
        <div className="text-xs text-gray-600">
          <p>집행 기간: 2025.03.01 ~ 2025.03.31</p>
          <p>집행 예산: ₩150,000 (잔액: ₩89,500)</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b">
          <h3 className="font-medium">사용자 반응</h3>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">연령대 분포</h4>
              <div className="bg-gray-100 h-28 rounded flex items-center justify-center">
                <BarChart className="w-6 h-6 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">그래프 영역</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">시간대별 클릭률</h4>
              <div className="bg-gray-100 h-28 rounded flex items-center justify-center">
                <BarChart className="w-6 h-6 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">그래프 영역</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">예상 방문자 분석</h4>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm">클릭 대비 예상 방문률: <span className="font-bold text-blue-600">37%</span></p>
                <p className="text-sm">예상 방문자 수: <span className="font-bold text-blue-600">약 90명</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button 
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2"
          onClick={() => changeView('createAd')}
        >
          광고 수정
        </button>
        
        <button 
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2"
          onClick={() => changeView('createAd')}
        >
          새 광고 만들기
        </button>
      </div>
    </div>
  );
};

// 결제 관리 컴포넌트
const PaymentManagementView = ({ changeView }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">결제 관리</h2>
        <button onClick={() => changeView('businessDashboard')} className="text-sm text-gray-600">
          돌아가기
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-sm text-gray-600 mb-1">현재 광고 예산 잔액</h3>
        <div className="flex items-end">
          <span className="text-3xl font-bold text-blue-600">250,000</span>
          <span className="ml-1 text-lg text-blue-600">원</span>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">예산 충전</h4>
          <div className="flex space-x-2 mb-4">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 text-sm">
              + 50,000원
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 text-sm">
              + 100,000원
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 text-sm">
              + 200,000원
            </button>
          </div>
          
          <div className="relative mb-4">
            <input type="number" className="w-full p-2 border rounded pl-8" placeholder="직접 입력" />
            <span className="absolute left-3 top-2.5 text-gray-600">₩</span>
          </div>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2">
            결제하기
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b">
          <h3 className="font-medium">결제 내역</h3>
        </div>
        
        <div className="divide-y">
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">광고 예산 충전</h4>
              <p className="text-xs text-gray-600">2025.03.01</p>
            </div>
            <span className="text-green-600 font-medium">+200,000원</span>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">봄 신메뉴 프로모션</h4>
              <p className="text-xs text-gray-600">2025.03.01 ~ 현재</p>
            </div>
            <span className="text-red-600 font-medium">-60,500원</span>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">점심 특가 프로모션</h4>
              <p className="text-xs text-gray-600">2025.03.01 ~ 현재</p>
            </div>
            <span className="text-red-600 font-medium">-39,500원</span>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">광고 예산 충전</h4>
              <p className="text-xs text-gray-600">2025.02.15</p>
            </div>
            <span className="text-green-600 font-medium">+150,000원</span>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-blue-800 mb-2">광고비 정산 안내</h3>
        <p className="text-xs text-blue-700 mb-2">
          광고비는 실제 노출 및 클릭에 따라 일별로 정산됩니다. 효과적인 광고 집행을 위해 충분한 예산을 유지해주세요.
        </p>
        <button className="w-full bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 py-2 text-sm mt-2">
          정산 내역 상세 보기
        </button>
      </div>
    </div>
  );
};

export default HereIAmApp;