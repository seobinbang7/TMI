import useDocumentTitle from '@/hooks/useDocumentTitle';

const Test = (e) => {
  return <div>Home</div>;
};

function Home() {
  useDocumentTitle('TECHIT BY LIKELION');
  function huskyTest() {
    return '안녕';
  }
  return (
    <div>
      <>허스키 테스트</>
    </div>
  );
}

export default Home;
