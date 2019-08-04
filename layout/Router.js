import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import routes from '../routes';

const Router = () => {
  return (
    <NativeRouter>
        {
            routes.map((item, index) => (
                <Route key={ index } component={ item.screen } {...item} />
            ))
        }
    </NativeRouter>
  );
}

export default Router;