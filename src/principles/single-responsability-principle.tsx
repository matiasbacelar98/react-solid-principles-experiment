import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';

/*                           SRP
  Every (function/class/component) should do exactly one thing.
  
  (Zealously following any principle does more harm than good)
*/

export default function SingleResponsabilityPrinciple() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading color='cyan'>Single Responsability Principle</Heading>
      <Posts />
    </Flex>
  );
}

//------------------------------------------------------//
function Posts() {
  const posts = usePosts();

  return (
    <PostList>
      {posts.map(post => (
        <PostItem post={post} />
      ))}
    </PostList>
  );
}

function PostList({ children }: { children: JSX.Element[] }) {
  return <Flex direction='column'>{children}</Flex>;
}

function PostItem({ post }: { post: Post }) {
  return (
    <Text>
      {post.id}) - {post.title}
    </Text>
  );
}

function usePosts() {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10)));
  }, []);

  return posts;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
