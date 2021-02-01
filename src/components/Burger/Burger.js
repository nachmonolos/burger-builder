import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys({ ingredients });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='salad' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
