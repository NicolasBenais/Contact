const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  $.querySelector("#contactForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      name: $.querySelector("#name").value,
      email: $.querySelector("#email").value,
      phone: $.querySelector("#phone").value,
      message: $.querySelector("#message").value,
    };

    const response = await axios.post(
      "https://contact-form-nbenais.herokuapp.com/contact-form",
      data
    );

    alert("Message sent !");
  });
});
