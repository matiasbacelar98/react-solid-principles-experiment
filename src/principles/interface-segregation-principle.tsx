import { Flex, Heading, Avatar } from '@radix-ui/themes';

/*                           ISP
  # Only pass a component the props it needs
  # A component should not rely upon an interface that dont use (ts)

  (Zealously following any principle does more harm than good)
*/

export default function InterfaceSegregationPrinciple() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading color='cyan'>Interface Segregation Principle</Heading>
      <UserAvatar src={user2.src} fallback={user2.username} />
      <UserAvatar fallback={user.username} />
    </Flex>
  );
}

const user = {
  id: 1,
  name: 'John doe',
  username: 'jd',
  src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
};

const user2 = {
  id: 1,
  name: 'Betty doe',
  username: 'bt',
  src: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww',
};

function UserAvatar({ src, fallback }: { src?: string; fallback: string }) {
  return (
    <Flex gap='2'>
      <Avatar src={src} fallback={fallback} />
    </Flex>
  );
}
