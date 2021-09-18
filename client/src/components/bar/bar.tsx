import { FC } from "react";

const Bar: FC<{ className?: string }> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Bar;
