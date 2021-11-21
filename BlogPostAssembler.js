/* Blog Post Assembler */

/* Titule
   Message
   Author
   Views
   Comments
   (Author,message) 
   Live
*/

let post = {
    title: 'Title',
    message: 'My first blog post',
    author: 'Lauren Rittenberg',
    views: '3,000',
    comments: [
        { user: 'Anne Goldhill', message: 'I really love your post!'},
        { user: 'Waytt Williams', message: 'I did like, your article.'}
    ],
    Live: true
}

console.log(post);