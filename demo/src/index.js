import React, { Component } from "react"
import { render } from "react-dom"
import GithubCorner from 'react-github-corner';

import Meetups from "../../src"

const apiKey = "34332b3e4829556513f2d1712717158"

const meetupsIds = [
  9114182,
  2753202,
  10685042,
  3547912,
  8516612,
  6578312,
  3549682,
  7613172,
  3948412,
  10809052,
  8524122,
  10467552,
  5580242,
  3832302,
  2875862,
  11263702,
  8607622,
  10698982,
  6939902,
  10617582,
  4878062,
  2504782,
  11687472,
  13092622,
  14810042,
  17920532,
  13111762,
  16222542,
  18305583,
  15351542,
  5477392,
  18760220,
  18494651,
  2124131,
  18380309,
  18395295,
  16765722,
  18448516
]

const fmtTime = time => (new Date(time).toISOString()).substring(0, 10)

const renderMeetups = results =>
  results.map(({ time, name, event_url }) => (
    <div style={{margin:5}}>
      {fmtTime(time)} : <a href={event_url}>{name}</a>
    </div>
  ))

const Demo = () => (
  <div style={{fontFamily: 'Roboto'}}>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
    <GithubCorner href="https://github.com/revolunet/react-meetup-meetups" />
    <h3>Next Javascript meetups in France</h3>
    <Meetups apiKey={apiKey} meetupsIds={meetupsIds} render={renderMeetups} loading={() => <div>Loading...</div>} />
  </div>
)

render(<Demo />, document.querySelector("#demo"))
