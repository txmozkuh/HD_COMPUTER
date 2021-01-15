import { Grid } from '@material-ui/core';
import React from 'react';
import FilterCheckBox from 'src/components/FilterCheckBox/FilterCheckBox';
import Product from 'src/components/Product/Product';
import { FAKE_PROD } from 'src/utils/constants';
import './ProdFilter.scss';

const filterData = [
  {
    title: 'Hãng sản xuất',
    filterType: [{
      label: '', // label == null => no label
      items: [
        {
          id: 'DELL', name: 'DELL', quantity: 2
        }, {
          id: 'HP', name: 'DELL', quantity: 5
        },
        { id: 'ASUS', name: 'ASUS', quantity: 6 }
      ]
    }],
  },
  {
    title: 'Brand',
    filterType: [{
      label: '', // label == null => no label
      items: [
        {
          id: 'DELL', name: 'DELL', quantity: 2
        }, {
          id: 'HP', name: 'DELL', quantity: 5
        },
        { id: 'ASUS', name: 'ASUS', quantity: 6 }
      ]
    }],
  },
  {
    title: 'Lọc sản phẩm',
    filterType: [
      { label: 'Loại GPU', items: [{ id: 'GTX1650', name: 'GTX 1650', quantity: 1 }] },
      {
        label: 'Dòng CPU',
        items: [
          { id: 'AMDRyzen5', name: 'AMD Ryzen 5', quantity: 5 },
          { id: 'CPUAMD', name: ' CPU AMD', quantity: 1 },

        ]
      },
      { label: 'Dung lượng', items: [{ id: '8GB', name: '8 GB', quantity: 3 }] }
    ]
  }];

const suggestData = [
  {
    title: 'Cùng thương hiệu',
    prods: [1, 2].map((_) => FAKE_PROD)
  },
  {
    title: 'Cùng giá',
    prods: [1, 2, 3].map((_) => FAKE_PROD)
  }
];

const ProdFilter = (props) => {
  return (
    <Grid className="prod-filter" container direction="column" justify="flex-start" alignItems="flex-start">
      {filterData && filterData.map((filter) => (
        <FilterCheckBox
          key={filter.title}
          title={filter.title}
          data={filter.filterType}
        />
      ))}
      {
      suggestData && suggestData.map((suggestProds) => {
        const { title, prods } = suggestProds;
        console.log('xxx 245 prods: ', prods);
        return (
          <div className="suggest-prod" key={title}>
            <div className="suggest-prod__title">
              {title}
            </div>
            <Grid container direction="column" justify="center" alignItems="flex-start">
              {prods && prods.map((prod, idx) => <Product key={`suggest-prod${String(idx)}`} data={prod} />)}
            </Grid>
          </div>
        );
      })
    }
    </Grid>
  );
};

export default ProdFilter;
