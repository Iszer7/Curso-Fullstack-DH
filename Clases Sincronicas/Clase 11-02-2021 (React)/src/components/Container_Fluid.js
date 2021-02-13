import React from 'react'
import PageHeading from './PageHeading';
import AmoutOfProductsInDb from './AmoutOfProductsInDb';
import PriceOfProducts from './PriceOfProducts';
import AmoutOfUsersInDb from './AmoutOfUsers';
import LastProductInDB from './LastProductInDB';
import CategoriesInDb from './CategoriesInDb';

function Container_Fluid() {
    return (
      <div className="container-fluid">
        <PageHeading></PageHeading>

        <div className="row">
          <AmoutOfProductsInDb></AmoutOfProductsInDb>

          <PriceOfProducts></PriceOfProducts>

          <AmoutOfUsersInDb></AmoutOfUsersInDb>
        </div>

        <div className="row">
          <LastProductInDB></LastProductInDB>

          <CategoriesInDb></CategoriesInDb>
        </div>
      </div>
    );
}

export default Container_Fluid
