/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Validate id to be numeric + cast to number data type
router.where('id', router.matchers.number())



router.on('/').render('pages/home')



router.group(()=>{

    router.get("/about",()=>{
        return "About Page"
    })
    
    router.post('/about',()=>{
        return 'About post'
    })
}).prefix("/api")

//router.get('/posts','PostsController.index')

router.get("/posts",({response,view})=>{
    const html = view.render('posts/index')
    return html;
})

/* question mark after id means it isn't required */
router.get('/posts/:id?',({params,request})=>{
    console.log(request.all());
    const {id}=params;
    return 'Post with id '+id;
})






