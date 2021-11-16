


export const getHeight = (post) => {
    let height;
    if(!post?.cover_height){
      return height = 310
    }
    if(post.cover_height > 1300){
        height = post.cover_height * 0.25
    }else if(post.cover_height > 800 &&
            post.cover_height < 1300){
        height = post.cover_height * 0.35
    }else if(post.cover_height > 400 &&
        post.cover_height < 800){
    height = post.cover_height * 0.45
    }  else if(post.cover_height < 400){
        height = post.cover_height
    } else{
        height = post.cover_height * 0.5
    }
    if(height < 250){
        height = height + 100
    }
    if(height > 500){
        height = 380
      }
    return height
}