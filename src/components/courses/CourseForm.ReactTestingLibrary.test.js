import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

//With react testing library, there is no shallow rendering. components are always mounted.
//Unlike Enzyme, you don't need to call expect. With react testing library, the assertion is part of your query.

afterEach(cleanup);

function renderCourseForm(args) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});

// example for debug
// it('should label save button as "Saving..." when saving', () => {
//   const { getByText, debug } = renderCourseForm({ saving: true });
//   debug();
//   getByText("Saving...");
// });
