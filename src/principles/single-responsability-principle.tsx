import React from 'react';

/*                           SRP
  Every (function/class/component) should do exactly one thing.
  (Zealously following any principle does more harm than good)
*/

export default function SingleResponsabilityPrinciples() {
  return <div>Single responsability principle</div>;
}

//------------------------------------------------------//
function Posts() {
  return <div>Posts component</div>;
}

function PostList() {
  return <div>Post List</div>;
}

function PostItem() {
  return <div>Post item</div>;
}

function usePosts() {
  const postsHook = 'posts hook';
  return postsHook;
}
