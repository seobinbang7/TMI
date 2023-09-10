import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";

function RootLayout() {
  <div className="flex flex-col main-h-screen">
    <HeaderBar />
    <main className="flex gap-4 p-5 flex-1 dark:bg-black">
      
    </main>
    <FooterBar />
  </div>
}

export default RootLayout;