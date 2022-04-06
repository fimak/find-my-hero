import { useContext, useEffect } from 'react';
import {
  Avatar,
  Box,
  Breadcrumbs, Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText, Pagination,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import getHeroes from '../services';

export default function Results() {
  const { name, preference, heroList, setHeroList } = useContext(AppContext);
  const navigate = useNavigate();

  const requestHeroes = (page = 0, limit = 20) => {
    getHeroes(page, limit).then((response) => {
      setHeroList( [{ name }, ...response.data.data.results ]);
    });
  }

  useEffect(() => {
    if (!(name && preference)) {
      navigate('/questions');
    } else {
      requestHeroes();
    }
  }, [name, preference, setHeroList, navigate]);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/questions"
        >
          Questions
        </Link>
        <Typography color="text.primary">Results</Typography>
      </Breadcrumbs>
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
                        <Avatar alt={hero.name} src={hero.thumbnail?.path + '.' + hero.thumbnail?.extension} />
                      </ListItemAvatar>
                      <ListItemText primary={hero.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Pagination count={10} onChange={(e, page) => requestHeroes(page, 20)} />
            </>
          )}
        </Box>
      </main>
    </>
  );
}
