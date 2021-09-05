import axios from "axios";
import useForm from "./hooks/useForm";
import { sendToServer } from "./utils";

const App = () => {
  const { formFields, handleChange } = useForm({ location: "" });
  return (
    <div>
      <h1>Weather forcast</h1>
      <form
        method="POST"
        action="submit"
        onSubmit={(event) => {
          event.preventDefault();
          sendToServer("/submit", formFields);
        }}
      >
        <input
          type="text"
          value={formFields.location}
          onChange={handleChange}
          name="location"
          id="location"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
