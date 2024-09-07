import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  let formData = await request.formData();
  await fetch("/", {
    method: "POST",
    body: formData,
  });
  return {
    ok: true,
  };
};

export const FormPage = () => {
  return (
    <div className="container">
      <div className="section">
        <Form method="POST">
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="username"
                className="input"
                type="text"
                placeholder="Text input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Email input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};
