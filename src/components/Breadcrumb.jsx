import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import withRouter from "./withRouter";

function Breadcrumb(props) {
  const { navigate, location } = props.object;
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link onClick={() => navigate("/")}>All Planets</Link>
        return (
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={name}>{name}</Typography>
          ) : (
            <Link key={name} onClick={() => navigate(routeTo)}>
              {name}
            </Link>
          );
        })}
        )
      </Breadcrumbs>
    </div>
  );
}

export default withRouter(Breadcrumb);
