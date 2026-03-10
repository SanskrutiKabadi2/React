import { useId } from "react";

function Form() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <>
      <div>
        <label htmlFor={nameId}>Name</label>
        <input id={nameId} type="text" />
      </div>

      <div>
        <label htmlFor={emailId}>Email</label>
        <input id={emailId} type="email" />
      </div>

      <div>
        <label htmlFor={passwordId}>Password</label>
        <input id={passwordId} type="password" />
      </div>
    </>
  );
}

export default Form;
