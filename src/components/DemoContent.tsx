'use client';

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Paper,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Divider,
  Alert,
  Switch,
  FormControlLabel,
  TextField,
  Rating,
  LinearProgress,
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  Star,
  Favorite,
  Share,
  MoreVert,
  Info,
  CheckCircle,
  Warning,
  Error,
} from '@mui/icons-material';
import { useThemeContext } from './ThemeProvider';

export function DemoContent() {
  const { resolvedTheme, mounted } = useThemeContext();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Theme Switcher Demo
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Current theme: <Chip label={mounted ? resolvedTheme : 'loading'} color="primary" />
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This demo showcases a NextJS application with Material-UI that supports automatic theme switching
          based on system preferences and user selection, without the flash of wrong theme (FOWT) problem.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Cards and Form Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Sample Card
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  This card demonstrates how components adapt to different themes.
                  Notice how the background, text colors, and elevation change seamlessly.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="text" color="error">
                    Error
                  </Button>
                </Box>
                <Rating value={4} readOnly />
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Form Components
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  defaultValue="John Doe"
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  defaultValue="john@example.com"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Enable notifications"
                />
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* Alerts Section */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Alert Components
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Alert severity="info" icon={<Info />}>
              This is an info alert with custom icon
            </Alert>
            <Alert severity="success" icon={<CheckCircle />}>
              This is a success alert - theme switching works perfectly!
            </Alert>
            <Alert severity="warning" icon={<Warning />}>
              This is a warning alert about potential issues
            </Alert>
            <Alert severity="error" icon={<Error />}>
              This is an error alert for demonstration
            </Alert>
          </Box>
        </Box>

        {/* List and Progress Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Contact List
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Alice Johnson"
                    secondary="Product Manager"
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Email />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Bob Smith"
                    secondary="Software Engineer"
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Phone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Carol Williams"
                    secondary="UX Designer"
                  />
                </ListItem>
              </List>
            </Paper>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Progress Indicators
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Primary Progress
                  </Typography>
                  <LinearProgress variant="determinate" value={75} />
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Secondary Progress
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={45} 
                    color="secondary" 
                  />
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Indeterminate Progress
                  </Typography>
                  <LinearProgress />
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* Interactive Section */}
        <Box>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Interactive Elements
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Try switching themes using the icon in the top right corner. Notice how there&apos;s no flash
                of the wrong theme when you reload the page!
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="React" color="primary" />
                <Chip label="Next.js" color="secondary" />
                <Chip label="Material-UI" color="success" />
                <Chip label="TypeScript" color="info" />
                <Chip label="Theme Switching" color="warning" />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}