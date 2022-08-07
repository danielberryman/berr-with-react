import React from "react";
import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";

export type TaskType = {
  id: string;
  title: string;
};

class Task extends React.Component<{ task: TaskType; index: string }> {
  render() {
    const { task, index } = this.props;
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(index, () => {});
    const isCurrentEventKey = activeEventKey === index;

    return (
      <Card key={task.id} style={{ marginBottom: ".5rem" }}>
        <Card.Header
          style={{
            backgroundColor: "white",
            cursor: "pointer",
            display: "flex",
          }}
        >
          <div onClick={decoratedOnClick} style={{ display: "flex" }}>
            {task.title}
            <span className="ms-auto">
              {isCurrentEventKey ? (
                <i className="bi bi-arrow-down-short"></i>
              ) : (
                <i className="bi bi-arrow-up-short"></i>
              )}
            </span>
          </div>
          <input type="checkbox" className="ms-auto" />
        </Card.Header>
        <Accordion.Collapse eventKey={index}>
          <Card.Body>Hello! Im the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default Task;
