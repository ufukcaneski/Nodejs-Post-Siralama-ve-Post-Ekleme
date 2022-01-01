const posts = [
    { name: 'Post 1', author: 'Yazar 1' },
    { name: 'Post 2', author: 'Yazar 2' },
    { name: 'Post 3', author: 'Yazar 3' },
];

const listPosts = () => {
    posts.reverse();
    posts.map(post => {
        console.log(post.name);
    });
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        // reject('hatalı yapılandırma');
    });
    return promise1;
};

async function showPosts() {
    try {
        await addPost({ name: 'Post 4', author: 'Yazar 4' });
        listPosts();
    } catch (error) {
        console.log(error);
    }

}

showPosts();