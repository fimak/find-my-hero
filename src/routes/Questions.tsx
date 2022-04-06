import { useContext } from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { Preference } from '../types';

export default function Questions() {
  const { name, setName, preference, setPreference } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Questions</Typography>
      </Breadcrumbs>
      <main style={{ padding: '1rem 0', display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>Questions</h2>

          <FormControl fullWidth>
            <TextField
              name="name"
              label="What's your name?"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel htmlFor="preference">What do you like more: comics, series or stories?</InputLabel>
            <Select
              name="preference"
              label="What do you like more: comics, series or stories?"
              value={preference}
              onChange={(e) => setPreference(e.target.value as Preference)}
            >
              <MenuItem value="comics">Comics</MenuItem>
              <MenuItem value="series">Series</MenuItem>
              <MenuItem value="stories">Stories</MenuItem>
            </Select>
          </FormControl>

          <Button onClick={() => navigate('/results')} disabled={name.length < 2 || !preference.length}>
            Find my hero
          </Button>
        </Box>
      </main>
    </>
  );
}
