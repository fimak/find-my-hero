import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export default function Results() {
  return (
    <main style={{ padding: '1rem 0', display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Results</h2>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </main>
  );
}
