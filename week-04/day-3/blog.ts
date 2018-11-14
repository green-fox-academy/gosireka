/* 
Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost
*/

import { BlogPost } from './blogpost';

class Blog {
  blogpostList: BlogPost[] = [];

  addBlogPost(blogPost: BlogPost) {
    this.blogpostList.push(blogPost);
  }

  deleteBlogPost(index: number) {
    this.blogpostList.splice(index, 1);
  }
  updateBlogPost(index: number, newContent: BlogPost) {
    this.blogpostList.splice(index, 1, newContent);
  }
}

function initializeBlogPosts(): BlogPost[] {
  return [
    new BlogPost('James', 'First', 'aaa', '01.01'),
    new BlogPost('Victor', 'Second', 'bbb', '01.02'),
    new BlogPost('Anna', 'Third', 'ccc', '01.03'),
    new BlogPost('Leia', 'Fourth', 'ddd', '01.04')
  ]
}

let myBlog = new Blog;

for (let i: number = 0; i < initializeBlogPosts().length - 1; i++) {
  myBlog.addBlogPost(initializeBlogPosts()[i]);
}

console.log(myBlog);
console.log('-------------');
myBlog.deleteBlogPost(0);
console.log(myBlog);
console.log('-------------');
myBlog.updateBlogPost(0, initializeBlogPosts()[3]);
console.log(myBlog);
