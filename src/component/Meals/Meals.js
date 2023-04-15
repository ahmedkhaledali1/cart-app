import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailbleMeals'

export default function Meals() {
  return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeals/>

    </Fragment>
  )
}
