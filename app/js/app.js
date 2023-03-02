document.addEventListener("DOMContentLoaded", () => {
  const latestList = [
    {
      name: "Samuel Jackson",
      date: "13 Apr 2022",
      text: "Hey Eva! You're cool. Nice pic!",
    },
    {
      name: "Angela Deimon",
      date: "10 Apr 2022",
      text: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
    },
    {
      name: "Ronald Harris",
      date: "8 Apr 2022",
      text: "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
    },
  ];

  const allList = [
    {
      name: "Angela Klimova",
      date: "10 Apr 2022",
      text: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
    },
    {
      name: "Samuel Jackson",
      date: "13 Apr 2022",
      text: "Hey Eva! You're cool. Nice pic!",
    },
    {
      name: "Angela Deimon",
      date: "10 Apr 2022",
      text: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
    },
    {
      name: "Sam Jackson",
      date: "13 Apr 2022",
      text: "Hey Eva! You're cool. Nice pic!",
    },
    {
      name: "Katya Deimon",
      date: "10 Apr 2022",
      text: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
    },
    {
      name: "Ronald Harris",
      date: "8 Apr 2022",
      text: "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
    },
  ];

  const about = document.querySelector(".profile__reviews");
  const btns = document.querySelectorAll(".btn__tab");
  const submitBtn = document.querySelector(".form__btn");
  const textarea = document.querySelector(".form__textarea");
  const commentsList = document.querySelectorAll(".content__items");

  const listReviews = (array) =>
    array
      .map(
        (review) => ` <div class="content__item">
			<div class="content__item-info">
				<span class="info__name">${review.name}</span>
				<time datetime="2022-04-13">${review.date}</time>
			</div>
			<div class="content__item-review">
				<p>${review.text}</p>
			</div>
		</div>`
      )
      .join("");

  document.getElementById("latest").innerHTML = listReviews(latestList);
  document.getElementById("all").innerHTML = listReviews(allList);

  about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("tab-active");
      });
      e.target.classList.add("tab-active");
      // hide other content
      commentsList.forEach(function (content) {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  submitBtn.addEventListener("click", submitFeedback);

  textarea.addEventListener("keydown", (event) => {
    if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
      submitFeedback(event);
    }
  });

  function submitFeedback(e) {
    // get feedback
    const commentForm = textarea.value;
    // if inputs are not empty
    if (commentForm) {
      // create new feedback
      newFeedback = {
        id: Math.floor(Math.random() * 1000 + 1),
        userComment: commentForm,
      };
      // clear inputs
      resetForm();
      // add feedback to list
      addFeedback(newFeedback);
    }

    e.preventDefault();
  }

  function resetForm() {
    textarea.value = "";
  }

  function addFeedback(item) {
    // create new div
    const div = document.createElement("div");
    // add class
    div.classList = "content__item";
    // add id
    div.id = item.id;
    // add html
    div.innerHTML = `
  		<div class="content__item-info">
  			<span class="info__name">Eva Jonson</span>
  			<time>Today</time>
  		</div>
  		<div class="content__item-review">
  			<p class="review__text">${item.userComment}</p>
  		</div>
    `;

    // insert new feedback into the each list(commentsList) unter two tabs
    commentsList.forEach((list) => {
      list.appendChild(div.cloneNode(true));
    });
  }
});
