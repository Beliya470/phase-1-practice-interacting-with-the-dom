// challenge.js
document.addEventListener("DOMContentLoaded", function () {
  const counter = document.getElementById("counter");
  const plusBtn = document.getElementById("plus");
  const minusBtn = document.getElementById("minus");
  const likeBtn = document.getElementById("heart");
  const pauseBtn = document.getElementById("pause");
  const restartBtn = document.getElementById("restart");
  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("list");
  let intervalId;
  let count = 0;
  let playing = true;

  function startTimer() {
    intervalId = setInterval(() => {
      if (playing) {
        count++;
        counter.innerText = count;
      }
    }, 1000);
  }

  // Removed the startTimer() invocation

  plusBtn.addEventListener("click", function () {
    count++;
    counter.innerText = count;
  });

  minusBtn.addEventListener("click", function () {
    count--;
    counter.innerText = count;
  });

  likeBtn.addEventListener("click", function () {
    const listItem = document.createElement("li");
    listItem.innerText = `Liked ${count}`;
    commentList.appendChild(listItem);
  });

  pauseBtn.addEventListener("click", function () {
    playing = !playing;
    pauseBtn.innerText = playing ? "Pause" : "Resume";
  });

  restartBtn.addEventListener("click", function () {
    count = 0;
    counter.innerText = count;
    playing = true;
    pauseBtn.innerText = "Pause";
  });

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const comment = commentInput.value.trim();
    if (comment !== "") {
      const commentElement = document.createElement("p");
      commentElement.innerText = comment;
      commentList.appendChild(commentElement);
      commentInput.value = "";
    }
  });
});
