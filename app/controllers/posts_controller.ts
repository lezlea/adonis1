import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
    public index = async ({response,view}:HttpContext) => {
       const html = await view.render('posts/index')
        return html;
        //return response.status(200).json('Okay it is working')
    }
}