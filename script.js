function saveComment() {
    var comment = document.getElementById("comment").value;
    var commentsList = document.getElementById("comments-list");
    var newComment = document.createElement("li");
    newComment.innerHTML = comment;
    commentsList.appendChild(newComment);
    document.getElementById("comment").value = "";
  }