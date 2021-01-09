/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Product from 'src/components/Product/Product';
import ProductList from 'src/components/ProductList/ProductList';
import './HotProductView.scss';
import clsx from 'clsx';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HotProductView(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log('xxx310 HotProductView props:  ', props);
  return (
    <div className={clsx(classes.root, 'hotProView')} {...props}>
      <Tabs className="hotProView__tab" value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Sản phẩm mới" {...a11yProps(0)} />
        <Tab label="Sản phẩm bán chạy" {...a11yProps(1)} />
        <Tab label="Sản phẩm khuyến mãi" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProductList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductList />
      </TabPanel>
    </div>
  );
}
