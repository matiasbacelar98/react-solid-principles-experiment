import {
  Flex,
  Heading,
  Text,
  TextField as RadixTextField,
} from '@radix-ui/themes';
import { Activity, Search } from 'tabler-icons-react';

/*                           OPC
  It should be possible to add functionality to a module/component without modifying its source code.

  # Make big components from lots of smaller ones (composition rather than inheritance) 
  # The "children" pattern is pretty useful
  # The "Compund pattern" is pretty useful (you could do it without it tho)
  # The "render props" pattern can be useful

  (Zealously following any principle does more harm than good)
*/

export default function OpenClosedPrinciple() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading color='cyan'>Open Closed Principle</Heading>
      <Searchbar />
      <FancySearchbar />
    </Flex>
  );
}

//------------------------------------------------------//
function Searchbar({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return (
    <RadixTextField.Root placeholder='Search the docs…' size='3'>
      <RadixTextField.Slot>{children || <Search />}</RadixTextField.Slot>
    </RadixTextField.Root>
  );
}

function FancySearchbar() {
  return (
    <Flex direction='column'>
      <Text>Fancy Searchbar</Text>
      <Searchbar>
        <Activity />
      </Searchbar>
    </Flex>
  );
}
