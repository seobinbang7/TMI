import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

export function RootLayout() {
  return (
    // JSX를 반환하는 함수로 변경
    <div className="flex flex-col main-h-screen">
      <HeaderBar />
      <main className="flex gap-4 p-5 flex-1 dark:bg-black"></main>
      <FooterBar />
    </div>
  );
}
