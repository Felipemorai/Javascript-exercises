/* Constructor Function */

/* Create a post object */
/* Title, message, author, views, comments, live */

function Post(title,message,author) {
    this.title = title,
    this.message = message,
    this.author = author ,
    this.views = 0,
    this.comments = [],
    this.live = false
}

let post = new Post('New Post','Hello everyone','Lewis Morai');
console.log(post);