import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  AppBar: {
    borderColor: 'red',
  },
}));

function TapBar(props) {
  const { labels, contents } = props;
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='inherit' className='classes.AppBar'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='movies tabs'
          indicatorColor='#0D253F'
          textColor='primary'
          centered
          /*variant='scrollable'
          scrollButtons='auto' */
        >
          {labels.map((text, i) => (
            <Tab label={text} {...a11yProps(i)} />
          ))}
        </Tabs>
        <SwipeableViews
          axis={'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {contents.map((content, i) => (
            <TabPanel value={value} index={i}>
              {content}
            </TabPanel>
          ))}
        </SwipeableViews>
      </AppBar>
    </div>
  );
}

export default TapBar;
