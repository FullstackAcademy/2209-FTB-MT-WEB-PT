# The Order Of Operations

## Part 1 - Basic Missing Things

You need to fix the following files:

### `./api/index.js`

You need to set your API key!

### `./index.js` and `./components/index.js`

First, the imports at the top of our root `index.js` won't work, since they aren't actually exported from `./components/index.js`. Go add 5 re-exports to that file.

```js
export { default as ExportName } from './FileName';
```

Also, we haven't used ReactDOM.render at the bottom of our main `index.js`! That allows the app to be "bootstrapped" into running inside our browser.

### `./components/Title.js` and `./components/Loading.js`

These are just two tiny components that you need to create. They don't rely on any props, just some static HTML that is giving to you inside those files. Make and export the components so that our re-exports from `./components/index.js` work as expected.

## Part 2 - Bigger Components

### `./index.js`

You now need to build out the `<App />` component based on the comments in the file.

- use `useState` to create getters and setters with good default values
- pass the getters and setters to every component that needs them

### `./components/Search.js`

This file needs a ton of work, but thankfully the parts you need to do are commented out. There's a lot of help in here to get you going, and make the search component work the way it should.

- Read off of props that were passed in by `<App />`
- Then create new stateful getters/setters with `useState`
- Use those in the form fields both to set the current value, as well as update the value in the `onChange` function
- Finish the useEffect to get the centuryList and classificationList
- Update the template to create the correct options for the two dropdowns

### `./components/Preview.js`

This file also needs your help! 

- Read off the props that were passed in by `<App />`
- Create new stateful getters/setters with `useState`
- Hook up the previous and next buttons with what's in info: `info.prev` and `info.next` will be super useful both for the disabled attribute as well as the onClick function
- Build a map function for the rendering of `searchResults` passed in as a prop from `<App />`
- That rendering should also include an `onClick` which calls `setFeaturedObject` equal to the current record being iterated over in the map

### `./components/Feature.js`

This is the big test! You have to create two new components, `<Searchable />` and `<Feature />`. 

The first is internal use only, used as a "helper component" inside of `<Feature />`. `<Searchable />` as a component is for things in our feature which can start new searches (like clicking on a person's name, or a medium type, etc.). It will need to:

- destructure the props that are passed in, specifically the searchTerm and searchValue, as well as `setIsLoading` and `setSearchResults`.
- onClick should call `fetchQueryResultsFromTermAndValue`, and `setSearchResults` on the return of that call.
- Don't forget to use proper try/catch/finally
- Also make sure to use `setIsLoading` to add the loading modal

Then, `<Feature />` should:

- Destructure _so many things_ from the featured object
- Render them into a template
- Two of them, people and images, are likely to be arrays, so you'll need two `map`s to render them
- Make sure to appropriately use [react fragments](https://reactjs.org/docs/fragments.html) or [react fragment short syntax](https://reactjs.org/docs/fragments.html#short-syntax) when you are pairing up the two spans per property
- This is especially crucial when paired with a ternary... you can't have two siblings without a parent, but you don't always want a parent to render into the template. `React.Fragment` is a tag that doesn't render:

    ```jsx
    <li>
    {
      someVariable < 38
      ? <React.Fragment>
          <span>Hi</span>
          <span>What</span>
        </React.Fragment>
      : null
    }
    </li>
    ```

    ## Part 3 - Deployment

    Once your app is up and running, run `npm run build`, and then deploy your build folder to Netlify!

    You've now got a working app.
  