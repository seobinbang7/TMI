import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('TECHIT BY LIKELION');

  function hi() {
    let a = 0;
    return a;
  }
  return (
    <div>
      <>허스키 테스트</>
    </div>
  );
}

export default Home;
