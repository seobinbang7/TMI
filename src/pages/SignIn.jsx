import pb from '@/api/pocketbase';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function SignIn() {
  const { postId } = useParams();
  console.log('postID:', postId);
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await pb.collection('users').getOne(postId);
        console.log('PocketHost 연동 확인:', response);
        
      } catch (error) {
        console.error('PocketHost 연동 실패:', error);
      }
    }
    getProduct();
  }, [postId]);

  return <h1>signin</h1>;
}
