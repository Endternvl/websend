/*   
  ____          _____           _ _                       _ 
| __ ) _   _  | ____|_ __   __| | |_ ___ _ __ _ ____   _| |
|  _ \| | | | |  _| | '_ \ / _` | __/ _ \ '__| '_ \ \ / / |
| |_) | |_| | | |___| | | | (_| | ||  __/ |  | | | \ V /| |
|____/ \__, | |_____|_| |_|\__,_|\__\___|_|  |_| |_|\_/ |_|
       |___/        
*/
$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields! It's Important!");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
});
