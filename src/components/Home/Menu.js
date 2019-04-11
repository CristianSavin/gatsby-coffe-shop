import React, { Component } from 'react'
import Title from '../Global/Title'

import MenuCategoryItem from '../Home/MenuCategoryItem'
import CoffeeItem from '../Home/CoffeItem'

const getCategoryItems = items => {
  console.log(items);
  let tempItems = items.map(item => {
    return item.node.category 
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  return ['all', ...categories];
};

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items,
      coffeeItems: props.items,
      categories: getCategoryItems(props.items),
    }
  }

  handleItems = (category) => {
    const { items } = this.props
    let tempItems = [...items];
    if (category === 'all') {
      this.setState(() => {
        return {coffeeItems: tempItems}
      });
    } else {
      let items = tempItems.filter(({node}) => node.category === category);
      this.setState(() => {
        return {coffeeItems: items};
      });
    }
  }

  render() {
    const { items, categories, coffeeItems } = this.state;
    if (items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* Categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {
                  categories.map((category, index) => {
                    return (
                      <MenuCategoryItem key={index} clickEvent={this.handleItems} category={category} />
                    )
                  })
                }
              </div>
            </div>
            {/* Items */}
            <div className="row mb-5">
              {coffeeItems.map(({node}) => {
                return (
                  <CoffeeItem
                    key={node.id}
                    image={node.image}
                    title={node.title}
                    price={node.price}
                    description={node.description.description}
                  />
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>
                  there are no items to display
                </h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
