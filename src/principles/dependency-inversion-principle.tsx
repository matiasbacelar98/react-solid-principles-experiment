import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';

/*                           DIP
  For React this means that functions in our high-level code shouldn't care
  how a specific task is done

  (Zealously following any principle does more harm than good)
*/

export default function DependencyInversionPrinciple() {
  // Doesnt know or care how we get the posts
  // The hook abstracts this internal wiring away
  const posts = usePosts();

  return (
    <Flex direction='column' gapY='4'>
      <Heading color='cyan'>Dependency Inversion Principle</Heading>
      <Text>Posts amount: {posts.length}</Text>
    </Flex>
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
