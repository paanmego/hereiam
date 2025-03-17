import React, { useState } from 'react';
import { MapPin, Calendar, Users, Car, UserPlus, Star, CreditCard, Settings, ChevronRight, LogIn, UserCircle, Map, Clock, DollarSign, BarChart, ArrowRight, Smartphone, Check, Mail, Lock, Eye, Facebook, Twitter, Instagram, GitHub, ArrowLeft, TrendingUp, TrendingDown, LineChart, Briefcase, GraduationCap, Home, Store, MoreHorizontal, MousePointer, ShoppingCart, Link } from 'lucide-react';
import './index.css';
 
// 앱 메인 컴포넌트
const HereIAmApp = () => {
  const [userType, setUserType] = useState('user'); // 'user' 또는 'business'
  const [currentView, setCurrentView] = useState('landing'); // 초기 뷰를 'landing'으로 변경
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
          <h1 
            className="text-xl font-bold text-indigo-600 cursor-pointer" 
            onClick={() => {
              if (isLoggedIn) {
                setCurrentView(userType === 'user' ? 'dashboard' : 'businessDashboard');
              } else {
                setCurrentView('landing');
              }
            }}
          >
            약속 상점
          </h1>
          {isLoggedIn ? (
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setCurrentView('landing');
              }}
              className="text-sm text-gray-600"
            >
              로그아웃
            </button>
          ) : (
            currentView !== 'login' && (
              <button 
                onClick={() => setCurrentView('login')}
                className="text-sm text-indigo-600 font-medium"
              >
                로그인
              </button>
            )
          )}
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1">
        {!isLoggedIn ? (
          currentView === 'landing' ? (
            <LandingView changeView={changeView} setUserType={setUserType} />
          ) : (
            <LoginView 
              userType={userType} 
              setUserType={setUserType} 
              onLogin={handleLogin} 
            />
          )
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

// 랜딩 페이지 컴포넌트
const LandingView = ({ changeView, setUserType }) => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      {/* 히어로 섹션 */}
      <section className="relative pt-16 pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                <span className="block text-indigo-600">약속 시간</span>
                <span className="block">지키고 혜택 받는</span>
                <span className="block">스마트한 방법</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                약속 상점은 모임 장소 인근 상점들의 실시간 혜택을 알려주고, 정시 도착한 참여자에게 특별한 보상을 제공합니다. 시간도 지키고, 혜택도 받으세요!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => changeView('login')}
                  className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
                >
                  시작하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition duration-300 flex items-center justify-center">
                  데모 보기
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden">
                <img 
                  src="https://i.ibb.co/hR08J0k/app-mockup.png" 
                  alt="약속 상점 앱 화면" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
        
        {/* 둥둥 떠다니는 요소들 */}
        <div className="hidden lg:block absolute top-20 right-40 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
        <div className="hidden lg:block absolute bottom-20 left-40 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-float"></div>
        <div className="hidden lg:block absolute bottom-40 right-80 w-10 h-10 bg-pink-400 rounded-full opacity-20 animate-float-delay"></div>
      </section>
      
      {/* 기능 소개 섹션 */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">약속 상점의 주요 기능</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* 기능 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">실시간 주변 제안</h3>
              <p className="text-gray-600">
                약속 장소 근처의 다양한 상점들의 실시간 혜택을 받아보세요. 약속 전후에 친구들과 함께 특별한 시간을 보낼 수 있습니다.
              </p>
            </div>
            
            {/* 기능 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">정시 도착 보상</h3>
              <p className="text-gray-600">
                약속 시간에 정확히 도착하면 포인트가 적립됩니다. 적립된 포인트로 다양한 혜택을 누려보세요.
              </p>
            </div>
            
            {/* 기능 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">함께하는 약속</h3>
              <p className="text-gray-600">
                친구들과 쉽게 약속을 만들고 관리할 수 있습니다. 모두의 위치를 실시간으로 확인하며 더 편리하게 약속을 지켜보세요.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 앱 다운로드 섹션 */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">지금 바로 약속 상점 앱을 다운로드하세요</h2>
              <p className="text-indigo-100 mb-8">
                언제 어디서나 쉽고 빠르게 약속을 만들고 관리할 수 있습니다. 더 많은 혜택을 모바일에서 만나보세요.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5,7.5a4.94,4.94,0,0,0-2.16.49A5.23,5.23,0,0,0,12,5.5,5.37,5.37,0,0,0,6.5,10.5v5a5.37,5.37,0,0,0,5.5,5,5.23,5.23,0,0,0,3.34-2.49A4.94,4.94,0,0,0,17.5,18.5a5,5,0,0,0,0-10Z" />
                    <path d="M13,11.5v-1H8v4.95h5V14.5H9v-1h3v-1H9v-1Z" fill="#fff" />
                  </svg>
                  <div>
                    <div className="text-xs">다운로드하기</div>
                    <div className="text-xl font-medium -mt-1">App Store</div>
                  </div>
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.435-.29.71 0 .54.435.976.976.976.275 0 .54-.109.71-.29L15.186 12 5.004 1.814c-.181-.181-.435-.29-.71-.29-.54 0-.976.435-.976.976 0 .275.109.529.29.71z" />
                  </svg>
                  <div>
                    <div className="text-xs">다운로드하기</div>
                    <div className="text-xl font-medium -mt-1">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="bg-indigo-800 rounded-2xl overflow-hidden p-2 shadow-2xl">
                  <img 
                    src="https://i.ibb.co/kgCZW7s/mobile-app.png" 
                    alt="약속 상점 모바일 앱" 
                    className="w-56 h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-indigo-300 rounded-full opacity-50 blur-md"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-300 rounded-full opacity-50 blur-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 고객 리뷰 섹션 */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">사용자들의 이야기</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 리뷰 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">K</span>
                </div>
                <div>
                  <h4 className="font-medium">김서연</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "친구들과 약속 시간을 정하는 것이 항상 어려웠는데, 약속 상점을 통해 쉽게 관리할 수 있게 되었어요. 게다가 주변 상점들의 혜택도 받을 수 있어서 일석이조입니다!"
              </p>
            </div>
            
            {/* 리뷰 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">P</span>
                </div>
                <div>
                  <h4 className="font-medium">박준호</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "늘 약속에 늦는 친구 때문에 스트레스 받았는데, 이 앱을 사용하고부터는 모두가 시간을 잘 지키게 되었어요. 포인트 적립 시스템이 정말 효과적입니다."
              </p>
            </div>
            
            {/* 리뷰 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">L</span>
                </div>
                <div>
                  <h4 className="font-medium">이지은</h4>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "사업자로서 고객을 유치하는 데 큰 도움이 됩니다. 특히 약속 시간에 맞춰 방문하는 그룹 고객들이 많아져서 매출이 증가했어요. 맞춤형 프로모션을 제공할 수 있어 좋습니다."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl text-indigo-100 mb-8">
            약속을 더 쉽게 관리하고, 특별한 혜택을 누려보세요.
          </p>
          <button 
            onClick={() => changeView('login')}
            className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            무료로 시작하기
          </button>
        </div>
      </section>
      
      {/* 비즈니스 섹션 */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 font-medium rounded-full mb-4">
                비즈니스를 위한
              </div>
              <h2 className="text-3xl font-bold mb-6">매장 홍보 효과를 극대화하세요</h2>
              <p className="text-gray-600 mb-8">
                약속 장소 주변 상점으로 등록하여 맞춤형 프로모션을 제공하고 새로운 고객을 유치하세요. 약속 상점은 사용자들의 약속 장소와 시간을 기반으로 최적의 홍보 효과를 제공합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span>약속 장소 근처의 잠재 고객 타겟팅</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span>시간대별 맞춤형 프로모션 제공</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span>방문 고객 데이터 분석 및 인사이트 제공</span>
                </li>
              </ul>
              <button 
                onClick={() => {
                  setUserType('business');
                  changeView('login');
                }}
                className="mt-8 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition duration-300"
              >
                비즈니스 계정 만들기
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="https://i.ibb.co/DQcqY9t/business-dashboard.png" 
                  alt="비즈니스 대시보드" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 뉴스레터 섹션 */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">최신 소식을 받아보세요</h2>
          <p className="text-gray-600 mb-8">
            새로운 기능과 프로모션 소식을 가장 먼저 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
            <input 
              type="email" 
              placeholder="이메일 주소 입력" 
              className="flex-1 px-4 py-3 rounded-lg sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg sm:rounded-l-none hover:bg-indigo-700 transition duration-300">
              구독하기
            </button>
          </div>
        </div>
      </section>
      
      {/* 푸터 링크 */}
      <section className="pt-16 pb-8 px-6 sm:px-10 lg:px-20 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">약속 상점</h3>
              <p className="mb-6">시간을 지키고 혜택을 받는 스마트한 약속 플랫폼</p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0">
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">서비스</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0 cursor-pointer">약속 만들기</button></li>
                <li><button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0 cursor-pointer">주변 제안</button></li>
                <li><button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0 cursor-pointer">포인트 적립</button></li>
                <li><button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0 cursor-pointer">비즈니스 솔루션</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">고객지원</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0 cursor-pointer">자주 묻는 질문</button></li>
                <li><button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0 cursor-pointer">사용 가이드</button></li>
                <li><button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0 cursor-pointer">문의하기</button></li>
                <li><button className="text-gray-400 hover:text-white transition duration-300 bg-transparent border-0 p-0 cursor-pointer">개인정보 처리방침</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">연락처</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>서울시 강남구 테헤란로 123</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>contact@yaksoktalk.com</span>
                </li>
                <li className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span>02-123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 약속 상점. All rights reserved.</p>
          </div>
        </div>
      </section>
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
  // 선택된 약속 정보를 저장하기 위한 상태
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  
  const handleAppointmentSelect = (appointment) => {
    setSelectedAppointment(appointment);
    changeView('appointmentDetail');
  };
  
  const views = {
    profile: <ProfileSetupView onComplete={() => changeView('dashboard')} />,
    dashboard: <UserDashboardView changeView={changeView} onAppointmentSelect={handleAppointmentSelect} />,
    createPromise: <CreatePromiseView onComplete={() => changeView('dashboard')} />,
    ads: <AdsView changeView={changeView} />,
    points: <PointsView changeView={changeView} />,
    nearbyProposals: <NearbyProposalsView changeView={changeView} />,
    allAppointments: <AppointmentListView changeView={changeView} />,
    appointmentDetail: <AppointmentDetailView changeView={changeView} appointment={selectedAppointment} />,
  };

  return views[currentView] || views.dashboard;
};

// 프로필 설정 컴포넌트
const ProfileSetupView = ({ onComplete }) => {
  // 관심사 선택을 위한 상태 추가
  const [selectedInterests, setSelectedInterests] = useState([]);
  
  // 관심사 목록
  const interests = [
    "등산", "독서", "영화감상", "위스키", "골프", 
    "산책", "여행", "쇼핑", "노래방", "카페투어"
  ];
  
  // 관심사 선택 핸들러
  const handleInterestChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedInterests(selectedOptions);
  };

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
          <select 
            multiple 
            className="w-full p-2 border rounded h-40" 
            onChange={handleInterestChange}
            value={selectedInterests}
          >
            {interests.map((interest, index) => (
              <option key={index} value={interest}>{interest}</option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">Ctrl 키(Mac의 경우 Cmd 키)를 누른 상태에서 클릭하여 여러 항목 선택</p>
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
const UserDashboardView = ({ changeView, onAppointmentSelect }) => {
  // 약속 데이터
  const appointments = [
    {
      id: 1,
      title: "주간 회식",
      owner: "박나나",
      date: "오늘",
      location: "서울 강남구 역삼동 봉은사로 123",
      time: "오후 7:00",
      attendees: 6,
      latitude: 37.504,
      longitude: 127.049,
      status: "confirmed"
    },
    {
      id: 2,
      title: "친구 생일",
      owner: "홍길동",
      date: "다음주",
      location: "서울 마포구 홍대입구역 근처",
      time: "오후 6:30",
      attendees: 4,
      latitude: 37.557,
      longitude: 126.924,
      status: "pending"
    }
  ];

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
            {appointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="border rounded-lg p-3 cursor-pointer hover:bg-indigo-50 transition duration-150"
                onClick={() => onAppointmentSelect(appointment)}
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <h5 className="font-medium">{appointment.title}</h5>
                    <Link className="w-4 h-4 mx-1 text-indigo-600" title="인증" />
                    <span className="ml-1 text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">Owner: {appointment.owner}</span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{appointment.date}</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{appointment.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{appointment.attendees}명</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div 
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => changeView('allAppointments')}
        >
          <Star className="text-yellow-500 w-8 h-8 mb-2" />
          <h3 className="font-medium">모든 약속</h3>
          <p className="text-xs text-gray-600 text-center mt-1">약속 확인하기</p>
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

// 약속 상세 보기 컴포넌트
const AppointmentDetailView = ({ changeView, appointment }) => {
  const defaultStats = [
    { name: "기과장", value: 90, color: "bg-yellow-400" },
    { name: "이대리", value: 70, color: "bg-orange-400" },
    { name: "박대리", value: 90, color: "bg-red-400" },
    { name: "중사장", value: 60, color: "bg-pink-400" },
    { name: "조용중사원", value: 75, color: "bg-purple-500" },
  ];

  const getLocationName = () => {
    if (!appointment) return "City Hall";
    return appointment.title === "주간 회식" ? "강남 파스타 레스토랑" : "홍대 카페";
  };

  // 약속이 없는 경우 대시보드로 리다이렉트
  if (!appointment) {
    return (
      <div className="max-w-md mx-auto text-center p-10">
        <h2 className="text-xl font-bold mb-4">약속 정보를 찾을 수 없습니다</h2>
        <p className="mb-6 text-gray-600">선택된 약속 정보가 없습니다. 마이페이지로 돌아가 약속을 선택해주세요.</p>
        <button 
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg"
          onClick={() => changeView('dashboard')}
        >
          마이페이지로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto pb-16">
      <div className="flex justify-between items-center mb-4">
        <button 
          className="text-indigo-600 flex items-center"
          onClick={() => changeView('dashboard')}
        >
          <ChevronRight className="w-5 h-5 transform rotate-180 mr-1" />
          <span>뒤로</span>
        </button>
        <h2 className="text-xl font-bold">{appointment.title}</h2>
        <div className="w-10"></div> {/* 균형을 위한 빈 공간 */}
      </div>

      {/* 지도 영역 - 약속별로 다른 지도 표시 */}
      {appointment.title === "주간 회식" ? (
        <div className="relative h-60 mb-4 rounded-lg overflow-hidden shadow-md">
          {/* 강남 지역 실제 지도 이미지 */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.ibb.co/7QMBr3D/gangnam-map.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* 지도 위에 오버레이 요소들 */}
            <div className="absolute inset-0 bg-black bg-opacity-5"></div>
            
            {/* 지도 컨트롤 UI */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-white rounded-full shadow-md p-2">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            
            {/* 줌 컨트롤 */}
            <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-md">
              <button className="p-1 border-b border-gray-200 block w-8 h-8 flex items-center justify-center">
                <span className="text-lg">+</span>
              </button>
              <button className="p-1 block w-8 h-8 flex items-center justify-center">
                <span className="text-lg">-</span>
              </button>
            </div>
            
            {/* 약속 위치 핀 */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-12 h-12 flex flex-col items-center">
                <div className="bg-red-500 w-6 h-10 rounded-b-full rounded-t-3xl flex items-center justify-center shadow-lg pulse-animation">
                  <div className="bg-white w-3 h-3 rounded-full mt-1"></div>
                </div>
                <div className="mt-1 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  약속장소
                </div>
              </div>
            </div>
            
            {/* 참석자 위치 핀들 */}
            <div className="absolute top-1/4 left-1/4 z-10">
              <div className="bg-blue-500 w-5 h-8 rounded-b-full rounded-t-3xl flex items-center justify-center shadow-md">
                <div className="bg-white w-2 h-2 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="absolute bottom-1/3 left-1/3 z-10">
              <div className="bg-green-500 w-5 h-8 rounded-b-full rounded-t-3xl flex items-center justify-center shadow-md">
                <div className="bg-white w-2 h-2 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="absolute top-1/3 right-1/4 z-10">
              <div className="bg-yellow-500 w-5 h-8 rounded-b-full rounded-t-3xl flex items-center justify-center shadow-md">
                <div className="bg-white w-2 h-2 rounded-full mt-1"></div>
              </div>
            </div>
            
            {/* 위치 이름 */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="text-sm font-medium bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-red-500" />
                <span>{getLocationName()}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-60 bg-gray-200 mb-4 rounded-lg overflow-hidden">
          {/* 지도 컨트롤 UI */}
          <div className="absolute top-4 left-2 flex space-x-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-5 h-5 text-gray-600">✓</div>
            </div>
          </div>
          
          {/* 약속 위치 핀 */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-red-500 w-6 h-10 rounded-b-full rounded-t-3xl flex items-center justify-center">
              <div className="bg-white w-3 h-3 rounded-full mt-1"></div>
            </div>
          </div>
          
          {/* 참석자 위치 핀들 */}
          <div className="absolute top-1/5 right-1/3">
            <div className="bg-purple-500 w-6 h-10 rounded-b-full rounded-t-3xl flex items-center justify-center">
              <div className="bg-white w-3 h-3 rounded-full mt-1"></div>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/4">
            <div className="bg-pink-500 w-6 h-10 rounded-b-full rounded-t-3xl flex items-center justify-center">
              <div className="bg-white w-3 h-3 rounded-full mt-1"></div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-sm font-medium bg-white px-2 py-1 rounded-full shadow">{getLocationName()}</div>
          </div>
        </div>
      )}

      {/* 약속 상세 정보 */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="mb-4 border-b pb-3">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">{appointment.title}</h3>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {appointment.date}
            </span>
          </div>
          <div className="flex items-center mt-1">
            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
              Owner: {appointment.owner}
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-3">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-3 text-indigo-500" />
            <span>{appointment.location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-3 text-indigo-500" />
            <span>{appointment.time}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-3 text-indigo-500" />
            <span>{appointment.attendees}명</span>
          </div>
          
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">약속 상태</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                appointment.status === 'confirmed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {appointment.status === 'confirmed' ? '확정됨' : '대기중'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 참석자 정시 도착 확률 제목 */}
      <h2 className="text-lg font-bold mb-6">참석자의 정시 도착 확률</h2>
      
      {/* 통계 정보 */}
      <div className="space-y-8 px-4 mb-24">
        {defaultStats.slice(0, appointment.attendees - 1).map((stat, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{stat.name}</span>
            </div>
            <div className="relative">
              <div className="w-full bg-gray-300 rounded-full h-6">
                <div 
                  className={`${stat.color} h-6 rounded-full relative`} 
                  style={{ width: `${stat.value}%` }}
                >
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full px-2 py-0.5 text-xs font-bold">
                    {stat.value}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* 제안 보기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <button 
          className="w-full border-2 border-black py-3 rounded-none text-2xl font-bold"
          onClick={() => changeView('nearbyProposals')}
        >
          제안 보기
        </button>
      </div>
      
      {/* 하단 네비게이션 - 텍스트 변경 */}
      <div className="fixed bottom-16 left-0 right-0 bg-white py-1 border-t flex justify-around">
        <div className="text-center px-6 py-1">
          <div className="text-xs font-medium">ad1</div>
        </div>
        <div className="text-center px-6 py-1">
          <div className="text-xs font-medium">ad2</div>
        </div>
        <div className="text-center px-6 py-1">
          <div className="text-xs font-medium">ad3</div>
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

// 모든 약속 리스트 보기 컴포넌트
const AppointmentListView = ({ changeView }) => {
  // 모든 약속 데이터
  const allAppointments = [
    {
      id: 1,
      title: "주간 회식",
      owner: "박나나",
      date: "오늘",
      location: "서울 강남구 역삼동 봉은사로 123",
      time: "오후 7:00",
      attendees: 6,
      status: "confirmed",
      category: "회식"
    },
    {
      id: 2,
      title: "친구 생일",
      owner: "홍길동",
      date: "다음주",
      location: "서울 마포구 홍대입구역 근처",
      time: "오후 6:30",
      attendees: 4,
      status: "pending",
      category: "생일"
    },
    {
      id: 3,
      title: "팀 미팅",
      owner: "김부장",
      date: "2025.03.15",
      location: "서울 강남구 테헤란로 123",
      time: "오전 10:00",
      attendees: 8,
      status: "confirmed",
      category: "회의"
    },
    {
      id: 4,
      title: "런치 약속",
      owner: "이과장",
      date: "2025.03.20",
      location: "서울 서초구 서초중앙로 55",
      time: "오후 12:30",
      attendees: 3,
      status: "pending",
      category: "식사"
    },
    {
      id: 5,
      title: "취미 모임",
      owner: "박대리",
      date: "2025.03.25",
      location: "서울 송파구 올림픽로 300",
      time: "오후 5:00",
      attendees: 5,
      status: "confirmed",
      category: "취미"
    }
  ];

  // 카테고리별 약속 필터링
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 모든 카테고리 추출
  const categories = ['all', ...new Set(allAppointments.map(app => app.category))];
  
  // 필터링된 약속 목록
  const filteredAppointments = activeCategory === 'all' 
    ? allAppointments 
    : allAppointments.filter(app => app.category === activeCategory);

  return (
    <div className="max-w-md mx-auto pb-16">
      <div className="flex justify-between items-center mb-4">
        <button 
          className="text-indigo-600 flex items-center"
          onClick={() => changeView('dashboard')}
        >
          <ChevronRight className="w-5 h-5 transform rotate-180 mr-1" />
          <span>뒤로</span>
        </button>
        <h2 className="text-xl font-bold">모든 약속</h2>
        <div className="w-10"></div> {/* 균형을 위한 빈 공간 */}
      </div>
      
      {/* 카테고리 필터 */}
      <div className="flex overflow-x-auto mb-6 pb-2 hide-scrollbar">
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? '전체' : category}
            </button>
          ))}
        </div>
      </div>
      
      {/* 약속 리스트 */}
      <div className="space-y-4">
        {filteredAppointments.map(appointment => (
          <div 
            key={appointment.id}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-indigo-50 transition"
            onClick={() => {
              // 다시 UserApp 컴포넌트의 handleAppointmentSelect 함수를 호출하기 위해
              // 여기서는 dashboard로 이동하고, 다시 상위 컴포넌트에서 처리하도록 함
              changeView('dashboard');
              setTimeout(() => {
                document.querySelector(`[data-appointment-id="${appointment.id}"]`)?.click();
              }, 100);
            }}
          >
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <h3 className="font-medium">{appointment.title}</h3>
                <Link className="w-4 h-4 mx-1 text-indigo-600" title="인증" />
                <span className="ml-1 text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                  Owner: {appointment.owner}
                </span>
              </div>
              <div className="flex items-center">
                <span className={`text-xs px-2.5 py-1 rounded-full ${
                  appointment.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {appointment.status === 'confirmed' ? '확정' : '대기'}
                </span>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{appointment.time}</span>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                <span>{appointment.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-gray-400" />
                <span>{appointment.attendees}명</span>
              </div>
            </div>
            
            <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between">
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                {appointment.category}
              </span>
              <button className="text-xs text-indigo-600">
                자세히 보기 <ChevronRight className="w-3 h-3 inline" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* 새 약속 만들기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <button 
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-bold"
          onClick={() => changeView('createPromise')}
        >
          새 약속 만들기
        </button>
      </div>
    </div>
  );
};

// 광고 보기 컴포넌트
const AdsView = ({ changeView }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">추천 캠페인</h2>
        <button onClick={() => changeView('dashboard')} className="text-sm text-gray-600">
          돌아가기
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <img src="https://via.placeholder.com/400x200" alt="캠페인 이미지" className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">봄 신메뉴 프로모션</h3>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">300m</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">강남 파스타 레스토랑에서 4인 이상 방문 시 디저트 무료 제공!</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>유효기간: 2025.03.31까지</span>
            <button className="text-indigo-600">자세히 보기</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <img src="https://via.placeholder.com/400x200" alt="캠페인 이미지" className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">위켄드 스페셜 할인</h3>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">500m</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">홍대 카페에서 주말 방문 시 아메리카노 1+1!</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>유효기간: 2025.03.15까지</span>
            <button className="text-indigo-600">자세히 보기</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <img src="https://via.placeholder.com/400x200" alt="캠페인 이미지" className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">신규 회원 특별 혜택</h3>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">1km</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">서초 피트니스에서 신규 회원 등록 시 첫 달 50% 할인!</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>유효기간: 2025.04.15까지</span>
            <button className="text-indigo-600">자세히 보기</button>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <button 
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-bold"
          onClick={() => changeView('dashboard')}
        >
          홈으로 돌아가기
        </button>
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
        
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-indigo-50 p-3 rounded">
            <p className="text-xs text-gray-600">이번 달 적립</p>
            <p className="font-bold text-indigo-600">+850 P</p>
          </div>
          <div className="bg-indigo-50 p-3 rounded">
            <p className="text-xs text-gray-600">이번 달 사용</p>
            <p className="font-bold text-indigo-600">-300 P</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-4 border-b">
          <h3 className="font-medium">포인트 적립/사용 내역</h3>
        </div>
        
        <div className="divide-y">
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">약속 참여 보너스</h4>
              <p className="text-xs text-gray-600">2025.03.05 · 주간 회식</p>
            </div>
            <span className="text-green-600 font-medium">+200 P</span>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">정시 도착 보너스</h4>
              <p className="text-xs text-gray-600">2025.03.05 · 주간 회식</p>
            </div>
            <span className="text-green-600 font-medium">+150 P</span>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">제안 이용</h4>
              <p className="text-xs text-gray-600">2025.03.01 · 카페 할인</p>
            </div>
            <span className="text-red-600 font-medium">-300 P</span>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-medium">첫 약속 생성 보너스</h4>
              <p className="text-xs text-gray-600">2025.02.28</p>
            </div>
            <span className="text-green-600 font-medium">+500 P</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-4 border-b">
          <h3 className="font-medium">포인트 사용하기</h3>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="border rounded-lg p-3 flex justify-between items-center">
            <div>
              <h4 className="font-medium">현금으로 전환</h4>
              <p className="text-xs text-gray-600">2,000P = 2,000원</p>
            </div>
            <button className="bg-indigo-500 text-white px-3 py-1 text-sm rounded-lg">전환하기</button>
          </div>
          
          <div className="border rounded-lg p-3 flex justify-between items-center">
            <div>
              <h4 className="font-medium">기프티콘 교환</h4>
              <p className="text-xs text-gray-600">다양한 상품 교환</p>
            </div>
            <button className="bg-indigo-500 text-white px-3 py-1 text-sm rounded-lg">교환하기</button>
          </div>
          
          <div className="border rounded-lg p-3 flex justify-between items-center">
            <div>
              <h4 className="font-medium">제안 할인</h4>
              <p className="text-xs text-gray-600">제안 사용 시 추가 할인</p>
            </div>
            <button className="bg-indigo-500 text-white px-3 py-1 text-sm rounded-lg">사용하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 주변 제안 보기 컴포넌트
const NearbyProposalsView = ({ changeView }) => {
  return (
    <div className="max-w-md mx-auto pb-16">
      <div className="flex justify-between items-center mb-4">
        <button 
          className="text-indigo-600 flex items-center"
          onClick={() => changeView('appointmentDetail')}
        >
          <ChevronRight className="w-5 h-5 transform rotate-180 mr-1" />
          <span>뒤로</span>
        </button>
        <h2 className="text-xl font-bold">주변 제안</h2>
        <div className="w-10"></div> {/* 균형을 위한 빈 공간 */}
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex justify-between items-center text-sm">
          <span><strong>9개</strong>의 주변 제안</span>
          <span>총 적립 포인트: <strong className="text-indigo-600">1,850P</strong></span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">가게별 주변 제안</h3>
            <select className="text-xs border p-1 rounded">
              <option>거리순</option>
              <option>혜택순</option>
              <option>인기순</option>
            </select>
          </div>
        </div>
        
        <div className="divide-y">
          <div className="p-4 flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-indigo-800 font-medium">1</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">파스타 10% 할인</h4>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">200P</span>
                  </div>
                  <p className="text-xs text-gray-600">주간 회식 시간에 맞춰 방문</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium text-indigo-600">300m</span>
                  <span className="block text-xs text-gray-600">이탈리안</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">강남 파스타</span>
                <button className="text-xs text-indigo-600">자세히 보기</button>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-indigo-800 font-medium">2</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">디저트 1개 무료</h4>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">150P</span>
                  </div>
                  <p className="text-xs text-gray-600">4인 이상 방문 시</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium text-indigo-600">450m</span>
                  <span className="block text-xs text-gray-600">카페</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">스위트 가든</span>
                <button className="text-xs text-indigo-600">자세히 보기</button>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-indigo-800 font-medium">3</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">음료 1+1</h4>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">100P</span>
                  </div>
                  <p className="text-xs text-gray-600">주말 오후 2시-5시</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium text-indigo-600">600m</span>
                  <span className="block text-xs text-gray-600">카페</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">커피타임</span>
                <button className="text-xs text-indigo-600">자세히 보기</button>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-indigo-800 font-medium">4</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">서비스 메뉴 제공</h4>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">180P</span>
                  </div>
                  <p className="text-xs text-gray-600">저녁 식사 예약 시</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium text-indigo-600">700m</span>
                  <span className="block text-xs text-gray-600">한식</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">한옥집</span>
                <button className="text-xs text-indigo-600">자세히 보기</button>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-indigo-800 font-medium">5</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium"><s>테이블 셋팅비 면제</s></h4>
                    <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">소진됨</span>
                  </div>
                  <p className="text-xs text-gray-600">저녁 7시 이후 방문</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium text-indigo-600">1.1km</span>
                  <span className="block text-xs text-gray-600">바/술집</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">루프탑 바</span>
                <button className="text-xs text-gray-400">품절</button>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-indigo-800 font-medium">6</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium"><s>아이스크림 무료 제공</s></h4>
                    <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">소진됨</span>
                  </div>
                  <p className="text-xs text-gray-600">가족 단위 방문객</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium text-indigo-600">1.5km</span>
                  <span className="block text-xs text-gray-600">패밀리 레스토랑</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">패밀리 키친</span>
                <button className="text-xs text-gray-400">품절</button>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-indigo-800 font-medium">7</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">와인 20% 할인</h4>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">200P</span>
                  </div>
                  <p className="text-xs text-gray-600">디너 코스 주문 시</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium text-indigo-600">2km</span>
                  <span className="block text-xs text-gray-600">프렌치</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600">르 프랑세</span>
                <button className="text-xs text-indigo-600">자세히 보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-4 mb-5">
        <button className="flex-1 py-2 border border-indigo-500 text-indigo-500 rounded-lg font-medium">
          지도로 보기
        </button>
        <button 
          className="flex-1 py-2 bg-indigo-500 text-white rounded-lg font-medium"
          onClick={() => changeView('appointmentDetail')}
        >
          돌아가기
        </button>
      </div>
    </div>
  );
};

// 사업자 앱 컴포넌트
const BusinessApp = ({ currentView, changeView }) => {
  const views = {
    businessProfile: <BusinessProfileView onComplete={() => changeView('businessDashboard')} />,
    businessDashboard: <BusinessDashboardView changeView={changeView} />,
    createCampaign: <CreateCampaignView onComplete={() => changeView('businessDashboard')} />,
    campaignPerformance: <CampaignPerformanceView changeView={changeView} />,
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
const BusinessDashboardView = () => {
  // 네비게이션 상태 관리
  const [activeView, setActiveView] = useState('dashboard');
  const views = {
    dashboard: <BusinessDashboard setActiveView={setActiveView} />,
    createCampaign: <CreateCampaignView onComplete={() => setActiveView('dashboard')} />,
    campaignPerformance: <CampaignPerformanceView onBack={() => setActiveView('dashboard')} />,
    payments: <PaymentManagementView onBack={() => setActiveView('dashboard')} />
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">사업자 대시보드</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4">
        {views[activeView]}
      </main>
    </div>
  );
};

// 사업자 대시보드 메인 컴포넌트
const BusinessDashboard = ({ setActiveView }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">캠페인 예산 잔액</h3>
            <span className="text-2xl font-bold">250,000 포인트</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">현재 진행 중인 캠페인</h3>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-md font-semibold">봄 신메뉴 프로모션 (노출 금액: 5 point)</h4>
                  <p className="text-sm text-gray-600 mt-1">2023-05-01 ~ 2023-05-31</p>
                  <p className="text-sm text-gray-600">예산: 150,000 포인트</p>
                  <p className="text-sm text-gray-600">제안 금액: 1000 point</p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    진행 중
                  </span>
                  <div className="flex mt-2 space-x-2">
                    <button 
                      className="text-xs text-blue-600 hover:text-blue-800"
                      onClick={() => setActiveView('campaignPerformance')}
                    >
                      성과 보기
                    </button>
                    <button className="text-xs text-gray-600 hover:text-gray-800">중지</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-md font-semibold">점심 특가 프로모션 (노출 금액: 5 point)</h4>
                  <p className="text-sm text-gray-600 mt-1">2023-05-10 ~ 2023-06-10</p>
                  <p className="text-sm text-gray-600">예산: 100,000 포인트</p>
                  <p className="text-sm text-gray-600">제안 금액: 1000 point</p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    진행 중
                  </span>
                  <div className="flex mt-2 space-x-2">
                    <button 
                      className="text-xs text-blue-600 hover:text-blue-800"
                      onClick={() => setActiveView('campaignPerformance')}
                    >
                      성과 보기
                    </button>
                    <button className="text-xs text-gray-600 hover:text-gray-800">중지</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <button 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setActiveView('createCampaign')}
              >
                캠페인 추가
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">캠페인 성과</h3>
            <div className="mt-1 flex justify-between items-center">
              <div className="text-4xl font-bold">3,542</div>
              <span className="text-sm text-gray-500">총 노출 수 (7일)</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-3xl font-bold">521</div>
              <span className="text-sm text-gray-500">총 방문 수 (7일)</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-3xl font-bold">14.7%</div>
              <span className="text-sm text-gray-500">방문율</span>
            </div>
            <div className="mt-4 text-center">
              <button 
                className="text-sm text-blue-600 hover:text-blue-800"
                onClick={() => setActiveView('campaignPerformance')}
              >
                자세히 보기
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">캠페인비 충전/정산</h3>
            <div className="mt-1 grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <span className="block text-xl font-semibold">충전</span>
                <span className="text-sm text-gray-500">예산 추가</span>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <span className="block text-xl font-semibold">정산</span>
                <span className="text-sm text-gray-500">지난달 정산내역</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button 
                className="text-sm text-blue-600 hover:text-blue-800"
                onClick={() => setActiveView('payments')}
              >
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 캠페인 등록 컴포넌트
const CreateCampaignView = ({ onComplete }) => {
  // 관심사 선택을 위한 상태 추가
  const [selectedInterests, setSelectedInterests] = useState([]);
  
  // 관심사 목록
  const interests = [
    "등산", "독서", "영화감상", "위스키", "산책", "여행", "골프", "노래방"
  ];
  
  // 관심사 선택 핸들러
  const handleInterestChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedInterests(selectedOptions);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-center">캠페인 등록</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">캠페인 제목</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="캠페인 제목을 입력하세요" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">캠페인 내용</label>
          <textarea className="w-full p-2 border rounded h-24" placeholder="캠페인 내용을 입력하세요"></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">캠페인 이미지 업로드</label>
          <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded">
            <p className="text-sm text-gray-500">클릭하여 이미지를 업로드하세요</p>
            <p className="text-xs text-gray-400 mt-1">JPG, PNG 형식 (5MB 이하)</p>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">캠페인 대상</label>
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
              <select 
                multiple 
                className="w-full p-2 border rounded h-40" 
                onChange={handleInterestChange}
                value={selectedInterests}
              >
                {interests.map((interest, index) => (
                  <option key={index} value={interest}>{interest}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Ctrl 키(Mac의 경우 Cmd 키)를 누른 상태에서 클릭하여 여러 항목 선택</p>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">제안 금액</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" name="paymentType" id="percentPayment" className="mr-2" />
              <label htmlFor="percentPayment" className="text-sm">노출 금액: 10% point 소모</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="paymentType" id="fixedPayment" className="mr-2" />
              <label htmlFor="fixedPayment" className="text-sm">노출당 금액: 5 point 소모</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="paymentType" id="visitPayment" className="mr-2" checked />
              <label htmlFor="visitPayment" className="text-sm">제안 금액: 1000 point, 10% point 등</label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">캠페인 반경 설정</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">캠페인 기간</label>
          <div className="flex space-x-2 mb-2">
            <input type="date" className="flex-1 p-2 border rounded" />
            <span className="flex items-center">~</span>
            <input type="date" className="flex-1 p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">캠페인 시간대</label>
            <div className="flex space-x-2">
              <input type="time" className="flex-1 p-2 border rounded" />
              <span className="flex items-center">~</span>
              <input type="time" className="flex-1 p-2 border rounded" />
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">캠페인 예산</label>
          <div className="relative">
            <input type="number" className="w-full p-2 border rounded pl-8" placeholder="예산을 입력하세요" />
            <span className="absolute left-3 top-2.5 text-gray-600">₩</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">최소 예산: ₩50,000</p>
        </div>
        
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4"
          onClick={onComplete}
        >
          캠페인 등록
        </button>
      </div>
    </div>
  );
};

// 광고 성과 보기 컴포넌트
const CampaignPerformanceView = ({ onBack }) => {
  // 탭 상태 관리를 위한 상태 추가
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">캠페인 성과 분석</h2>
      </div>
      
      {/* 탭 네비게이션 */}
      <div className="mb-6 border-b">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('overview')}
            className={`mr-8 py-4 px-1 ${
              activeTab === 'overview'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            개요
          </button>
          <button
            onClick={() => setActiveTab('demographic')}
            className={`mr-8 py-4 px-1 ${
              activeTab === 'demographic'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            인구통계
          </button>
          <button
            onClick={() => setActiveTab('behavior')}
            className={`mr-8 py-4 px-1 ${
              activeTab === 'behavior'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            행동 패턴
          </button>
          <button
            onClick={() => setActiveTab('roi')}
            className={`py-4 px-1 ${
              activeTab === 'roi'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            ROI 분석
          </button>
        </nav>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">봄 신메뉴 프로모션</h3>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">진행 중</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">집행 기간</p>
            <p className="font-medium">2023-05-01 ~ 2023-05-31</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">캠페인 예산</p>
            <p className="font-medium">150,000 포인트</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-1">총금액: 253,000 point</p>
        </div>
      </div>
      
      {/* 개요 탭 */}
      {activeTab === 'overview' && (
        <>
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">성과 요약</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">노출 수</p>
                <p className="text-2xl font-bold mt-1">12,458</p>
                <div className="flex items-center mt-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+15.2%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">클릭 수</p>
                <p className="text-2xl font-bold mt-1">1,285</p>
                <div className="flex items-center mt-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+7.8%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">CTR</p>
                <p className="text-2xl font-bold mt-1">10.3%</p>
                <div className="flex items-center mt-1 text-red-600 text-sm">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  <span>-2.1%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">방문 수</p>
                <p className="text-2xl font-bold mt-1">421</p>
                <div className="flex items-center mt-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+12.5%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">일별 추이</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg h-64 mb-2 flex items-center justify-center">
              <BarChart className="w-8 h-8 text-gray-400" />
              <span className="ml-2 text-gray-500">일별 성과 차트</span>
            </div>
            
            <div className="flex justify-end">
              <select className="border rounded px-2 py-1 text-sm">
                <option>최근 7일</option>
                <option>최근 14일</option>
                <option>최근 30일</option>
                <option>기간 설정</option>
              </select>
            </div>
          </div>
        </>
      )}
      
      {/* 인구통계 탭 */}
      {activeTab === 'demographic' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">연령별 분포</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-3">
                  {/* 연령대별 차트 */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">20대</span>
                      <span className="text-sm">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">30대</span>
                      <span className="text-sm">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">40대</span>
                      <span className="text-sm">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">50대 이상</span>
                      <span className="text-sm">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700">20-30대가 전체 사용자의 75%를 차지하며, 가장 높은 참여율을 보입니다.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">성별 분포</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-40 h-40">
                    {/* 파이 차트 형태 - 여성 65% */}
                    <div className="absolute inset-0 rounded-full border-8 border-pink-400"></div>
                    {/* 남성 35% */}
                    <div className="absolute inset-0 rounded-full" style={{ 
                      clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%)',
                      backgroundColor: '#3182CE',
                      transform: 'rotate(-126deg)'
                    }}></div>
                    {/* 중앙 원 */}
                    <div className="absolute w-24 h-24 bg-white rounded-full" style={{ left: '20%', top: '20%' }}></div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 rounded-full mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">여성</p>
                      <p className="text-xl font-bold">65%</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">남성</p>
                      <p className="text-xl font-bold">35%</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700">여성 사용자가 남성보다 약 1.85배 높은 참여율을 보입니다.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">직업별 분포</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Briefcase className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="text-sm font-medium">회사원</p>
                  <p className="text-xl font-bold">42%</p>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="w-8 h-8 text-green-500 mb-2" />
                  <p className="text-sm font-medium">학생</p>
                  <p className="text-xl font-bold">23%</p>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Home className="w-8 h-8 text-pink-500 mb-2" />
                  <p className="text-sm font-medium">주부</p>
                  <p className="text-xl font-bold">15%</p>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                    <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Store className="w-8 h-8 text-yellow-500 mb-2" />
                  <p className="text-sm font-medium">자영업</p>
                  <p className="text-xl font-bold">12%</p>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                    <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <MoreHorizontal className="w-8 h-8 text-gray-500 mb-2" />
                  <p className="text-sm font-medium">기타</p>
                  <p className="text-xl font-bold">8%</p>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                    <div className="bg-gray-500 h-1.5 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">회사원과 학생이 전체 참여자의 65%를 차지하며, 이들은 평일 점심과 저녁 시간대에 가장 활발하게 참여합니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 행동 패턴 탭 */}
      {activeTab === 'behavior' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">시간대별 참여율</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="h-64 flex items-end justify-between px-2">
                {/* 시간대별 바차트 */}
                {['06-09', '09-12', '12-15', '15-18', '18-21', '21-24'].map((time, idx) => {
                  const heights = ['15%', '35%', '65%', '40%', '78%', '25%'];
                  const colors = [
                    'bg-indigo-400', 'bg-blue-400', 'bg-teal-400', 
                    'bg-green-400', 'bg-yellow-400', 'bg-orange-400'
                  ];
                  return (
                    <div key={idx} className="flex flex-col items-center space-y-2 w-1/6">
                      <div className={`w-4/5 ${colors[idx]} rounded-t-lg`} style={{ height: heights[idx] }}></div>
                      <span className="text-xs text-gray-600">{time}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">18시~21시 사이에 가장 높은 참여율(78%)을 보이며, 점심 시간대(12시~15시)도 높은 참여율(65%)을 나타냅니다.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">요일별 참여율</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="h-48 flex items-end justify-between px-2">
                {/* 요일별 바차트 */}
                {['월', '화', '수', '목', '금', '토', '일'].map((day, idx) => {
                  const heights = ['45%', '50%', '48%', '55%', '75%', '90%', '65%'];
                  return (
                    <div key={idx} className="flex flex-col items-center space-y-2 w-1/7">
                      <div className="w-4/5 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg" style={{ height: heights[idx] }}></div>
                      <span className="text-xs text-gray-600">{day}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">주말(토요일)에 가장 높은 참여율을 보이며, 금요일에도 높은 참여가 있습니다. 주중에는 비교적 일정한 참여율을 유지합니다.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">사용자 행동 흐름</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm w-full md:w-1/5">
                  <Eye className="w-8 h-8 text-gray-500 mb-2" />
                  <p className="text-sm font-medium">노출</p>
                  <p className="text-xl font-bold">12,458</p>
                </div>
                
                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />
                
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm w-full md:w-1/5">
                  <MousePointer className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="text-sm font-medium">클릭</p>
                  <p className="text-xl font-bold">1,285</p>
                  <p className="text-xs text-gray-500">전환율: 10.3%</p>
                </div>
                
                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />
                
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm w-full md:w-1/5">
                  <MapPin className="w-8 h-8 text-green-500 mb-2" />
                  <p className="text-sm font-medium">방문</p>
                  <p className="text-xl font-bold">421</p>
                  <p className="text-xs text-gray-500">전환율: 32.8%</p>
                </div>
                
                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />
                
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm w-full md:w-1/5">
                  <ShoppingCart className="w-8 h-8 text-orange-500 mb-2" />
                  <p className="text-sm font-medium">구매</p>
                  <p className="text-xl font-bold">198</p>
                  <p className="text-xs text-gray-500">전환율: 47.0%</p>
                </div>
              </div>
              
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">노출에서 클릭까지의 전환율은 10.3%로 업계 평균(8.5%)보다 높으며, 방문자의 47%가 구매로 이어져 높은 전환율을 보입니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* ROI 분석 탭 */}
      {activeTab === 'roi' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">투자 대비 수익</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">총 지출</span>
                    <span className="text-sm font-medium">253,000 포인트</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">예상 매출</span>
                    <span className="text-sm font-medium">1,485,000원</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">ROI</span>
                    <span className="text-sm font-medium text-green-600">587%</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center h-40">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-green-600">5.8x</p>
                        <p className="text-sm text-gray-600">투자 수익률</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 border-8 border-green-200 rounded-full"></div>
                    <div className="absolute inset-0 border-8 border-green-500 rounded-full" style={{ 
                      clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%, 50% 50%)', 
                    }}></div>
                  </div>
                </div>
                
                <div className="mt-4 bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700">이 캠페인의 ROI는 587%로, 일반적인 마케팅 캠페인의 평균 ROI(300%)보다 훨씬 높습니다.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">고객 획득 비용</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">총 지출</span>
                    <span className="text-sm font-medium">253,000 포인트</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">신규 고객</span>
                    <span className="text-sm font-medium">138명</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">고객 획득 비용</span>
                    <span className="text-sm font-medium">1,833 포인트/명</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center h-40">
                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-sm">고객 한 명 획득 비용</p>
                    <p className="text-3xl font-bold">1,833</p>
                    <p className="text-sm text-gray-500">포인트/명</p>
                    <div className="mt-2 flex items-center">
                      <TrendingDown className="w-4 h-4 mr-1 text-green-600" />
                      <span className="text-sm text-green-600">이전 대비 18% 감소</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700">고객 획득 비용이 이전 캠페인보다 18% 감소했으며, 이는 이 캠페인이 비용 효율적임을 나타냅니다.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">KPI 달성률</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">노출 목표</span>
                    <span className="text-sm">10,000</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-green-200 text-green-800">
                          124.6%
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-green-800">
                          12,458
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                      <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">클릭 목표</span>
                    <span className="text-sm">1,500</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-orange-200 text-orange-800">
                          85.7%
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-orange-800">
                          1,285
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-orange-200">
                      <div style={{ width: '85.7%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">구매 목표</span>
                    <span className="text-sm">150</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-green-200 text-green-800">
                          132%
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-green-800">
                          198
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                      <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">노출과 구매 목표는 각각 124.6%와 132%로 초과 달성했으며, 클릭 목표는 85.7% 달성하여 전반적으로 성공적인 성과를 보였습니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 결제 관리 컴포넌트
const PaymentManagementView = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">캠페인비 관리</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">캠페인 예산 잔액</h3>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">현재 잔액</span>
              <span className="text-2xl font-bold">250,000 포인트</span>
            </div>
          </div>
          
          <h3 className="text-lg font-medium mb-4">캠페인 예산 충전</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <button className="p-3 border rounded-lg hover:bg-gray-50">
                <div className="text-lg font-bold">50,000</div>
                <div className="text-xs text-gray-500">포인트</div>
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-50">
                <div className="text-lg font-bold">100,000</div>
                <div className="text-xs text-gray-500">포인트</div>
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-50">
                <div className="text-lg font-bold">200,000</div>
                <div className="text-xs text-gray-500">포인트</div>
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-grow">
                <input type="number" placeholder="직접 입력" className="w-full p-3 border rounded" />
              </div>
              <span className="text-gray-500">포인트</span>
            </div>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded">
              결제하기
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">결제 내역</h3>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-3 border-b">
              <div className="grid grid-cols-3">
                <div className="font-medium">내용</div>
                <div className="font-medium">날짜</div>
                <div className="font-medium text-right">금액</div>
              </div>
            </div>
            
            <div className="divide-y">
              <div className="p-3">
                <div className="grid grid-cols-3">
                  <div>캠페인 예산 충전</div>
                  <div className="text-gray-600">2023-05-15</div>
                  <div className="text-right text-green-600">+100,000 포인트</div>
                </div>
              </div>
              
              <div className="p-3">
                <div className="grid grid-cols-3">
                  <div>캠페인 비용 차감</div>
                  <div className="text-gray-600">2023-05-10</div>
                  <div className="text-right text-red-600">-15,000 포인트</div>
                </div>
              </div>
              
              <div className="p-3">
                <div className="grid grid-cols-3">
                  <div>캠페인 예산 충전</div>
                  <div className="text-gray-600">2023-05-01</div>
                  <div className="text-right text-green-600">+200,000 포인트</div>
                </div>
              </div>
              
              <div className="p-3">
                <div className="grid grid-cols-3">
                  <div>캠페인 비용 차감</div>
                  <div className="text-gray-600">2023-04-28</div>
                  <div className="text-right text-red-600">-22,500 포인트</div>
                </div>
              </div>
              
              <div className="p-3">
                <div className="grid grid-cols-3">
                  <div>캠페인 비용 차감</div>
                  <div className="text-gray-600">2023-04-22</div>
                  <div className="text-right text-red-600">-18,350 포인트</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HereIAmApp;