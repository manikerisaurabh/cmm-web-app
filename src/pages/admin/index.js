import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function AdminDashboard() {
  const router = useRouter();

  const sections = [
    { title: "Manage Vendors", desc: "Approve or reject vendor requests.", path: "/admin/vendors" },
    { title: "Manage Orders", desc: "Track and update order statuses.", path: "/admin/orders" },
    { title: "Dispute Resolution", desc: "Handle escalations and disputes.", path: "/admin/disputes" },
    { title: "Analytics & Reports", desc: "View sales and performance reports.", path: "/admin/reports" },
  ];

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [30, 45, 60, 75, 90, 100],
        backgroundColor: "#1976D2",
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>Sales Overview</Typography>
            <Bar data={data} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>Quick Stats</Typography>
            <Typography variant="body1">Total Vendors: 120</Typography>
            <Typography variant="body1">Total Orders: 450</Typography>
            <Typography variant="body1">Pending Disputes: 8</Typography>
          </Card>
        </Grid>
        {sections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ textAlign: "center", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>{section.title}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>{section.desc}</Typography>
                <Button variant="contained" color="primary" onClick={() => router.push(section.path)}>
                  View {section.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}