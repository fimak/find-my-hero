import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export default function Questions() {
  const [name, setName] = useState('');
  const [preference, setPreference] = useState('');

  return (
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
            onChange={(e) => setPreference(e.target.value)}
          >
            <MenuItem value="comics">Comics</MenuItem>
            <MenuItem value="series">Series</MenuItem>
            <MenuItem value="stories">Stories</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </main>
  );
}
