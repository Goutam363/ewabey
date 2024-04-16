import "./ProjectItem.css";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { convertUTCToIST } from "../timeUtils";

export default function ProjectItem({ project }) {
  const { istDate, istTime } = convertUTCToIST(project.start_date);

  return (
    <div>
      <Card className="card">
        <CardContent sx={{ mx: "0.5rem" }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography className="title" gutterBottom>
                {project.project_name}
              </Typography>
              {project.project_details !== "" && (
                <Typography variant="body2" className="detail">
                  <Link to={project.project_details} target="_blank" download>
                    <button>
                      <strong>Project Details</strong>
                    </button>
                  </Link>
                </Typography>
              )}
              {project.project_value !== "0" && (
                <Typography variant="body2" className="detail">
                  <strong>Project Value:</strong> {project.project_value}
                </Typography>
              )}
              {project.paid_amount !== "0" && (
                <Typography variant="body2" className="detail">
                  <strong>Paid Amount:</strong> {project.paid_amount}
                </Typography>
              )}
              <Typography variant="body2" className="detail">
                <strong>Stage:</strong> {project.project_stage}
              </Typography>
              <Typography variant="body2" className="detail">
                <strong>Status:</strong> {project.project_status}
              </Typography>
              {project.refund_amount !== "0" && (
                <Typography variant="body2" className="detail">
                  <strong>Refund Amount:</strong> {project.refund_amount}
                </Typography>
              )}
            </Grid>
            <Grid item className="createDate" sx={{ ml: "1rem" }}>
              <Typography variant="body2">
                Created: {istDate}, {istTime}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
