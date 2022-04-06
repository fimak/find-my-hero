import { useContext, useEffect } from 'react';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { AppContext } from '../AppContext';
import getHeroes from '../services';

export default function Results() {
  const { heroList, setHeroList } = useContext(AppContext);

  useEffect(() => {
    getHeroes('comics').then((response) => {
      setHeroList(response.data.data.results);
    });
  }, []);

  return (
    <main style={{ padding: '1rem 0', display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
        {!heroList && (<div style={{ textAlign: 'center' }}>Loading...</div>)}
        {heroList && (
          <>
            <h2 style={{ textAlign: 'center' }}>Results</h2>

            <List>
              {heroList.map((hero: any) => (
                <ListItem disablePadding key={hero.name}>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar alt={hero.name} src={hero.thumbnail.path + '.' + hero.thumbnail.extension} />
                    </ListItemAvatar>
                    <ListItemText primary={hero.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Box>
    </main>
  );
}
