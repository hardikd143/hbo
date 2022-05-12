import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import NumberedContent from "./NumberedContent";
import SmallHeading from "./SmallHeading";
import SmallNumberedContent from "./SmallNumberedContent";
import Table from "./TableDual";
import TableSingle from "./TableSingle";
import ParagraphTitled from "./ParagraphTitled";
const Content = ({ data }) => {
  const { type, content } = data;
  // return <div>Content</div>;
  if (type === "Heading") {
    return <Heading data={content} />;
  }
  if (type === "NumberedContent") {
    return <NumberedContent data={content} />;
  }
  if (type === "SmallNumberedContent") {
    if (data.ordered) {
      return (
        <ol>
          <SmallNumberedContent data={content} ordered={data.ordered} />
        </ol>
      );
    }
    return (
      <ul>
        <SmallNumberedContent data={content} ordered={data.ordered} />
      </ul>
    );
  }
  if (type === "Paragraph") {
    return <Paragraph data={content} />;
  }
  if (type === "ParagraphTitled") {
    return <ParagraphTitled data={content} isArray={data.isArray} />;
  }
  if (type === "SmallHeading") {
    return <SmallHeading data={content} />;
  }
  if (type === "Table") {
    return <Table data={content} />;
  }
  if (type === "TableSingle") {
    return <TableSingle data={content} />;
  }
};

export default Content;
