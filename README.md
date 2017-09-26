# react-meetup-meetups

[![npm package][npm-badge]][npm]

Fetch list of [meetup.com](https://meetup.com) meetups using [their API](https://www.meetup.com/fr-FR/meetup_api/) and a ReactJS [render prop](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce?gi=53dd8375958b).

You'll need a [meetup.com API Key](https://secure.meetup.com/fr-FR/meetup_api/key/) and the ID of the meetup(s) you want to fetch.

## Usage

```js

import Meetups from "react-meetup-meetups"

const meetupsIds = [ 9114182, 2753202, 10685042 ];
const apiKey = "xxxxxx";

const fmtTime = time => new Date(time).toISOString();

const App = () => (
  <div>
    <h3>Next meetups:</h3>
    <Meetups
      apiKey={apiKey}
      meetupsIds={meetupsIds}
      render={results => results.map(({time, name}) => <li>{fmtTime(time)} : {name}</li>)}
      loading={() => <div>Loading...</div>}
    />
  </div>
);

```

See [full example](./demo) and [demo](https://revolunet.github.io/react-meetup-meetups)

Also, the codesandbox live usage example :

[npm-badge]: https://img.shields.io/npm/v/react-meetup-meetups.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-meetup-meetups
